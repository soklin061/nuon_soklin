import React from 'react';

export default function SectionHeading({
  tag,
  title,
  subtitle,
  align = 'center',
  className = ''
}) {
  const alignment = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end'
  };

  return (
    <div className={`flex flex-col ${alignment[align] || alignment.center} mb-12 ${className}`}>
      {tag && (
        <div className="inline-flex items-center gap-1.5 text-xs md:text-sm font-bold uppercase tracking-wider text-slate-800 mb-2">
          <span>{tag}</span>
          <span className="inline-block w-2 h-2 rounded-full bg-brand-500"></span>
        </div>
      )}
      {title && (
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="mt-3 text-slate-500 text-sm md:text-base max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
