import "./services.scss";
import { motion, stagger, useInView } from "framer-motion";
import { useRef } from "react";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

export const Services = () => {
  // eslint-disable-next-line no-undef
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px " });

  return (
    <>
      <motion.div
        className="services"
        variants={variants}
        initial="initial"
        // animate="animate"
        // whileInView="animate"
        ref={ref}
        animate={isInView && "animate"}
      >
        <motion.div className="textContainer" variants={variants}>
          <p>
            Lorem ipsum dolor sit amet
            <br /> consectetur adipisicing elit.
          </p>
          <hr />
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
          <div className="title">
            <img src="/people.webp" alt="" />
            <h2>
              <b>Unique</b> Ideas
            </h2>
          </div>
          <div className="title">
            <h2>
              <b>For your</b> Business
            </h2>
            <button className="text-uppercase">What we do?</button>
          </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants}>
          <motion.div
            className="box"
            whileHover={{ background: "lightgray", color: "black" }}
          >
            <h3>Branding</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Excepturi fugiat assumenda repellat! Fugit iusto rerum,
              praesentium aliquid perferendis
            </p>
            <button>Go</button>
          </motion.div>
          <motion.div
            className="box"
            whileHover={{ background: "lightgray", color: "black" }}
          >
            <h3>Branding</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Excepturi fugiat assumenda repellat! Fugit iusto rerum,
              praesentium aliquid perferendis
            </p>
            <button>Go</button>
          </motion.div>
          <motion.div
            className="box"
            whileHover={{ background: "lightgray", color: "black" }}
          >
            <h3>Branding</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Excepturi fugiat assumenda repellat! Fugit iusto rerum,
              praesentium aliquid perferendis
            </p>
            <button>Go</button>
          </motion.div>
          <motion.div
            className="box"
            whileHover={{ background: "lightgray", color: "black" }}
          >
            <h3>Branding</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Excepturi fugiat assumenda repellat! Fugit iusto rerum,
              praesentium aliquid perferendis
            </p>
            <button>Go</button>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};
