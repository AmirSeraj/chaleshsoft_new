'use client'
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaDiscord } from "react-icons/fa6";
import { motion } from "framer-motion";

const TopDivRight = () => {
  return (
    <div className="flex gap-4 sm:w-[150px] w-full justify-end">
      <motion.a
        whileHover={{ y: -4 }}
        whileTap={{ scale: 0.9 }}
        href="https://twitter.com"
        target={"_blank"}
      >
        <BsTwitterX color="#ccc" size={20} />
      </motion.a>

      <motion.a
        whileHover={{ y: -4 }}
        whileTap={{ scale: 0.9 }}
        href="https://github.com"
        target={"_blank"}
      >
        <FaGithub color="#ccc" size={20} />
      </motion.a>

      <motion.a
        whileHover={{ y: -4 }}
        whileTap={{ scale: 0.9 }}
        href="https://yahoo.com"
        target={"_blank"}
      >
        <MdOutlineAlternateEmail color="#ccc" size={20} />
      </motion.a>

      <motion.a
        whileHover={{ y: -4 }}
        whileTap={{ scale: 0.9 }}
        href="https://discord.com"
        target={"_blank"}
      >
        <FaDiscord color="#ccc" size={20} />
      </motion.a>

    </div>
  );
};

export default TopDivRight;
