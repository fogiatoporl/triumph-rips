import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Crown Cards - Digital Card Packs",
  description:
    "Open digital packs, collect authentic  cards, and build your collection.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Crown Cards",
    description:
      "Open digital packs, collect authentic  cards, and build your collection.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crown Cards",
    description:
      "Open digital packs, collect authentic  cards, and build your collection.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#030712] text-white min-h-screen">
        {/* Animated background */}
        <div className="gradient-bg">
          <div className="orb orb-1" />
          <div className="orb orb-2" />
          <div className="orb orb-3" />
        </div>
        <div className="grid-pattern" />

        {children}
      </body>
    </html>
  );
}
