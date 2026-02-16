'use client';

import React from 'react';
import { FacebookIcon, InstagramIcon, TwitterIcon } from './Icons';

const Hero: React.FC = () => {

  return (
    <section
      className="relative -mt-[96px] text-white overflow-visible flex items-center pb-32 lg:pb-40"
      style={{ minHeight: 'clamp(70vh, calc(100vw * 0.5625), 900px)' }}
    >
      <div className="absolute inset-0">
        <img
          src="/images/pastel_cake.png"
          alt="Bright colorful pastel cake"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f0605]/40 via-[#1d0b09]/30 to-[#f9efe5]/10" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent_55%)]" />
        <div className="absolute inset-y-0 right-[-10%] w-2/3 bg-[radial-gradient(circle_at_bottom,rgba(247,208,170,0.25),transparent_70%)]" />
      </div>
      {/* Glassy fade effect at bottom */}
      <div className="absolute bottom-2 left-0 right-0 h-20 bg-gradient-to-b from-transparent via-white/5 to-white/20 backdrop-blur-md pointer-events-none z-10" />
      <div className="relative z-10 container mx-auto px-6 w-full flex items-center justify-center py-12">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 xl:gap-24 w-full">
          <div className="flex-[1.05] text-left space-y-6">
            <p className="uppercase tracking-[0.3em] text-xs text-amber-200">
              Maison Fondée 2010
            </p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Where Flour &amp; Passion Become Poetry
            </h1>
            <p className="text-lg md:text-xl text-rose-100 max-w-xl">
              Exquisite artisanal pastries, handcrafted with timeless French tradition.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#cakes"
                className="bg-[#FDF8F0] text-[#6B4F4F] px-8 py-3 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Discover Perfection
              </a>
              <a
                href="#history"
                className="text-white border border-white/40 px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition"
              >
                Our House Story
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20 flex flex-col space-y-4">
        {[FacebookIcon, InstagramIcon, TwitterIcon].map((Icon, index) => (
          <a
            key={index}
            href="#"
            className="text-white/80 hover:text-[#EED6C4] transition-colors p-3 bg-white/10 rounded-full backdrop-blur"
          >
            <Icon />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Hero;
