import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-10 bg-white text-black px-6 sm:px-10 md:px-20 pt-16 pb-10 font-anodina border-t border-neutral-300">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-6">

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-4 text-[10px] sm:text-xs tracking-widest uppercase font-medium">
          <Link href="/" className="hover:opacity-60 transition">Home</Link>
          <Link href="/products" className="hover:opacity-60 transition">Shop</Link>
          <Link href="/gallery" className="hover:opacity-60 transition">Gallery</Link>
          <Link href="/about" className="hover:opacity-60 transition">About</Link>
        </nav>

        {/* Logo / Name */}
        <h1 className="font-anodina font-semibold text-3xl sm:text-4xl md:text-5xl tracking-tight">
          UGLYBIJOUX
        </h1>

        {/* Copyright */}
        <div className="text-[10px] sm:text-xs tracking-widest uppercase opacity-50">
          © {new Date().getFullYear()} Uglybijoux.
        </div>
      </div>
    </footer>
  );
}