import products from "@/lib/product-all";
import { notFound } from "next/navigation";
import ClientProductDetail from "./ClientProductDetail";

interface Props {
  params: { slug: string };
}

export default async function ProductDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = await params; // ✅ This is now required

  const product = products.find((p) => p.slug === slug);

  if (!product) return notFound();

  return <ClientProductDetail product={product} />;
}