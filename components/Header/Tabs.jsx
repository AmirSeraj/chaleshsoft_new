import Link from "next/link";

const Tabs = () => {
  return (
    <div className="gap-7 items-center text-white text-[15px] md:flex hidden">
      <Link href="/">Solution</Link>
      <Link href="/products">Products</Link>
      <Link href="/blogs">Blog</Link>
      <Link href="/docs">Docs</Link>
      <Link href="/about">About us</Link>
    </div>
  );
};

export default Tabs;
