import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Layers } from 'lucide-react';
import Button from '../common/Button';
import { GithubIcon } from '../common/SocialIcons';

export default function ProjectDetailModal({
  isOpen,
  onClose,
  project
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-md p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 p-6 md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Cover Image */}
        <div className="rounded-2xl overflow-hidden mb-6 aspect-video bg-slate-100 border border-slate-200/60 shadow-sm">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Header Info */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-brand-50 text-brand-600 border border-brand-200">
            {project.category}
          </span>
          {project.badge && (
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200">
              {project.badge}
            </span>
          )}
        </div>

        <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3">
          {project.title}
        </h3>

        <p className="text-slate-600 leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Key Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="mb-6">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-800 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-500" />
              Key Features & Capabilities
            </h4>
            <ul className="space-y-2.5">
              {project.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2 flex-shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Stack */}
        <div className="mb-8">
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-800 mb-3 flex items-center gap-2">
            <Layers className="w-4 h-4 text-brand-500" />
            Technologies & Tools
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span 
                key={tech}
                className="text-xs font-medium px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-brand-50 hover:text-brand-600 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons: Click route to my web */}
        <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-4">
          <Button
            href={project.webUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            size="md"
            icon={ExternalLink}
            iconPosition="right"
          >
            Launch Live Website
          </Button>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border-2 border-slate-300 text-slate-700 hover:border-slate-800 hover:text-slate-900 transition-all text-sm font-semibold"
            >
              <GithubIcon className="w-4 h-4" />
              <span>View Repository</span>
            </a>
          )}

          <button
            onClick={onClose}
            className="ml-auto text-sm font-medium text-slate-500 hover:text-slate-800 cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
