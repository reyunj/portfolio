import React from "react";
import Image from "next/image";
import hero from "@/public/assets/images/hero.png";
import {FaFacebook, FaTelegram, FaTwitter, FaYoutube} from "react-icons/fa"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <Image src={hero} alt="" className="md:w-11/12 h-full object-cover" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-gray-800 dark:text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is <span>Junrey</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Front-End Developer
          </h4>
          <div>
            <Link
              href="#portfolio"
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:bg-gradient-to-r hover:from-cyan-600 hover:to-blue-600"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
            <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
              <a href= "https://www.facebook.com/reyunj/" target="_blank" className="text-gray-600 hover:text-cyan-600 cursor-pointer">
                <FaFacebook/>
              </a>
              <a href= "https://www.youtube.com/channel/UC9mGXwQCYM1PbLJ5rqZ_ZJg" target="_blank" className="text-gray-600 hover:text-cyan-600 cursor-pointer">
                <FaYoutube/>
              </a>
              <a href= "https://t.me/reyunj" target="_blank" className="text-gray-600 hover:text-cyan-600 cursor-pointer">
                <FaTelegram/>
              </a>
              <a href= "https://twitter.com/junrey1296" target="_blank" className="text-gray-600 hover:text-cyan-600 cursor-pointer">
                <FaTwitter/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
