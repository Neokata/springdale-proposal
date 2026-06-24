import type { Metadata } from "next";
import { Archivo, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-archivo",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Springdale x TougeCon | Event Proposal",
  description:
    "An event proposal for Downtown Springdale Alliance and the City of Springdale to host a TougeCon weekend of cars, music, and culture — a city-owned lot for Friday and Saturday staging, with a Friday-night activation in Luther George Park.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${archivo.variable} ${hanken.variable}`}>
      <body className="bg-[#0a0a0a] text-slate-100 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}