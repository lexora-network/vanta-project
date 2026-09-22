import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VANTA — Institutional Digital Asset Infrastructure",
  description: "VANTA is an independent digital asset built on Stellar.",
  metadataBase: new URL("https://vanta-project.vercel.app"),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}