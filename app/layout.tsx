import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "UglyBijoux",
  description: "Experimental accessories from Indonesia.",
  icons: {
    icon: "/icon/logo-black.png", // path dari folder public
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-anodina bg-white text-gray-900">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}