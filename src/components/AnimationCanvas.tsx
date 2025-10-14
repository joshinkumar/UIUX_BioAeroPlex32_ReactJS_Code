import React, { useEffect, useState, useRef } from 'react';
interface AnimationCanvasProps {
  initiate: boolean;
  onAnimationFinished: () => void;
}
export const AnimationCanvas: React.FC<AnimationCanvasProps> = ({
  initiate,
  onAnimationFinished
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [transferPosition, setTransferPosition] = useState(0);
  // Constants for animation
  const canvasWidth = 800;
  const canvasHeight = 170;
  const startX = 200;
  const lineY = 80;
  const endX = 600;
  const animationSpeed = 10;
  const particleDistance = 40;
  // URLs for actual images
  const wetCycloneUrl = "/wet_cyclone.png";
  const biosensorUrl = "/biosensor.png";
  useEffect(() => {
    if (initiate) {
      setTransferPosition(0);
      const interval = setInterval(() => {
        setTransferPosition(prev => {
          const newPos = prev + animationSpeed;
          if (newPos > endX - startX) {
            clearInterval(interval);
            onAnimationFinished();
            return prev;
          }
          return newPos;
        });
      }, 50);
      return () => clearInterval(interval);
    }
  }, [initiate, onAnimationFinished]);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      const wetPix = new Image();
      wetPix.src = wetCycloneUrl;
      const bioPix = new Image();
      bioPix.src = biosensorUrl;
      const draw = () => {
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        // Draw images
        if (wetPix.complete) ctx.drawImage(wetPix, 50, 10, 150, 150);
        if (bioPix.complete) ctx.drawImage(bioPix, 600, 10, 150, 150);
        // Draw connecting line
        ctx.beginPath();
        ctx.moveTo(startX, lineY);
        ctx.lineTo(endX, lineY);
        ctx.lineWidth = 12;
        ctx.strokeStyle = '#4a90e2';
        ctx.stroke();
        // Draw moving particles
        if (transferPosition > 0) {
          for (let pos = 0; pos <= transferPosition; pos += particleDistance) {
            ctx.beginPath();
            ctx.fillStyle = '#ffd700';
            ctx.arc(startX + pos, lineY, 8, 0, 2 * Math.PI);
            ctx.fill();
          }
        }
      };
      wetPix.onload = draw;
      bioPix.onload = draw;
      draw();
    }
  }, [transferPosition]);
  return <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight} className="bg-white rounded-lg shadow-md" />;
};