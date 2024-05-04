"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEye } from "react-icons/fa";
import Link from "next/link";
import styles from "../styles.module.css";
import clsx from "clsx";

interface SubjectsProps {
  title: string;
  text: string;
  href: string;
}

const Subjects = ({ title, text, href }: SubjectsProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleFlipOver = () => {
    setIsFlipped(true);
    setIsAnimating(true);
  };

  const handleFlipOut = () => {
    setIsFlipped(false);
    setIsAnimating(false);
  };

  return (
    <div
      className="flex flex-col overflow-hidden h-[265px] w-[260px] rounded-xl perspective-1000 cursor-pointer"
      onMouseOver={handleFlipOver}
      onMouseOut={handleFlipOut}
    >
      <motion.div
        className={styles.flip_card_inner}
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 360 }}
        transition={{ duration: 0.8, animationDirection: "normal" }}
        onAnimationComplete={() => setIsAnimating(false)}
      >
        <div
          // onMouseOver={handleFlipOver}
          className={clsx(
            styles.flip_card_front,
            " w-[100%] h-[100%] rounded-lg bg-[rgba(255,255,255,0.1)] items-center border-t border-l border-[rgba(255,255,255,0.5)] p-4"
          )}
        >
          <p className="text-[rgba(255,255,255,0.2)] text-center font-bold text-[1rem] mb-2">
            {title}
          </p>
          <span className="text-white text-[0.85rem] mt-4">{text}</span>
        </div>

        <Link
          href={href}
          className={clsx(
            styles.flip_card_back,
            " w-[100%] h-[100%] rounded-lg flex flex-col gap-4 bg-[rgba(255,255,255,0.1)] justify-center items-center bg-gradient-to-b from-indigo-300"
          )}
        >
          <p className="text-dark text-left font-bold text-lg">See details</p>
          <FaEye size={30} />
        </Link>
      </motion.div>
    </div>
  );
};

export default Subjects;
