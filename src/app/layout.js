import { Cabin } from "next/font/google";
import "./globals.css";

const cabbin = Cabin({ subsets: ["latin"] });

export const metadata = {
  title: "SKINCLUB",
  description: "COSMEIC DOCTORS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cabbin.className}>{children}</body>
    </html>
  );
}
