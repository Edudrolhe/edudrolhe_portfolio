import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem" },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-white" : "text-[#ADB7BE]";
  return (
    <button onClick={selectTab}>
      <p
        className={`mr-3 font font-semibold hover:text-white ${buttonClasses}`}
        onClick={selectTab}
      >
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-yellow-500 mt-2 mr-3"
      ></motion.div>
    </button>
  );
};

export default TabButton;
