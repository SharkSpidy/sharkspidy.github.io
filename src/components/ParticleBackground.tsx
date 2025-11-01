// src/components/ParticleBackground.tsx
import React, { useRef, useEffect } from "react";

type Particle = {
  x: number;
  y: number;
  z: number;
  size: number;
  vx: number;
  vy: number;
  hue: number;
  alpha: number;
};

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let particles: Particle[] = [];
    let raf = 0;
    let isDark = document.documentElement.classList.contains("dark");
    let t = 0;
    const DPR = Math.min(window.devicePixelRatio || 1, 2);

    const clamp = (n: number, min: number, max: number) =>
      Math.max(min, Math.min(max, n));

    const rand = (min: number, max: number) =>
      Math.random() * (max - min) + min;

    const resize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = Math.floor(w * DPR);
      canvas.height = Math.floor(h * DPR);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      initParticles();
    };

    const baseDensity = 0.08;
    function particleCountForViewport() {
      const area = window.innerWidth * window.innerHeight;
      return clamp(Math.floor((area / 10000) * baseDensity * 80), 50, 160);
    }

    function makeParticle(): Particle {
      const z = Math.pow(Math.random(), 1.6);
      const speed = isDark ? rand(0.1, 0.25) : rand(0.015, 0.06);
      return {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        z,
        size: clamp((1 - z) * rand(1.4, 2.6), 0.8, 3.2),
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
        hue: isDark ? rand(200, 260) : rand(200, 230),
        alpha: isDark
          ? rand(0.18, 0.4) * (1 - z)
          : rand(0.15, 0.3) * (1 - z),
      };
    }

    function initParticles() {
      particles = Array.from({ length: particleCountForViewport() }, makeParticle);
    }

    const themeObserver = new MutationObserver(() => {
      const nowDark = document.documentElement.classList.contains("dark");
      if (nowDark !== isDark) {
        isDark = nowDark;
        particles.forEach((p) => {
          p.hue = isDark ? rand(200, 260) : rand(200, 230);
        });
      }
    });

    themeObserver.observe(document.documentElement, { attributes: true });

    let resizeTimer = 0 as unknown as number;
    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(resize, 150);
    };

    function drawGradientBackground(time: number) {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const angle = (Math.sin(time * 0.0002) + 1) * Math.PI * 0.3 + 0.2;
      const x = Math.cos(angle) * w;
      const y = Math.sin(angle) * h;
      const grad = ctx.createLinearGradient(0, 0, x, y);

      if (isDark) {
        grad.addColorStop(0, "rgba(6, 11, 25, 0.9)");
        grad.addColorStop(0.5, "rgba(20, 15, 45, 0.85)");
        grad.addColorStop(1, "rgba(10, 24, 46, 0.9)");
      } else {
        grad.addColorStop(0, "rgba(245, 247, 255, 0.95)");
        grad.addColorStop(0.5, "rgba(232, 238, 252, 0.95)");
        grad.addColorStop(1, "rgba(240, 246, 255, 0.95)");
      }

      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);
    }

    function step(now: number) {
      t = now;
      drawGradientBackground(now);

      const w = window.innerWidth;
      const h = window.innerHeight;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x > w + 10) p.x = -10;
        if (p.x < -10) p.x = w + 10;
        if (p.y > h + 10) p.y = -10;
        if (p.y < -10) p.y = h + 10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        const sat = isDark ? 65 : 55;
        ctx.fillStyle = `hsla(${p.hue}, ${sat}%, ${isDark ? 70 : 40}%, ${p.alpha})`;
        ctx.fill();
      }

      raf = requestAnimationFrame(step);
    }

    resize();
    window.addEventListener("resize", onResize, { passive: true });
    raf = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      themeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default ParticleBackground;
