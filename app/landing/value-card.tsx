"use client";

import * as React from "react";

interface ValueCardProps {
  overlayImage: string;
  iconImage: string;
  title: string;
  description: string;
}

export default function ValueCard({
  overlayImage,
  iconImage,
  title,
  description,
}: ValueCardProps) {
  return (
    <div className="flex flex-col items-center text-center group transition-transform hover:-translate-y-1">
      {/* Image */}
      <div className="w-full aspect-[0.75] overflow-hidden">
        <img
          src={overlayImage}
          alt={title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition"
        />
      </div>

      {/* Icon */}
      <div className="my-6">
        <img src={iconImage} alt="Icon" className="w-12 h-12 object-contain mx-auto" />
      </div>

      {/* Title */}
      <h3 className="uppercase tracking-widest text-sm sm:text-base font-semibold text-black mb-1">
        {title}
      </h3>

      {/* Description */}
      <p className="text-xs sm:text-sm text-neutral-500 max-w-xs">
        {description}
      </p>
    </div>
  );
}