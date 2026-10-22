"use client";

import { useRef, type PointerEvent } from "react";
import { BrainCircuit, Code2, Sparkles, type LucideIcon } from "lucide-react";

const techIcons: Record<string, LucideIcon> = {
  React: Code2,
  TypeScript: Code2,
  Playwright: Sparkles,
  "AI / RAG": BrainCircuit,
  "Next.js": Code2,
};

const particles = Array.from({ length: 48 }, (_, index) => ({
  left: `${(index * 43 + 13) % 100}%`,
  top: `${(index * 67 + 9) % 100}%`,
  delay: `${(index % 11) * -0.7}s`,
  duration: `${5 + (index % 7)}s`,
}));

export function FloatingShapes({
  techItems,
}: {
  techItems: { label: string; symbol: string; style: string }[];
}) {
  const stageRef = useRef<HTMLDivElement>(null);

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse" || !stageRef.current) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    stageRef.current.style.setProperty("--pointer-x", `${x * 4}deg`);
    stageRef.current.style.setProperty("--pointer-y", `${y * -4}deg`);
  }

  function resetPointer() {
    stageRef.current?.style.setProperty("--pointer-x", "0deg");
    stageRef.current?.style.setProperty("--pointer-y", "0deg");
  }

  return (
    <div className="floating-scene" aria-hidden="true">
      <div className="scene-glow scene-glow--left" />
      <div className="scene-glow scene-glow--right" />
      <div
        className="shape-stage"
        onPointerLeave={resetPointer}
        onPointerMove={handlePointerMove}
        ref={stageRef}
      >
        <div className="tech-float-layer">
          {techItems.map(({ label, symbol, style }, index) => {
            const Icon = techIcons[label];
            return (
              <div
                className={`tech-float ${style}`}
                key={label}
                style={{ animationDelay: `${index * -1.6}s` }}
              >
                <span className="tech-float-symbol">{symbol}</span>
                {Icon && <Icon className="tech-float-icon" size={13} />}
                <span className="tech-float-label">{label}</span>
              </div>
            );
          })}
        </div>
        <div className="hero-art-object">
          <div className="art-backdrop-ring art-backdrop-ring--outer" />
          <div className="art-backdrop-ring art-backdrop-ring--middle" />
          <div className="art-backdrop-ring art-backdrop-ring--inner" />
          <div className="art-orbit art-orbit--horizontal">
            <span className="art-node art-node--react"><Code2 size={17} /><b>REACT</b></span>
          </div>
          <div className="art-orbit art-orbit--diagonal">
            <span className="art-node art-node--ai"><BrainCircuit size={17} /><b>AI</b></span>
          </div>
          <div className="art-orbit art-orbit--vertical">
            <span className="art-node art-node--spark"><Sparkles size={16} /><b>BUILD</b></span>
          </div>
          <div className="art-core">
            <div className="art-core-shine" />
            <div className="art-core-grid" />
            <span className="art-core-mark">PS</span>
            <span className="art-core-caption">DIGITAL UNIVERSE</span>
          </div>
          <span className="art-coordinate art-coordinate--top">FIG. 01 <i>·</i> 3D INTERFACE</span>
          <span className="art-coordinate art-coordinate--bottom">DESIGN <i>×</i> ENGINEERING</span>
        </div>
        <div className="floating-cube">
          <span className="cube-face cube-front" />
          <span className="cube-face cube-back" />
          <span className="cube-face cube-right" />
          <span className="cube-face cube-left" />
          <span className="cube-face cube-top" />
          <span className="cube-face cube-bottom" />
        </div>
        <div className="floating-ring floating-ring--one" />
        <div className="floating-ring floating-ring--two" />
        <div className="floating-ring floating-ring--three" />
        <div className="floating-polyhedron floating-polyhedron--one" />
        <div className="floating-polyhedron floating-polyhedron--two" />
      </div>
      <div className="particle-field">
        {particles.map((particle, index) => (
          <i
            key={index}
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
      </div>
    </div>
  );
}
