import React, { useState } from 'react';
import { Eye, Image as ImageIcon, Layers, Sparkles } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import ImageModal from '../ui/ImageModal';
import { designExperienceData } from '../../data/designExperience';

export default function DesignExperience() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeImages, setActiveImages] = useState([]);
  const [activeIdx, setActiveIdx] = useState(0);

  const openLightbox = (images, index = 0) => {
    setActiveImages(images);
    setActiveIdx(index);
    setModalOpen(true);
  };

  return (
    <section id="design-experience" className="py-16 md:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          tag="DESIGN EXPERIENCE"
          title="UI/UX Case Studies & Design References"
          subtitle="Explore product architecture, design systems, and click through comprehensive image references for each project."
          align="center"
        />

        {/* Experience List with Image References */}
        <div className="space-y-12">
          {designExperienceData.map((item, index) => (
            <div
              key={item.id}
              className="bg-[#FAFAFC] rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/70 hover:border-brand-300 shadow-sm transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Info Column */}
                <div className="lg:col-span-5 flex flex-col justify-between h-full">
                  <div>
                    {/* Meta tags */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-brand-100 text-brand-700">
                        {item.category}
                      </span>
                      <span className="text-xs font-medium text-slate-500">
                        {item.period}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      {item.title}
                    </h3>

                    {/* Role & Client */}
                    <p className="text-xs font-semibold text-brand-600 mb-4">
                      {item.role} • <span className="text-slate-600">{item.client}</span>
                    </p>

                    {/* Summary */}
                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {item.summary}
                    </p>

                    {/* Tools */}
                    <div className="mb-6">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Design Tools & Methodologies:
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {item.tools.map((tool) => (
                          <span
                            key={tool}
                            className="text-xs font-medium px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-700"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Button to open main gallery */}
                  <button
                    onClick={() => openLightbox(item.imageReferences, 0)}
                    className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700 bg-brand-50 hover:bg-brand-100 px-4 py-2.5 rounded-xl transition-colors cursor-pointer w-full sm:w-auto"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View All ({item.imageReferences.length}) Image References</span>
                  </button>
                </div>

                {/* Right Column: List of Image References (Clickable Thumbnails) */}
                <div className="lg:col-span-7">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                      <ImageIcon className="w-3.5 h-3.5 text-brand-500" />
                      Design References & Screens (Click to inspect)
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {item.imageReferences.length} screens
                    </span>
                  </div>

                  {/* Image References Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-2 gap-3.5">
                    {item.imageReferences.slice(0, 4).map((refImg, refIdx) => (
                      <div
                        key={refIdx}
                        onClick={() => openLightbox(item.imageReferences, refIdx)}
                        className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-200 cursor-pointer border border-slate-200/80 shadow-xs hover:shadow-md hover:border-brand-400 transition-all duration-300"
                      >
                        <img
                          src={refImg.url}
                          alt={refImg.caption}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        
                        {/* Hover Overlay with caption */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 flex flex-col justify-end">
                          <div className="flex items-center gap-1.5 text-white/90 text-xs font-semibold">
                            <Eye className="w-3.5 h-3.5 text-brand-300" />
                            <span>Preview</span>
                          </div>
                          <p className="text-[11px] text-white/80 line-clamp-2 mt-0.5">
                            {refImg.caption}
                          </p>
                        </div>

                        {/* View More Overlay for the 4th item if there are more */}
                        {refIdx === 3 && item.imageReferences.length > 4 && (
                          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px] flex flex-col items-center justify-center transition-colors duration-300 group-hover:bg-brand-600/80">
                            <span className="text-white text-2xl font-black">
                              +{item.imageReferences.length - 4}
                            </span>
                            <span className="text-white/90 text-[10px] font-bold uppercase tracking-wider mt-1">
                              View More
                            </span>
                          </div>
                        )}

                        {/* Counter pill */}
                        <div className="absolute top-2 right-2 bg-slate-900/60 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded-full z-10">
                          #{refIdx + 1}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <ImageModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        images={activeImages}
        currentIndex={activeIdx}
        onIndexChange={setActiveIdx}
      />
    </section>
  );
}
