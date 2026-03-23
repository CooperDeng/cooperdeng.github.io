import { useEffect, useRef } from "react";

export default function PixelFlowBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const cellSize = 8;
    let cols = 0;
    let rows = 0;
    let time = 0;
    let animationFrame = 0;

    const resize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      cols = Math.ceil(width / cellSize);
      rows = Math.ceil(height / cellSize);
    };

    const draw = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      ctx.clearRect(0, 0, width, height);
      time += 0.006;

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = col * cellSize;
          const y = row * cellSize;

          const nx = col / Math.max(cols, 1);
          const ny = row / Math.max(rows, 1);

          const waveA =
            Math.sin(nx * 8 + time * 0.9) +
            Math.cos(ny * 7 - time * 1.1);

          const waveB =
            Math.sin((nx + ny) * 10 - time * 1.4) +
            Math.cos((nx - ny) * 9 + time * 0.8);

          const waveC = Math.sin(col * 0.55 + row * 0.35 + time * 1.7);

          const field = waveA * 0.35 + waveB * 0.25 + waveC * 0.4;

          const normalized = (field + 2.2) / 4.4;
          const clamped = Math.max(0, Math.min(1, normalized));

          const alpha = 0.04 + clamped * 0.22;
          const inset = clamped > 0.72 ? 0 : 1;

          let color = `rgba(40, 110, 60, ${alpha * 0.7})`;

          if (clamped > 0.78) {
            color = `rgba(90, 200, 120, ${0.08 + clamped * 0.18})`;
          } else if (clamped > 0.58) {
            color = `rgba(60, 150, 90, ${alpha * 0.85})`;
          }

          ctx.fillStyle = color;
          ctx.fillRect(
            x + inset,
            y + inset,
            Math.max(1, cellSize - 1 - inset * 2),
            Math.max(1, cellSize - 1 - inset * 2)
          );
        }
      }

      animationFrame = requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 opacity-45"
    />
  );
}