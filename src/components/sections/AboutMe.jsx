import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Button from '../common/Button';
import { profileData } from '../../data/portfolioData';

export default function AboutMe() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Rounded Desk Photo matching reference */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Background decorative offset card */}
              <div className="absolute -inset-2 bg-gradient-to-r from-brand-500/10 to-indigo-500/10 rounded-3xl transform -rotate-1 group-hover:rotate-0 transition-transform duration-300" />

              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200/60 bg-slate-100 aspect-[4/3] sm:aspect-[4/3] lg:aspect-[5/4]">
                <img
                  src={profileData.aboutImage}
                  alt="Working at desk"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Floating Experience Badge */}
              <div className="absolute -bottom-5 right-6 bg-brand-500 text-white p-4 rounded-2xl shadow-lg border-2 border-white flex flex-col items-center justify-center">
                <span className="text-2xl font-black leading-none">2+</span>
                <span className="text-[11px] font-medium tracking-wide uppercase mt-1">Years Exp.</span>
              </div>
            </div>
          </div>

          {/* Right Column: About Details matching reference */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">

            {/* Section Tag */}
            <div className="inline-flex items-center gap-1.5 text-xs md:text-sm font-bold uppercase tracking-wider text-slate-900 mb-3">
              <span>{profileData.about.heading}</span>
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-brand-500"></span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
              Participation and Responsibility
            </h2>

            {/* Paragraphs */}
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
              {profileData.about.paragraph1}
            </p>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8">
              {profileData.about.paragraph2}
            </p>

            {/* Key Strengths */}
            <div className="grid grid-cols-2 gap-3.5 mb-8 w-full">
              {[
                "Clean & Maintainable React Code",
                "Designs with Tailwind CSS",
                "REST & GraphQL API Integration",
                "Scalable Full-Stack Architecture",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-brand-500 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Button: More About Me */}
            <div className="flex flex-wrap items-center gap-4">
              <Button
                href="#expertise"
                variant="primary"
                size="md"
                icon={ArrowRight}
                iconPosition="right"
                className="px-6 py-3 font-semibold rounded-xl"
              >
                More About Me
              </Button>

              <Button
                href="#contact"
                variant="secondary"
                size="md"
                className="px-6 py-3 font-semibold rounded-xl"
              >
                Get In Touch
              </Button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
