import React from "react";
import Image from "next/image";
import html from "@/public/assets/html.png";
import css from "@/public/assets/css.png";
import javascript from "@/public/assets/javascript.png";
import reactImage from "@/public/assets/react.png";
import nextjs from "@/public/assets/nextjs.png";
import vite from "@/public/assets/vite.png";
import github from "@/public/assets/github.png";
import tailwind from "@/public/assets/tailwind.png";
import sanity from "@/public/assets/sanity.jpg";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-400",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: nextjs,
      title: "Next JS",
      style: "shadow-gray-600 dark:shadow-gray-300",
    },
    {
      id: 7,
      src: vite,
      title: "Vite",
      style: "shadow-pink-400",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: sanity,
      title: "Sanity",
      style: "shadow-red-400",
    },
  ];

  return (
    <div
      name="experience"
      className="py-10 text-gray-800 dark:text-white">
      <div className="max-w-screen-lg mx-auto p-auto flex flex-col justify-center w-full h-full">
        <div className="mt-8 text-center">
          <h3 className="text-4xl font-semibold">
            My <span className="text-cyan-600">Experience</span>
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mt-3 text-lg">My knowledge</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg bg-white dark:bg-transparent ${style}`}
            >
              <Image src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
