import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import clsx from "clsx";
import { Roboto, Noto_Sans_Arabic } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chalesh Soft",
  description: "Chalesh Soft",
  icons: {
    icon: "/favicon.ico",
  },
};

const arabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-sans-arabic",
  weight: ["400", "700"],
  style: ["normal"],
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          arabic.variable,
          roboto.variable,
          "min-h-screen flex flex-col w-full"
        )}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
