"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";
import { useScroll, useMotionValueEvent } from "motion/react";

const firstImage = (
  <Image
    src="/airplane_mp4_frames/out1.jpg"
    alt="airplane first image"
    width={1920}
    height={1080}
    priority
    style={{ objectFit: "cover", width: "100vw", height: "100vh" }}
    placeholder="empty"
  />
);

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

      canvas.current.width = window.innerWidth;
      canvas.current.height = window.innerHeight;

      ctx.clearRect(0, 0, canvas.current.width, canvas.current.height);

      let drawWidth, drawHeight;
      if (window.innerHeight > window.innerWidth) {
        drawHeight = canvas.current.height;
        drawWidth = (image.width / image.height) * drawHeight;
      } else {
        drawWidth = canvas.current.width;
        drawHeight = (image.height / image.width) * drawWidth;
      }

      let offsetX = (canvas.current.width - drawWidth) / 2;
      let offsetY = (canvas.current.height - drawHeight) / 2;

      let shrinkAmount = 0;

      if (frame >= 200) {
        const maxShrinkFrames = 52;
        const shrinkFactor = Math.min((frame - 200) / maxShrinkFrames, 1);
        shrinkAmount = shrinkFactor * Math.min(image.width, image.height) * 0.3;

        const aspectRatio = drawWidth / drawHeight;
        drawWidth -= shrinkAmount;
        drawHeight = drawWidth / aspectRatio;
      }

      offsetX = (canvas.current.width - drawWidth) / 2;
      offsetY = (canvas.current.height - drawHeight) / 2 + shrinkAmount / 2.8;

      ctx.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);
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
    <div className="w-full" style={{ height: `${frames * 2}vh` }}>
      {first && firstImage}
      <canvas
        ref={canvas}
        className="w-full sticky top-0 -z-10 h-screen transition-all"
      ></canvas>
      <div className="w-full absolute p-8 top-0 h-screen flex flex-col justify-center items-center text-center text-white font-maven-pro left-0">
        <p className="font-bold text-5xl">
          In 2018, there were upwards of 1.1 billion scheduled passengers in the
          U.S. alone.
        </p>
        <p className="text-lg">Bureau of Transportation Statistics</p>
      </div>
      <div className="w-full absolute top-screen h-screen flex flex-col justify-center items-center text-center text-white font-maven-pro left-0">
        <p className="p-10 font-bold text-5xl">
          Yet, air transportation has substantial consequences that are shaping
          the world today and will continue to do so in the future
        </p>
      </div>
      <div className="w-full absolute top-[200vh] h-screen flex flex-col justify-center items-center text-center text-white font-maven-pro left-0">
        <p className="p-10 font-bold text-5xl">
          Follow along as we narrate our findings on the unseen conflicts of air
          travel through a digital humanities lense.
        </p>
      </div>
    </div>
  );
}
