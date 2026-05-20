"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cld } from "../lib/cloudinary";

type RotatingHeroProps = {
  images: string[];
  intervalMs?: number;
  className?: string;
  overlayClassName?: string;
  imageWidth?: number;
  children?: React.ReactNode;
};

export default function RotatingHero({
  images,
  intervalMs = 8000,
  className = "h-screen",
  overlayClassName = "bg-black/40",
  imageWidth = 1920,
  children,
}: RotatingHeroProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [images.length, intervalMs]);

  return (
    <section className={`relative w-full overflow-hidden ${className}`}>
      {images.map((src, i) => (
        <Image
          key={src}
          src={cld(src, { width: imageWidth })}
          alt=""
          fill
          priority={i === 0}
          sizes="100vw"
          className={`object-cover transition-opacity duration-1000 ease-in-out ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className={`absolute inset-0 z-0 ${overlayClassName}`} />
      <div className="relative z-10 h-full">{children}</div>
    </section>
  );
}
