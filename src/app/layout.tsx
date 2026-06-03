import type { Metadata } from "next";
import { DM_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "Alison Urrea — Fullstack Developer",
  description: "Ingeniera en Informática & Fullstack Developer. Santiago, Chile.",
  icons: {
    icon: "/favicon.svg",
},
  openGraph: {
    title: "Alison Urrea — Fullstack Developer",
    description: "Ingeniera en Informática & Fullstack Developer. Santiago, Chile.",
    url: "https://alisonurrea.vercel.app",
    siteName: "Alison Urrea",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alison Urrea — Fullstack Developer",
    description: "Ingeniera en Informática & Fullstack Developer. Santiago, Chile.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/icon" type="image/png" sizes="32x32" />
      </head>
      <body className={`${dmSans.variable} ${cormorant.variable}`}>
        {children}
      </body>
    </html>
  );
}