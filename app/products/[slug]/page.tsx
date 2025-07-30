import { notFound } from "next/navigation";
import ProductDetailWrapper from "./ProductDetailWrapper";

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/products/shop`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.INTERNAL_API_KEY!}`,
      },
      cache: 'no-store',
    });

    if (!res.ok) {
      console.error("Failed to fetch products", res.statusText);
      return notFound();
    }

    const products = await res.json();
    const product = products.find((p: any) => p.slug === slug);

    if (!product) return notFound();

    return <ProductDetailWrapper product={product} />;
  } catch (err) {
    console.error("Error during product fetch:", err);
    return notFound();
  }
}