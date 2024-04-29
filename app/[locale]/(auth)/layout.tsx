import type { Metadata } from "next";
import clsx from "clsx";
import styles from "./styles.module.css";
import Header from "@/components/Header/Header";
import Image from "next/image";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/providers/TranslationsProvider";

export const metadata: Metadata = {
  title: "Chalesh Soft | auth page",
  description: "Chalesh Soft",
};

const i18nNamespaces = ["auth"];

export default async function AuthLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <div className={styles.auth}>
      <Header locale={locale} />
      <div
        className={clsx(
          styles.container,
          "xl:px-[8.5%] lg:px-[7.5%] px-[5.5%] py-2 w-full"
        )}
      >
        <TranslationsProvider
          namespaces={i18nNamespaces}
          locale={locale}
          resources={resources}
        >
          {children}
        </TranslationsProvider>
        <div className="lg:flex hidden justify-center items-center">
          <Image
            alt="header"
            width={720}
            height={640}
            src={"/images/auth/sapiens.svg"}
          />
        </div>
      </div>
    </div>
  );
}
