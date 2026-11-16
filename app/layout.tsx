import type { Metadata, Viewport } from "next";
import iconImage from "@/public/images/icon.svg";
import "./globals.css";

export const metadata: Metadata = {
  title: "VÂN LAM - Hương sắc theo làn mây",
  description:
    "Handcrafted objects, textiles and quiet rituals shaped by generations of Vietnamese makers — made for the way we live now.",
  keywords: [
    "Văn Lam",
    "Vietnamese craft",
    "heritage atelier",
    "handmade Vietnam",
    "Vietnamese design",
  ],
  openGraph: {
    title: "VÂN LAM - Hương sắc theo làn mây",
    description:
      "Handcrafted objects, textiles and quiet rituals shaped by generations of Vietnamese makers.",
    type: "website",
    locale: "vi_VN",
    siteName: "Văn Lam",
  },
  icons: {
    icon: [{ url: iconImage.src, type: "image/svg+xml" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#f4efe3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
