import React, { useState, useEffect } from "react";
import Image from "next/image";
import aboutImg from "@/public/assets/images/about.jpg";

const About = ({ completedProjects }) => {
  const startDate = new Date('2017-01-01');
  const currentDate = new Date();

  const diffInMonths = (currentDate.getFullYear() - startDate.getFullYear()) * 12
                      + currentDate.getMonth() - startDate.getMonth();

  const years = Math.floor(diffInMonths / 12);
  const months = diffInMonths % 12;

  const [completedProjectsCount, setCompletedProjectsCount] = useState(0);
  const [companiesWorkCount, setCompaniesWorkCount] = useState(0);

  useEffect(() => {
    const targetCompletedProjects = completedProjects;
    const targetCompaniesWork = 6; 
    const incrementCount = (target, setCount) => {
      let count = 0;
      const interval = setInterval(() => {
        if (count >= target) {
          clearInterval(interval);
        } else {
          count++;
          setCount(count);
        }
      }, 150); 
    };

    incrementCount(targetCompletedProjects, setCompletedProjectsCount);
    incrementCount(targetCompaniesWork, setCompaniesWorkCount);
  }, [completedProjects]);

  const info = [
    { text: "Completed Projects", count: completedProjectsCount },
    { text: "Companies Work", count: companiesWorkCount },
  ];

  return (
    <section id="about" className="py-10 text-gray-800 dark:text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-600 dark:text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-600 dark:text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
                I have {years} years and {months} months of work experience in IT Industry, including hardware and software. Currently, I am passionate about developing web applications.
              </p>
              <div className="flex mt-10 items-center justify-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <div className="md:text-4xl text-2xl font-semibold text-gray-800 dark:text-white">
                      <span className="font-bold">{String(content.count).padStart(2, '0')}</span>
                      <span className="text-cyan-600 font-bold">+</span>
                    </div>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
            </div>
          </div>
          <div>
            <div className="lg:w-96 h-full">
              <Image src={aboutImg} alt="" className="rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
