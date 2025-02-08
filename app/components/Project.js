import React from "react";
import Image from "next/image";
import port from "@/public/assets/images/project-1.png";
import gym from "@/public/assets/images/project-2.jpg";
import weather from "@/public/assets/images/project-3.jpg";
import agdp from "@/public/assets/images/agdp.png"
import lux from "@/public/assets/images/lux.png"
import magis from "@/public/assets/images/magis.png"
import overlay from "@/public/assets/images/overlay.png"
import exam from "@/public/assets/images/exam.png"
import agentai from "@/public/assets/images/agent.png"

const Project = ({ setCompletedProjectsCount }) => {
  const portfolios = [
    { id: 1, src: port, live_link: "https://my-porfolio-five-jet.vercel.app/" },
    { id: 2, src: gym, live_link: "https://gym-typescript-seven.vercel.app/" },
    { id: 3, src: weather, live_link: "https://weather-plum-seven.vercel.app/" },
    { id: 4, src: agdp, live_link: "https://agdptech.com/" },
    { id: 5, src: magis, live_link: "https://magis-website.netlify.app/" },
    { id: 6, src: lux, live_link: "https://www.luxauto.io/" },
    { id: 7, src: overlay, live_link: "https://obs-setup.vercel.app/" },
    { id: 8, src: exam, live_link: "https://junrey-final-exam.vercel.app/" },
    { id: 9, src: agentai, live_link: "https://www.agentfinance.ai/" },
  ];

  React.useEffect(() => {
    setCompletedProjectsCount(portfolios.length);
  }, [portfolios.length, setCompletedProjectsCount]);

  return (
    <div name="portfolio" className="py-10 text-gray-800 dark:text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="mt-8 text-center">
          <h3 className="text-4xl font-semibold">
            My <span className="text-cyan-600">Portfolio</span>
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mt-3 text-lg">Check out some of my work right here</p>
        </div>

        <div className="w-full grid sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, live_link }) => (
            <div key={id} className="shadow-md shadow-gray-300 dark:shadow-gray-600 rounded-lg bg-white dark:bg-gray-800">
              <Image src={src} alt="Site" width={400} className="rounded-md duration-200 hover:scale-105" />
              <div className="flex justify-center p-4">
                <a href={live_link} target="_blank" className="px-6 py-2 rounded-lg bg-cyan-600 text-white hover:bg-cyan-700 transition-colors duration-300">
                  Visit Live
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
