import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

export default function ImageModal({
  isOpen,
  onClose,
  images = [],
  currentIndex = 0,
  onIndexChange
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && images.length > 1) {
        onIndexChange((currentIndex - 1 + images.length) % images.length);
      }
      if (e.key === 'ArrowRight' && images.length > 1) {
        onIndexChange((currentIndex + 1) % images.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, images, onClose, onIndexChange]);

  if (!isOpen || images.length === 0) return null;

  const currentItem = images[currentIndex];
  const imageUrl = typeof currentItem === 'string' ? currentItem : currentItem.url;
  const caption = typeof currentItem === 'object' ? currentItem.caption : '';

  const handlePrev = (e) => {
    e.stopPropagation();
    onIndexChange((currentIndex - 1 + images.length) % images.length);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    onIndexChange((currentIndex + 1) % images.length);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4 transition-all duration-300 animate-fadeIn"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
        aria-label="Close Preview"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all hover:scale-110 cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all hover:scale-110 cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Main Image Container */}
      <div 
        className="relative max-w-5xl w-full max-h-[88vh] flex flex-col items-center justify-center p-2"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative rounded-2xl overflow-hidden bg-slate-900 shadow-2xl border border-white/10">
          <img
            src={imageUrl}
            alt={caption || 'Preview'}
            className="max-h-[75vh] w-auto max-w-full object-contain rounded-xl select-none"
          />
        </div>

        {/* Footer info & caption */}
        <div className="mt-4 text-center max-w-xl">
          {caption && (
            <p className="text-white text-sm md:text-base font-medium drop-shadow-sm">
              {caption}
            </p>
          )}
          {images.length > 1 && (
            <p className="text-white/60 text-xs mt-1">
              Reference {currentIndex + 1} of {images.length}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
