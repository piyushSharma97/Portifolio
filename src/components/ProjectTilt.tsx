"use client";

import { useRef, useState, type CSSProperties, type ReactNode, type MouseEvent } from "react";

export function ProjectTilt({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState<CSSProperties>({});

  function handleMove(event: MouseEvent<HTMLDivElement>) {
    const bounds = cardRef.current?.getBoundingClientRect();
    if (!bounds) return;
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;
    setTilt({
      transform: `perspective(1100px) rotateX(${(0.5 - y) * 5}deg) rotateY(${(x - 0.5) * 6}deg) translateY(-4px)`,
    });
  }

  return (
    <div
      className={className}
      onMouseLeave={() => setTilt({})}
      onMouseMove={handleMove}
      ref={cardRef}
      style={tilt}
    >
      {children}
    </div>
  );
}
