import products from "@/lib/product-all";
import { notFound } from "next/navigation";
import ClientProductDetail from "./ClientProductDetail";

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductDetailPage(props: { params: any }) {
  // ✅ Jangan destructure langsung!
  const { slug } = await props.params;
    
  const product = products.find((p) => p.slug === slug);

  if (!product) return notFound();

  return <ClientProductDetail product={product} />;
}