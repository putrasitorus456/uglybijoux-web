import products from "@/lib/product-all";
import { notFound } from "next/navigation";
import ClientProductDetail from "./ClientProductDetail";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function ProductDetailPage({ params }: { params: any }) {
  const slug = (await params).slug;

  const product = products.find((p) => p.slug === slug);

  if (!product) return notFound();

  return <ClientProductDetail product={product} />;
}