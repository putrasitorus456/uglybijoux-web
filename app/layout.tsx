import "./globals.css";
import BodyWrapper from "@/components/BodyWrapper";

export const metadata = {
  title: "UglyBijoux",
  description: "Experimental accessories from Indonesia.",
  icons: {
    icon: "/icon/logo-black.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-anodina bg-white text-gray-900">
        <BodyWrapper>{children}</BodyWrapper>
      </body>
    </html>
  );
}