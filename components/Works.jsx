"use client";

import { delay, motion } from "framer-motion";
import Image from "next/image";

const workData = [
  {
    id: 1,
    title: "Project 1",
    link: "#",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, aliquam quas quo soluta aspernatur eaque quisquam sequi error cumque nam!",
    img: "/work1.png",
    delay: 0.4,
  },

  {
    id: 2,
    title: "Project 2",
    link: "#",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, aliquam quas quo soluta aspernatur eaque quisquam sequi error cumque nam!",
    img: "/work2.png",
    delay: 0.8,
  },
  {
    id: 3,
    title: "Project 3",
    link: "#",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, aliquam quas quo soluta aspernatur eaque quisquam sequi error cumque nam!",
    img: "/work3.png",
    delay: 1.2,
  },
];

const Works = () => {
  return (
    <section className="">
      <div className=" ">
        <div className="">
          <p className="">Projects</p>
        </div>
      </div>
    </section>
  );
};

export default Works;
