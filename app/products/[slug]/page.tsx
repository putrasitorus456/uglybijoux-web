import products from "@/lib/product-all";
import { notFound } from "next/navigation";

export default async function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const product = products.find((p) => p.slug === slug);

  if (!product) return notFound();

  return (
    <main className="mt-16 p-8 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
      <img
        src={product.image1}
        alt={product.title}
        className="w-full h-auto rounded"
      />
      <p className="mt-4">{product.description}</p>
      <p className="mt-2 font-semibold text-xl">{product.price}</p>
    </main>
  );
}