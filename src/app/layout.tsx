import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TougeCon in Downtown Springdale | Partnership Proposal",
  description:
    "A one-page proposal for Downtown Springdale Alliance and the City of Springdale to host a TougeCon activation at Luther George Park and the Tyson Foods lot.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}
