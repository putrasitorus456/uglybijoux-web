"use client";
import * as React from "react";
import Link from "next/link";

interface ProductCardProps {
  image1: string;
  image2: string;
  category: string;
  title: string;
  price: string;
}

const slugify = (text: string) =>
  text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");

const ProductCard: React.FC<ProductCardProps> = ({
  image1,
  image2,
  category,
  title,
  price,
}) => {
  const slug = slugify(title);

  return (
    <Link href={`/products/${slug}`}>
      <article className="mt-10 font-anodina w-full cursor-pointer group">
        {/* Product Image */}
        <figure className="aspect-[0.85] relative overflow-hidden">
          <img
            src={image1}
            alt={title}
            className="w-full h-full object-cover absolute inset-0 transition-opacity duration-500 opacity-100 group-hover:opacity-0"
          />
          <img
            src={image2}
            alt={title}
            className="w-full h-full object-cover absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
          />
        </figure>

        {/* Hover Text */}
        <div className="mt-1 sm:mt-2 px-1 sm:px-2 text-left opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-[9px] sm:text-[9px] text-neutral-500 uppercase tracking-wide">
            {category}
          </p>
          <div className="flex justify-between items-center gap-2">
            <h3 className="text-[13px] font-medium text-black uppercase tracking-tight truncate">
              {title}
            </h3>
            <span className="text-[13px] font-normal text-black whitespace-nowrap">
              {price}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ProductCard;