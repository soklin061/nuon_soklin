import React, { useState, useEffect } from 'react';
import { Mail, Menu, X } from 'lucide-react';
import { profileData, navLinks } from '../../data/portfolioData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-40 w-full transition-all duration-300 ${
      scrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100 py-3.5' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden shadow-xs ring-2 ring-brand-500/20 group-hover:ring-brand-500/40 transition-all">
              <img
                src={profileData.logoImage || "/app-icon.svg"}
                alt={profileData.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-brand-500 group-hover:text-brand-600 transition-colors">
                {profileData.logoText || "SOKLIN DEV"}
              </span>
              <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-brand-500 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Email / Contact Pill */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={`mailto:${profileData.email}`}
              className="flex items-center gap-2 text-xs md:text-sm font-medium text-slate-700 hover:text-brand-500 bg-white hover:bg-brand-50 px-3.5 py-2 rounded-full border border-slate-200 hover:border-brand-300 transition-all shadow-sm"
            >
              <Mail className="w-4 h-4 text-brand-500" />
              <span>{profileData.email}</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-brand-500 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-4 border-t border-slate-100 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:text-brand-500 hover:bg-brand-50 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 border-t border-slate-100">
                <a
                  href={`mailto:${profileData.email}`}
                  className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-brand-600 bg-brand-50 rounded-lg"
                >
                  <Mail className="w-4 h-4" />
                  <span>{profileData.email}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
