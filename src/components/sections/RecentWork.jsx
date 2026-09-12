import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { recentWorkData } from '../../data/recentWorkData';

export default function RecentWork() {
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? recentWorkData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev === recentWorkData.length - 1 ? 0 : prev + 1));
  };

  const visibleItems = [
    recentWorkData[startIndex],
    recentWorkData[(startIndex + 1) % recentWorkData.length]
  ];

  return (
    <section id="recent-work" className="py-16 md:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Arrows matching reference screenshot */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Recent Work
            </h2>
            <span className="w-2.5 h-2.5 rounded-full bg-brand-500 inline-block"></span>
          </div>

          {/* Carousel Arrows matching reference */}
          <div className="flex items-center gap-3 self-end sm:self-auto">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-xs cursor-pointer"
              aria-label="Previous work"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-brand-500 hover:bg-brand-600 text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-md shadow-brand-500/25 cursor-pointer"
              aria-label="Next work"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Cards Grid matching reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visibleItems.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col"
            >
              {/* Preview Graphic Area */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-brand-50/50 to-slate-50 p-6 sm:p-8 flex items-center justify-center">
                <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg border border-slate-200/80 group-hover:scale-[1.02] transition-transform duration-500">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-6 sm:p-8">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2 block">
                  {item.tag}
                </span>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-500 leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="flex items-center justify-between text-xs text-slate-400 pt-4 border-t border-slate-100 font-medium">
                  <span>Client: {item.client}</span>
                  <span>{item.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
