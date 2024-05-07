import Header from "@/components/Header/Header";
import styles from "./styles.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chalesh Soft | Articles",
  description: "Chalesh Soft",
};

export default function BlogLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  
  return (
    <div className={styles.container}>
      <Header locale={locale} />
      {children}
    </div>
  );
}
