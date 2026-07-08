"use client";

import { useEffect, useRef } from "react";

export default function FloatingGeometry() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * (window.devicePixelRatio || 1);
      canvas.height = canvas.offsetHeight * (window.devicePixelRatio || 1);
      ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);
      time += 0.005;

      // Draw geometric wireframe
      const cx = w * 0.65;
      const cy = h * 0.5;
      const size = Math.min(w, h) * 0.35;

      ctx.strokeStyle = `rgba(77, 124, 254, ${0.08 + Math.sin(time * 1.3) * 0.04})`;
      ctx.lineWidth = 1;

      // Icosahedron-style wireframe
      const points: { x: number; y: number }[] = [];
      const rings = 6;
      const ptsPerRing = 8;

      for (let r = 0; r < rings; r++) {
        const radius = size * (0.2 + (r / rings) * 0.8);
        const yOffset = (r - rings / 2 + 0.5) * size * 0.5;
        const rot = time * 0.4 + (r * Math.PI) / rings;
        for (let i = 0; i < ptsPerRing; i++) {
          const angle = (i / ptsPerRing) * Math.PI * 2 + rot;
          points.push({
            x: cx + Math.cos(angle) * radius,
            y: cy + yOffset * Math.cos(time * 0.6) + Math.sin(angle) * radius * 0.2,
          });
        }
      }

      // Connect ring points
      for (let r = 0; r < rings - 1; r++) {
        for (let i = 0; i < ptsPerRing; i++) {
          const p1 = points[r * ptsPerRing + i];
          const p2 = points[r * ptsPerRing + ((i + 1) % ptsPerRing)];
          const p3 = points[(r + 1) * ptsPerRing + i];
          const alpha = 0.04 + Math.sin(time * 2 + r + i * 0.5) * 0.02;
          ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p3.x, p3.y);
          ctx.stroke();
          ctx.strokeStyle = `rgba(77, 124, 254, ${alpha * 0.7})`;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }

      // Floating particles
      for (let i = 0; i < 35; i++) {
        const px = cx + Math.sin(time * 0.7 + i * 1.7) * size * 1.1;
        const py = cy + Math.cos(time * 0.5 + i * 2.1) * size * 0.9;
        const dist = Math.hypot(px - cx, py - cy);
        const alpha = Math.max(0, 0.25 - dist / (size * 1.5));
        ctx.fillStyle = `rgba(34, 211, 238, ${alpha})`;
        ctx.beginPath();
        ctx.arc(px, py, 1.5, 0, Math.PI * 2);
        ctx.fill();
      }

      // Central glow
      const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, size * 0.8);
      glow.addColorStop(0, "rgba(77, 124, 254, 0.06)");
      glow.addColorStop(0.5, "rgba(139, 92, 246, 0.03)");
      glow.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(cx, cy, size * 0.8, 0, Math.PI * 2);
      ctx.fill();

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
