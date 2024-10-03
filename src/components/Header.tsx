'use client'

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

const Header = (props: Props) => {
  return (
    <header 
    className="flex justify-between items-center px-[2rem] py-[1rem]  text-[#fff] ">
      <motion.div
        className="flex items-center"
        transition={{ type: "spring", damping: 18, mass: 0.75 }}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <h1 className="mr-[2rem] text-[#000] text-3xl ">Book App</h1>
        <motion.input
          type="text"
          placeholder="Tell me what you like to ready and we will get that..."
          className="py-[0.5rem] px-[1rem]  ml-[3.6rem] rounded-[50px] bg-[#f8eadd] border-[2px] text-[#000] border-[#000] min-w-[320px] max-w-fit text-xs"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
        ></motion.input>
      </motion.div>
      <motion.div
        className="flex items-center"
        transition={{ type: "spring", damping: 18, mass: 0.75 }}
        initial={{ opacity: 0, x: 1000 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <Link 
        href="/profile" 
        className="mr-[1rem]">
          <motion.img
            src=""
            alt="avatar"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-[40px] h-[40px] rounded-[50%]"
          />
        </Link>
      </motion.div>
    </header>
  );
};

export default Header;
