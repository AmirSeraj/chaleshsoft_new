import Header from "@/components/Header/Header";
import type { Metadata } from "next";
import styles from "./styles.module.css";
import clsx from "clsx";
import { getSession } from "@/lib/actions/getSession";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Chalesh Soft | Dashboard page",
  description: "Chalesh Soft",
};

const Dashboard = async ({ params: { locale } }: { params: { locale: string } }) => {
  const session = await getSession();
  
  if (!session?.isLoggedIn) {
    redirect('/');
  }
  
  return (
    <div className={styles.dashboard}>
      <Header locale={locale} />
      <div
        className={clsx(
          styles.container,
          "w-full xl:px-[8.5%] lg:px-[7.5%] px-[5.5%] py-2 flex gap-2"
        )}
      >
      </div>
    </div>
  );
};

export default Dashboard;
