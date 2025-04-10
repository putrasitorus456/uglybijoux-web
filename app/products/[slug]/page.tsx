import { notFound } from "next/navigation";
import products from "@/lib/product-all";

interface ProductDetailPageProps {
  params: { slug: string };
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) return notFound();

  return (
    <main className="mt-16 p-8 max-w-3xl mx-auto font-anodina text-stone-900">
      <h1 className="text-3xl sm:text-4xl font-semibold mb-6">{product.title}</h1>
      <img
        src={product.image1}
        alt={product.title}
        className="w-full h-auto object-cover mb-6"
      />
      <p className="text-base sm:text-lg leading-relaxed mb-4">{product.description}</p>
      <p className="text-lg sm:text-xl font-semibold">{product.price}</p>
    </main>
  );
}