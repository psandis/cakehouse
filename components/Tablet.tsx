'use client';

import React, { useState, useEffect } from 'react';

interface Slide {
  image: string;
  alt: string;
}

interface Accolade {
  title: string;
  detail: string;
}

interface TabletProps {
  slides: Slide[];
  accolades: Accolade[];
  className?: string;
  style?: React.CSSProperties;
}

const Tablet: React.FC<TabletProps> = ({ slides, accolades, className = '', style }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearTimeout(timer);
  }, [currentSlide, slides.length]);

  return (
    <div className={`flex-[1.1] relative w-full max-w-2xl lg:max-w-3xl z-30 ${className}`} style={style}>
      <div className="relative rounded-[32px] bg-gradient-to-br from-[#3c1f1b]/90 to-[#120807]/90 p-5 lg:p-6 shadow-[0_30px_100px_rgba(0,0,0,0.45)] transform lg:-rotate-3 origin-center">
        <div className="relative overflow-hidden rounded-[26px] aspect-[5/3] bg-black/20">
          {slides.map((slide, index) => (
            <img
              key={slide.image}
              src={slide.image}
              alt={slide.alt}
              className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          
          {/* Chef's Choice Ribbon - Top Right */}
          <div className="absolute top-4 right-4 z-20">
            <div className="w-24 h-24 overflow-hidden rounded-full shadow-2xl border border-white/20 bg-[#f1a545]">
              <div className="relative h-full w-full">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rotate-45 bg-amber-500 text-center text-white font-semibold py-1.5 px-12 shadow-2xl text-xs">
                    Chef&apos;s Choice
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Carousel Dots - Top Left */}
          <div className="absolute top-4 left-4 z-30 flex space-x-2 bg-black/30 backdrop-blur-sm px-2 py-1.5 rounded-full">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all border ${
                  index === currentSlide 
                    ? 'bg-white scale-110 border-white shadow-md' 
                    : 'bg-white/60 hover:bg-white/80 border-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Accolade Card */}
        <div className="absolute left-4 bottom-4 md:left-8 md:bottom-8 z-20">
          <div className="backdrop-blur-xl bg-white/95 text-[#483434] rounded-3xl px-5 py-4 shadow-2xl w-60 border border-white/70">
            <p className="text-xs uppercase tracking-[0.3em] text-amber-600 mb-2">Laurel Board</p>
            <ul className="space-y-1 text-sm">
              {accolades.map(({ title, detail }) => (
                <li key={title}>
                  <span className="font-semibold">{title}</span>
                  <span className="block text-xs text-stone-500">{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="absolute -right-8 -bottom-8 hidden lg:block">
        <div className="w-40 h-40 border border-white/20 rounded-full" />
      </div>
    </div>
  );
};

export default Tablet;

