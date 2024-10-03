"use client";

import React from "react";
import { useParams } from "next/navigation";
import { books } from "@/constants/mockData";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeftLong,
  faGear,
  faMagnifyingGlass,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { Editor } from 'reactjs-editor';

const page = () => {
  const { id } = useParams();
  const selectedBook = books.filter((book, i) => {
    return id === String(book.id);
  });

  if (!selectedBook.length) return <div>Book not found</div>;

  return (
    <motion.div>
    <motion.div className="w-[100%] flex items-center justify-between px-[70px] py-[20px]">
      <FontAwesomeIcon className="h-[20px] w-[20px]" icon={faArrowLeftLong} />
      <h1 className="text-2xl font-semibold">{selectedBook[0].title}</h1>
      <motion.div className="flex items-center gap-4">
        <button className="text-xl border border-[#000] hover:bg-[#000] hover:text-white py-2 px-6 rounded-full" type="button">
          Save
        </button>
        <FontAwesomeIcon className="h-[20px] w-[30px]"  icon={faGear} />
        <FontAwesomeIcon className="h-[20px] w-[20px]"  icon={faShare} />
        <FontAwesomeIcon className="h-[20px] w-[20px]"  icon={faMagnifyingGlass} />
      </motion.div>
    </motion.div>
    <Editor
        /** htmlContent accepts only one element. Just wrap everything on one element **/
        htmlContent={`
          <main className="bookContainer">
      <aside>
      <h1 className="center">${selectedBook[0].title} </h1>
      <span className="center small"> By ${selectedBook[0].author} </span>
      ${selectedBook[0].content}
      </aside>
          </main>
          `
                }
      />
    </motion.div>
  );
};

export default page;
