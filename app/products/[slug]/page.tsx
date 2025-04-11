import products from "@/lib/product-all";
import { notFound } from "next/navigation";
import ClientProductDetail from "./ClientProductDetail";

export default async function ProductDetailPage({ params }: { params: unknown }) {
  const slug = (await params as { slug: string }).slug;

  const product = products.find((p) => p.slug === slug);

  if (!product) return notFound();

  return <ClientProductDetail product={product} />;
}