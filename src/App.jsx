import React from 'react';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Hero from './components/sections/Hero';
import AboutMe from './components/sections/AboutMe';
import Expertise from './components/sections/Expertise';
import DesignExperience from './components/sections/DesignExperience';
import DeveloperProjects from './components/sections/DeveloperProjects';
import RecentWork from './components/sections/RecentWork';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAFAFC] text-slate-800 font-sans selection:bg-brand-500 selection:text-white flex flex-col">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* About Me Section */}
        <AboutMe />

        {/* My Expertise Section */}
        <Expertise />

        {/* Design Experience with Image References */}
        <DesignExperience />

        {/* Developer Projects with Clickable Web Routes */}
        <DeveloperProjects />

        {/* Recent Work Carousel */}
        <RecentWork />

        {/* Testimonials with Client Avatar Switcher */}
        {/* <Testimonials /> */}

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
