import React from 'react';
import { Palette, Sparkles, Code2, Layers, ArrowUpRight } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import { expertiseData } from '../../data/expertiseData';

const iconMap = {
  Palette: Palette,
  Sparkles: Sparkles,
  Code2: Code2,
  Layers: Layers
};

export default function Expertise() {
  return (
    <section id="expertise" className="py-16 md:py-24 bg-[#FAFAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading matching reference */}
        <SectionHeading
          tag="MY EXPERTISE"
          title="Skills & Solutions I Provide"
          subtitle="Combining contemporary UI/UX design with robust modern engineering to build world-class digital products."
          align="center"
        />

        {/* Expertise Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertiseData.map((item) => {
            const Icon = iconMap[item.iconName] || Code2;
            return (
              <div
                key={item.id}
                className="group relative bg-white rounded-3xl p-7 border border-slate-100 shadow-sm hover:shadow-card-hover hover:border-brand-200 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon Header */}
                  <div className="w-12 h-12 rounded-2xl bg-brand-50 group-hover:bg-brand-500 text-brand-500 group-hover:text-white flex items-center justify-center transition-colors duration-300 mb-6">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Skill Pills */}
                <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                  {item.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-slate-50 text-slate-600 group-hover:bg-brand-50/60 group-hover:text-brand-700 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
