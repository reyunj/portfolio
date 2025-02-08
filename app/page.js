"use client"
import React, { useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Experience from "./components/Experience";
import SocialLinks from "./components/SocialLinks";

const MainComponent = () => {
  const [completedProjectsCount, setCompletedProjectsCount] = useState(0);

  return (
    <main className="dark:bg-gray-900 bg-white dark:text-gray-100 text-gray-900 transition-colors duration-200">
      <Navbar />
      <SocialLinks />
      <Hero />
      <About completedProjects={completedProjectsCount} />
      <Experience />
      <Project setCompletedProjectsCount={setCompletedProjectsCount} />
      <Contact />
      <Footer />
    </main>
  );
};

const App = () => {
  return <MainComponent />;
};

export default App;
