import React, { useState } from 'react';
import { ExternalLink, Info, Globe } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import { GithubIcon } from '../common/SocialIcons';
import ProjectDetailModal from '../ui/ProjectDetailModal';
import { developerProjectsData } from '../../data/developerProjects';

export default function DeveloperProjects() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [activeProject, setActiveProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const categories = ['All', 'Full-Stack Web App', 'Frontend & API', 'SaaS Dashboard', 'Web Application'];

  const filteredProjects = selectedFilter === 'All'
    ? developerProjectsData
    : developerProjectsData.filter((p) => p.category === selectedFilter);

  const handleOpenDetails = (project) => {
    setActiveProject(project);
    setModalOpen(true);
  };

  return (
    <section id="developer-projects" className="py-16 md:py-24 bg-[#FAFAFC] border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          tag="DEVELOPER PROJECTS"
          title="Engineering & Live Web Applications"
          subtitle="Explore production web applications. Click any card to launch the live web application directly or view source code."
          align="center"
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`text-xs md:text-sm font-semibold px-4 py-2 rounded-xl transition-all duration-200 cursor-pointer ${
                selectedFilter === cat
                  ? 'bg-brand-500 text-white shadow-md shadow-brand-500/25'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Developer Cards Grid ("list care can click route to my web") */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-card-hover hover:border-brand-300 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Project Image & Live Web Clickable Anchor */}
              <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Badge Overlay */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white border border-white/20">
                    {project.category}
                  </span>
                  {project.badge && (
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-brand-500 text-white shadow-xs">
                      {project.badge}
                    </span>
                  )}
                </div>

                {/* Hover Quick Action Overlay */}
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-xs">
                  <a
                    href={project.webUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white text-xs md:text-sm font-bold px-4 py-2.5 rounded-xl shadow-lg transition-transform hover:scale-105"
                  >
                    <Globe className="w-4 h-4" />
                    <span>Launch Live Web</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => handleOpenDetails(project)}
                    className="inline-flex items-center gap-1.5 bg-white hover:bg-slate-100 text-slate-900 text-xs md:text-sm font-semibold px-4 py-2.5 rounded-xl shadow-lg transition-transform hover:scale-105"
                  >
                    <Info className="w-4 h-4 text-brand-500" />
                    <span>Details</span>
                  </button>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-500 leading-relaxed mb-5 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-slate-100 text-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Buttons with Click to Route to Live Web */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  {/* Direct Route to Web */}
                  <Button
                    href={project.webUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    size="sm"
                    icon={ExternalLink}
                    iconPosition="right"
                    className="font-semibold"
                  >
                    Route to Live Web
                  </Button>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleOpenDetails(project)}
                      className="text-xs font-semibold text-slate-600 hover:text-brand-600 px-3 py-1.5 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
                    >
                      More Info
                    </button>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-slate-400 hover:text-slate-800 rounded-lg hover:bg-slate-100 transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        project={activeProject}
      />
    </section>
  );
}
