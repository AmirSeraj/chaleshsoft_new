"use client";
import clsx from "clsx";
import { useEffect, useRef } from "react";

const InfiniteHorizontalScroll = ({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: string;
}) => {
  const logosRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const logosContainer = logosRef.current;
    if (!logosContainer) return;
    const clone = logosContainer.cloneNode(true) as HTMLUListElement;
    if (!logosContainer.parentNode) return;
    logosContainer.parentNode.appendChild(clone);
    clone.setAttribute("aria-hidden", "true");
  }, []);

  return (
    <div className="w-full inline-flex flex-nowrap px-[8.5%] overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
      <ul
        ref={logosRef}
        className={clsx(
          locale === "fa"
            ? "animate-infinite-scroll-fa"
            : "animate-infinite-scroll-en",
          "flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none"
        )}
      >
        {children}
      </ul>
    </div>
  );
};

export default InfiniteHorizontalScroll;
