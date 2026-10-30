const fs = require("node:fs");
const path = require("node:path");
const { unzipSync } = require("fflate");
const PDFDocument = require("pdfkit");

const fontPairs = process.platform === "win32"
  ? [["C:/Windows/Fonts/arial.ttf", "C:/Windows/Fonts/arialbd.ttf"]]
  : [
      ["/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"],
      ["/usr/share/fonts/truetype/liberation2/LiberationSans-Regular.ttf", "/usr/share/fonts/truetype/liberation2/LiberationSans-Bold.ttf"],
    ];
const fontPair = fontPairs.find(([regular, bold]) => fs.existsSync(regular) && fs.existsSync(bold));

const inputPath = process.argv[2];
if (!inputPath) {
  console.error('Usage: npm run resume:pdf -- "path\\to\\resume.docx"');
  process.exit(1);
}
if (!fs.existsSync(inputPath)) {
  console.error(`Resume DOCX not found: ${inputPath}`);
  process.exit(1);
}

const outputPath = process.argv[3]
  ? path.resolve(process.argv[3])
  : path.resolve(__dirname, "../public/Piyush-Sharma-Senior-Frontend-AI-Engineer.pdf");

function decodeXml(value) {
  return value
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(parseInt(code, 16)))
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'");
}

function extractParagraphs(docxPath) {
  const archive = unzipSync(new Uint8Array(fs.readFileSync(docxPath)));
  const documentXml = archive["word/document.xml"];
  if (!documentXml) {
    throw new Error("The DOCX archive does not contain word/document.xml.");
  }

  const xml = new TextDecoder().decode(documentXml);
  return [...xml.matchAll(/<w:p(?:\s[^>]*)?>([\s\S]*?)<\/w:p>/g)]
    .map(([, paragraph]) => {
      const style = paragraph.match(/<w:pStyle[^>]*w:val="([^"]+)"/)?.[1] ?? "";
      const centered = /<w:jc[^>]*w:val="center"/.test(paragraph);
      const text = [...paragraph.matchAll(/<w:t(?:\s[^>]*)?>([\s\S]*?)<\/w:t>/g)]
        .map(([, run]) => decodeXml(run))
        .join("")
        .replace(/\s+/g, " ")
        .trim();
      return { style, centered, text };
    })
    .filter((paragraph) => paragraph.text);
}

function addSectionHeading(doc, heading) {
  if (doc.y > 710) doc.addPage();
  doc.moveDown(0.55);
  doc.fillColor("#534AB7").font("ResumeBold").fontSize(10)
    .text(heading.toUpperCase(), { characterSpacing: 0.8 });
  const lineY = doc.y + 4;
  doc.moveTo(doc.page.margins.left, lineY)
    .lineTo(doc.page.width - doc.page.margins.right, lineY)
    .lineWidth(0.7)
    .strokeColor("#D9D5F1")
    .stroke();
  doc.moveDown(0.55);
}

function addBullet(doc, text) {
  const content = text.replace(/^•\s*/, "");
  doc.font("Resume").fontSize(8.5).fillColor("#333447")
    .text(`•  ${content}`, {
      indent: 7,
      paragraphGap: 2.1,
      lineGap: 1.5,
      width: doc.page.width - doc.page.margins.left - doc.page.margins.right - 7,
    });
}

function renderResume(paragraphs, destination) {
  if (!fontPair) {
    throw new Error("A Unicode-capable regular and bold font is required to preserve resume symbols.");
  }

  fs.mkdirSync(path.dirname(destination), { recursive: true });
  const output = fs.createWriteStream(destination);
  const doc = new PDFDocument({
    size: "A4",
    margins: { top: 42, bottom: 46, left: 48, right: 48 },
    bufferPages: true,
    info: {
      Title: "Piyush Sharma — Senior Frontend & AI Engineer",
      Author: "Piyush Sharma",
      Subject: "Professional resume",
    },
  });

  doc.registerFont("Resume", fontPair[0]);
  doc.registerFont("ResumeBold", fontPair[1]);
  output.on("error", (error) => {
    console.error("Unable to write the resume PDF.", error);
    process.exitCode = 1;
  });
  doc.pipe(output);

  const first = paragraphs[0];
  doc.fillColor("#17152E").font("ResumeBold").fontSize(23)
    .text(first.text, { align: "center" });
  doc.moveDown(0.32);

  for (const paragraph of paragraphs.slice(1)) {
    if (paragraph.style.toLowerCase().startsWith("heading")) {
      addSectionHeading(doc, paragraph.text);
      continue;
    }

    if (paragraph.text.startsWith("•")) {
      addBullet(doc, paragraph.text);
      continue;
    }

    const isPortfolioLink = paragraph.text.startsWith("Portfolio:");
    const looksLikeRoleOrProject = paragraph.text.includes("|")
      && /(?:20\d{2}|present|jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i.test(paragraph.text);

    if (isPortfolioLink || paragraph.centered) {
      doc.font("Resume").fontSize(8).fillColor(isPortfolioLink ? "#534AB7" : "#505064")
        .text(paragraph.text, { align: "center", lineGap: 1 });
    } else if (looksLikeRoleOrProject) {
      doc.moveDown(0.28);
      doc.font("ResumeBold").fontSize(8.7).fillColor("#19182B")
        .text(paragraph.text, { lineGap: 1 });
    } else {
      doc.font("Resume").fontSize(8.5).fillColor("#333447")
        .text(paragraph.text, { lineGap: 2, paragraphGap: 3 });
    }
  }

  const range = doc.bufferedPageRange();
  for (let page = range.start; page < range.start + range.count; page += 1) {
    doc.switchToPage(page);
    const footerY = doc.page.height - 30;
    doc.moveTo(doc.page.margins.left, footerY - 7)
      .lineTo(doc.page.width - doc.page.margins.right, footerY - 7)
      .lineWidth(0.5)
      .strokeColor("#E5E3F2")
      .stroke();
    doc.font("Resume").fontSize(7).fillColor("#77768B")
      .text("PIYUSH SHARMA  ·  PROFESSIONAL RESUME", doc.page.margins.left, footerY, {
        lineBreak: false,
      });
    doc.text(`${page - range.start + 1} / ${range.count}`, 0, footerY, {
      align: "right",
      lineBreak: false,
    });
  }

  doc.end();
  output.on("finish", () => {
    console.log(`Created ${destination}`);
  });
}

try {
  renderResume(extractParagraphs(inputPath), outputPath);
} catch (error) {
  console.error("Unable to convert the resume DOCX to PDF.", error);
  process.exit(1);
}
