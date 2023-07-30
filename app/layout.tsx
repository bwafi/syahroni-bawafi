import { calibre, sfMono } from "@/utils/fonts";
import "../style/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Syahroni Bawafi | Portfolio",
  description: "Portfolio Create By NextJs",
  icons: {
    icon: [
      { url: "/image/favicon/favicon.ico" },
      { sizes: "16x16", url: "/image/favicon/favicon-16x16.png" },
      { sizes: "32x32", url: "/image/favicon/favicon-32x32.png" },
      { sizes: "32x32", url: "/image/favicon/favicon-32x32.png" },
      { sizes: "96x96", url: "/image/favicon/favicon-96x96.png" },
      { sizes: "192x192", url: "/image/favicon/android-icon-192x192.png" },
    ],
    apple: [
      { url: "/image/favicon/apple-icon.png" },
      { sizes: "57x57", url: "/image/favicon/apple-icon-57x57.png" },
      { sizes: "60x60", url: "/image/favicon/apple-icon-60x60.png" },
      { sizes: "72x72", url: "/image/favicon/apple-icon-72x72.png" },
      { sizes: "76x76", url: "/image/favicon/apple-icon-76x76.png" },
      { sizes: "114x114", url: "/image/favicon/apple-icon-114x114.png" },
      { sizes: "120x120", url: "/image/favicon/apple-icon-120x120.png" },
      { sizes: "144x144", url: "/image/favicon/apple-icon-144x144.png" },
      { sizes: "152x152", url: "/image/favicon/apple-icon-152x152.png" },
      { sizes: "180x180", url: "/image/favicon/apple-icon-180x180.png" },
    ],
  },
  manifest: "/image/favicon/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${calibre.variable} ${sfMono.variable} bg-navy text-lightes-slate font-calibre`}>
        {children}
      </body>
    </html>
  );
}
