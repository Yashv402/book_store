'use client'

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import {books} from "../constants/mockData"
import { motion } from "framer-motion";
import BookCard from "@/components/BookCard";

export default function Home() {
  return (
    <main>
      <div>
        <Header />
        <div className="flex gap-10">
        <div
        className="flex justify-between items-start w-[30%]">
          <section className="w-[100%]">
            <Sidebar />
          </section>
        </div>
        <div className="bg-[#f8eadd] p-5 rounded-md w-fit flex flex-col gap-5 mr-[2rem]">
          <h1 className="text-2xl font-semibold">All Books</h1>
          <ul className="flex flex-wrap gap-4 w-fit justify-center">
            {
              books.map((book, index)=>{
                return(
                  <motion.li 
                  className="w-fit "
                  whileHover={{scale:1.1}}
                  whileTap={{scale:0.9}}
                  transition={{type:'spring', damping:50, mass:0.75}}
                  initial={{opacity:0 ,x:200*(index+1)}}
                  animate={{opacity:1,x:0}}
                  key={book.id}>
                    <BookCard 
                    title={book.title} 
                    description={book.description}
                    coverImage={book.image}
                    />
                  </motion.li>
                )
              })
            }
          </ul>
        </div>
        </div>
      </div>
    </main>
  );
}
