import { calibre, sfMono } from "@/utils/fonts";
import "../style/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Syahroni Bawafi",
  description: "Portfolio Create By NextJs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${calibre.variable} ${sfMono.variable} bg-navy text-lightes-slate font-calibre`}>
        {children}
      </body>
    </html>
  );
}
