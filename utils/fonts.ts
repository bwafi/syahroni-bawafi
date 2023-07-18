import localFont from "next/font/local";

export const calibre = localFont({
  src: [
    {
      path: "../public/fonts/Calibre/Calibre-Light.woff",
      weight: "300",
    },
    {
      path: "../public/fonts/Calibre/Calibre-Regular.woff",
      weight: "400",
    },
    {
      path: "../public/fonts/Calibre/Calibre-Medium.woff",
      weight: "500",
    },
    {
      path: "../public/fonts/Calibre/Calibre-Semibold.woff",
      weight: "600",
    },
  ],
  variable: "--font-calibre",
});

export const sfMono = localFont({
  src: [
    {
      path: "../public/fonts/SFMono/SFMono-Regular.woff",
      weight: "400",
    },
    {
      path: "../public/fonts/SFMono/SFMono-Medium.woff",
      weight: "500",
    },
  ],
  variable: "--font-sfMono",
});
