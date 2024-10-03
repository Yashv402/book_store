"use client";
import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faEnvelope,
  faInfoCircle,
  faCog,
  faStar,
  faEye,
} from "@fortawesome/free-solid-svg-icons";

type Props = {};

const Sidebar = (props: Props) => {
  const MenuList = [
    {
      title: "Home",
      icon: <FontAwesomeIcon icon={faHouse} />,
    },
    {
      title: "Contact",
      icon: <FontAwesomeIcon icon={faEnvelope} />, // Use imported icon
    },
    {
      title: "About Us",
      icon: <FontAwesomeIcon icon={faInfoCircle} />, // Use imported icon
    },
    {
      title: "Settings",
      icon: <FontAwesomeIcon icon={faCog} />, // Use imported icon
    },
    {
      title: "Rate Us",
      icon: <FontAwesomeIcon icon={faStar} />, // Use imported icon
    },
    {
      title: "Change Password",
      icon: <FontAwesomeIcon icon={faEye} />, // Use imported icon
    },
    {
      title: "Settings",
      icon: <FontAwesomeIcon icon={faCog} />, // Use imported icon
    },
  ];
  return (
    <section className=" px-[2rem]">
      {MenuList.map((listItem, i) => {
        return (
          <motion.div
            transition={{ type: "spring", damping: 22, mass: 0.99 }}
            initial={{ opacity: 0, x: -2000 * (i + 1) }}
            animate={{ opacity: 1, x: 0 }}
            key={i}
          >
            <ul className="list-none p-0 min-w-[200px] max-w-[350px]">
              {
                <motion.li
                  className="mb-[1rem] text-base p-3  cursor-pointer rounded-md"
                  whileHover={{ scale: 1.1 }}
                  style={{ boxShadow: "0 2px 10px 0 rgb(0 0 0 / 0.1)" }}
                >
                  <motion.span
                    className="text-[#000] text-sm flex items-center gap-2"
                    transition={{ type: "spring", damping: 30, mass: 0.99 }}
                    initial={{ opacity: 0, x: -10000 * (i + 1) }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    {listItem.icon}
                    {listItem.title}
                  </motion.span>
                </motion.li>
              }
            </ul>
          </motion.div>
        );
      })}
    </section>
  );
};

export default Sidebar;
