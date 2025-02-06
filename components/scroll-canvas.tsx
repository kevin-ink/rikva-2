"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";
import { useScroll, useMotionValueEvent } from "motion/react";

export default function ScrollCanvas({ frames }: { frames: number }) {
  const canvas = useRef<HTMLCanvasElement>(null);
  const [first, setFirst] = useState(true);
  const { scrollYProgress } = useScroll();
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const ctx = canvas.current ? canvas.current.getContext("2d") : null;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (first) {
      setFirst(false);
    }
    let frame = Math.round(frames * latest);
    frame = Math.min(frames, frame);

    if (ctx && images[frame] && canvas.current) {
      const image = images[frame];
      canvas.current.width = image.width;
      canvas.current.height = image.height;
      ctx.clearRect(0, 0, canvas.current.width, canvas.current.height);

      if (frame >= 200) {
        const maxShrinkFrames = 100;
        const shrinkFactor = Math.min((frame - 200) / maxShrinkFrames, 1);
        const shrinkAmount =
          shrinkFactor * Math.min(image.width, image.height) * 0.3;

        const drawWidth = image.width - shrinkAmount * 2;
        const drawHeight = image.height - shrinkAmount * 2;
        const offsetX = shrinkAmount;
        const offsetY = shrinkAmount * 2;

        ctx.drawImage(
          image,
          offsetX,
          offsetY,
          drawWidth,
          drawHeight,
          offsetX,
          offsetY,
          drawWidth,
          drawHeight
        );
      } else {
        ctx.drawImage(image, 0, 0);
      }
    }
  });

  const loadImages = useCallback(() => {
    const loadedImages: HTMLImageElement[] = [];
    for (let i = 1; i <= frames; i++) {
      const img = document.createElement("img");
      img.src = `/airplane_mp4_frames/out${i}.jpg`;
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, [frames]);

  useEffect(() => {
    loadImages();
  }, [loadImages]);

  return (
    <div className="w-full" style={{ height: `${frames * 3}vh` }}>
      {images[0] && first && <Image src={images[0].src} alt="default" fill />}
      <canvas
        ref={canvas}
        className="w-full sticky top-0 -z-10 transition-all"
      ></canvas>
      <div className="w-full absolute top-0 h-screen flex justify-center items-center text-3xl text-black z-20 left-0">
        In 2018, there were upwards of 1.1 billion scheduled passengers in the
        U.S. alone.
      </div>
    </div>
  );
}
