"use client";

import React, { useRef, useEffect, useCallback, memo } from "react";
import { useWhoAreWeFallbacks } from "@/lib/utils";

export const FlickeringGrid = memo(({
  color = "#10b981",
  maxOpacity = 0.1,
  flickerChance = 0.1,
  squareSize = 2,
  gridGap = 1,
  className = "",
  style,
  ...rest
}) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const visibleRef = useRef(true);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    // Safari/WebKit: guard against null context
    if (!ctx) return;

    const { width, height } = canvas;
    ctx.clearRect(0, 0, width, height);

    const step = squareSize + gridGap;
    const cols = Math.ceil(width / step);
    const rows = Math.ceil(height / step);

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        if (Math.random() < flickerChance) {
          const opacity = Math.random() * maxOpacity;
          ctx.fillStyle = `${color}${Math.floor(opacity * 255)
            .toString(16)
            .padStart(2, "0")}`;
          ctx.fillRect(i * step, j * step, squareSize, squareSize);
        } else {
          ctx.fillStyle = `${color}${Math.floor(maxOpacity * 0.05 * 255)
            .toString(16)
            .padStart(2, "0")}`;
          ctx.fillRect(i * step, j * step, squareSize, squareSize);
        }
      }
    }
  }, [color, maxOpacity, flickerChance, squareSize, gridGap]);

  useEffect(() => {
    // Safari/mobile: canvas animation disabled; no RAF loop
    if (useWhoAreWeFallbacks()) return;

    const handleResize = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width =
          canvas.parentElement?.clientWidth || window.innerWidth;
        canvas.height =
          canvas.parentElement?.clientHeight || window.innerHeight;
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    let animationFrameId;
    let lastTime = 0;
    const fps = 30;
    const interval = 1000 / fps;

    const render = (currentTime) => {
      animationFrameId = window.requestAnimationFrame(render);
      // Pause redraw when off-screen to avoid continuous redraws
      if (!visibleRef.current) return;
      const deltaTime = currentTime - lastTime;
      if (deltaTime >= interval) {
        lastTime = currentTime - (deltaTime % interval);
        draw();
      }
    };
    render(0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibleRef.current = entry.isIntersecting;
        });
      },
      { threshold: 0, rootMargin: "0px" }
    );
    const el = containerRef.current;
    if (el) observer.observe(el);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
      if (el) observer.unobserve(el);
    };
  }, [draw]);

  // Safari/mobile: no canvas; transparent fallback
  if (useWhoAreWeFallbacks()) {
    return (
      <div
        className={`block w-full h-full ${className}`}
        style={style}
        aria-hidden="true"
        {...rest}
      />
    );
  }

  return (
    <div ref={containerRef} className="block w-full h-full">
      <canvas
        ref={canvasRef}
        className={`block w-full h-full ${className}`}
        style={style}
        {...rest}
      />
    </div>
  );
});

