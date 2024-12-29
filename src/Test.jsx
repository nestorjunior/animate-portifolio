import { motion } from "framer-motion";
import { useState } from "react";

export function Test() {
  const [open, setOpen] = useState(false);

  const variants = {
    visible: {
      opacity: 1,
      x: 800,
      transition: { type: "spring", stiffness: 200 },
    },
    hidden: { opacity: 0 },
  };

  return (
    <>
      <div className="studing">
        <motion.div
          className="box"
          variants={variants}
          transition={{ duration: 2 }}
          // whileInView={{ opacity: 1, scale: 2 }}
          animate={open ? "visible" : "hidden"}
          // initial={{ opacity: 0.5, scale: 0.5 }}
          // animate={{ opacity: 1, scale: 1, x: 200, y: 500 }}
          // whileHover={{ opacity: 1, scale: 2 }}
        ></motion.div>
        <button className="button" onClick={() => setOpen((prev) => !prev)}>
          Click
        </button>
      </div>
    </>
  );
}
