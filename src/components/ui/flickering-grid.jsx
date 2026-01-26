"use client";

import React, { useRef, useEffect, useCallback, memo } from "react";

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

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
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
      const deltaTime = currentTime - lastTime;

      if (deltaTime >= interval) {
        lastTime = currentTime - (deltaTime % interval);
        draw();
      }
    };
    render(0);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, [draw]);

  return (
    <canvas
      ref={canvasRef}
      className={`block w-full h-full ${className}`}
      style={style}
      {...rest}
    />
  );
});

