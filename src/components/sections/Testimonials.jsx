import React, { useState } from 'react';
import { Quote, Star } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import { testimonialsData } from '../../data/testimonialData';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentClient = testimonialsData[activeIndex];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-[#FAFAFC] border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading matching reference */}
        <SectionHeading
          tag="TESTIMONIALS"
          title="What Clients Say"
          subtitle="Feedback from clients and project partners on design quality, code standards, and delivery speed."
          align="center"
        />

        {/* Testimonials Showcase Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-slate-100 shadow-sm max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Quote Text */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <Quote className="w-10 h-10 text-brand-300 mb-6" />

                <p className="text-lg sm:text-xl text-slate-700 italic font-medium leading-relaxed mb-8">
                  &ldquo;{currentClient.quote}&rdquo;
                </p>

                {/* Star rating */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold text-slate-900">
                  {currentClient.name}
                </h4>
                <p className="text-sm text-brand-600 font-medium">
                  {currentClient.role} • <span className="text-slate-500">{currentClient.company}</span>
                </p>
                <span className="inline-block mt-2 text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-600">
                  Project: {currentClient.project}
                </span>
              </div>
            </div>

            {/* Right Column: Circular Avatar + Avatar Selection List matching reference */}
            <div className="lg:col-span-5 flex items-center justify-center lg:justify-end gap-6 sm:gap-8">
              
              {/* Main Circular Avatar matching reference */}
              <div className="relative w-44 h-44 sm:w-56 sm:h-56 rounded-full p-2 bg-gradient-to-tr from-brand-200 to-indigo-100 shadow-xl flex-shrink-0">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-inner">
                  <img
                    src={currentClient.avatar}
                    alt={currentClient.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Vertical list of small avatars matching reference screenshot */}
              <div className="flex flex-col gap-3">
                {testimonialsData.map((client, index) => (
                  <button
                    key={client.id}
                    onClick={() => setActiveIndex(index)}
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 transition-all duration-300 cursor-pointer ${
                      activeIndex === index
                        ? 'border-brand-500 ring-4 ring-brand-100 scale-110 shadow-md'
                        : 'border-white opacity-60 hover:opacity-100 hover:scale-105'
                    }`}
                    title={client.name}
                    aria-label={`Select testimonial from ${client.name}`}
                  >
                    <img
                      src={client.avatar}
                      alt={client.name}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
