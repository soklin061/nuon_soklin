import React from 'react';
import { ArrowRight, Download, Send, Sparkles } from 'lucide-react';
import Button from '../common/Button';
import { profileData } from '../../data/portfolioData';

export default function Hero() {
  return (
    <section id="home" className="relative pt-6 pb-16 md:pt-12 md:pb-24 overflow-hidden">
      {/* Subtle background glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-brand-200/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Content Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[410px] lg:h-[410px]">

              {/* Outer soft circle ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-brand-100 to-indigo-50 border-4 border-white shadow-xl" />

              {/* Image with circular crop */}
              <div className="absolute inset-2 rounded-full overflow-hidden bg-slate-100 flex items-center justify-center">
                <img
                  src={profileData.heroImage}
                  alt={profileData.name}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Floating decorative badge */}
              <div className="absolute -bottom-2 -left-2 sm:bottom-4 sm:left-2 bg-white px-4 py-2.5 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-2.5 animate-bounce-slow">
                <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-bold text-slate-800">Available for New Work</span>
              </div>

            </div>
          </div>


          {/* Right Image Column: Circular Portrait matching reference */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10 md:ml-12">

            {/* Tagline / Greeting Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-xs mb-6">
              <span className="text-base">👋</span>
              <span className="text-xs md:text-sm font-semibold text-slate-700">
                {profileData.taglineBadge}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-4xl md:text-4xl lg:text-[54px] font-black tracking-tight text-slate-900 leading-[1.15] mb-6">
              NUON SOKLIN
            </h1>

            {/* Main Headline */}
            <h1 className="text-xl md:text-3xl  font-black tracking-tight text-slate-900 leading-[1.15] mb-6">
              I Enjoy Frontend and Full Stack Developer
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-500 font-normal leading-relaxed max-w-xl mb-9">
              {profileData.heroSubtitle}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <Button
                href="#contact"
                variant="primary"
                size="lg"
                icon={Send}
                iconPosition="right"
                className="w-full sm:w-auto px-7 py-3.5 font-semibold text-sm md:text-base rounded-xl"
              >
                Hire Me
              </Button>

              <Button
                href={profileData.resumeUrl || "#"}
                variant="outline"
                size="lg"
                icon={Download}
                iconPosition="right"
                className="w-full sm:w-auto px-7 py-3.5 font-semibold text-sm md:text-base rounded-xl"
              >
                Download CV
              </Button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
