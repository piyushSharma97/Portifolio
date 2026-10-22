import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import portfolio from "@/data/portfolio.json";

export default function Home() {
  return (
    <>
      <Navbar navigation={portfolio.navigation} />
      <main>
        <Hero content={portfolio.hero} resume={portfolio.resume} experience={portfolio.experience.roles} />
        <About content={portfolio.about} />
        <Skills content={portfolio.skills} />
        <Projects content={portfolio.projects} />
        <Experience content={portfolio.experience} />
        <Contact content={portfolio.contact} />
      </main>
      <Footer content={portfolio.footer} />
    </>
  );
}
