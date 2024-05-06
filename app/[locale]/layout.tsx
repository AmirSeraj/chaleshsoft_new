import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import clsx from "clsx";
import { Roboto, Noto_Sans_Arabic } from "next/font/google";
import i18nConfig from "@/i18nConfig";
import { dir } from "i18next";
import TranslationProvider from "@/components/providers/TranslationsProvider";
import initTranslations from "../i18n";
import { NextUIProvider } from "@nextui-org/system";

export const metadata: Metadata = {
  title: "Chalesh Soft",
  description: "Chalesh Soft",
  icons: {
    icon:{
      url: '/favicon.ico'
    }
    // icon: "/favicon.ico",
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

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

const i18nNamespaces = ["home"];

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <html lang={locale} dir={dir(locale)}>
      <body
        className={clsx(
          arabic.variable,
          roboto.variable,
          "min-h-screen flex flex-col w-full"
        )}
      >
        <TranslationProvider
          locale={locale}
          resources={resources}
          namespaces={i18nNamespaces}
        >
          <NextUIProvider>
            {children}
            <Footer />
          </NextUIProvider>
        </TranslationProvider>
      </body>
    </html>
  );
}
