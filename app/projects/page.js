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

const Projects = () => {
    return (
        <section className="bg-black text-white">
            <div className="container py-20 xl:py-36space-y-36 ">
                <div className="relative">
                    <p className="text-3xl lg:text-4xl mb-20 tracking-widest font-bold text-center uppercase relative z-20">
                        Projects
                    </p>
                    <p className="text-5xl lg:text-8xl text-white/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 uppercase font-extrabold">
                        Projects
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                    {workData.map((work) => (

                        <div className="bg-black hover:red-shadow border-2 border-red-600 p-4 rounded-xl hover:scale-110 duration-300 group space-y-5" >
                            <Image
                                src={work.img}
                                alt={work.title}
                                width={300}
                                height={300}
                                className="w-full"
                            />
                            <div className="space-y-2 p-4">
                                <h1>{work.title}</h1>
                                <p className="text-sm line-clamp-2">{work.desc}</p>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
