import React from 'react';
import { FacebookIcon, InstagramIcon, TwitterIcon, PinterestIcon } from './Icons';


const DripSeparator: React.FC = () => (
  <div className="absolute top-0 left-0 w-full overflow-hidden leading-none" style={{ transform: 'translateY(-1px)' }}>
      <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[120px]"
      >
          <path
          d="M0,63.84 C299.64,129.54 300.73,53.2 600,53.2 C900,53.2 901,129.54 1200,63.84 V0 H0 Z"
          className="fill-[#F9EFE5]"
          ></path>
          <path
          d="M0,21.21 C200.86,68.88 322.42,120 600,120 C877.58,120 1000,68.88 1200,21.21 V0 H0 Z"
          opacity=".7"
          className="fill-[#F9EFE5]"
          ></path>
          <path
          d="M0,0V7.23c0,0,200.12,34.88,600,34.88S1200,7.23,1200,7.23V0Z"
          opacity=".5"
          className="fill-[#F9EFE5]"
          ></path>
      </svg>
  </div>
);

const Showcase: React.FC = () => {
  const tags = ['#VelvetSunrise', '#GoldenWhiskAward', '#ArtisanCake', '#GourmetPastry', '#SaffronInfused'];

  return (
    <section id="cakes" className="relative -mt-24 md:-mt-20 bg-[#F9EFE5] z-0" style={{ paddingTop: '120px' }}>
      <DripSeparator />
      <div className="container mx-auto px-6 pt-20 pb-20 md:pt-24 md:pb-32">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="lg:w-1/2 w-full">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-amber-200 to-rose-200 rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <img
                src="/images/cake_with_awards.png"
                alt="Golden whisk award-winning cake display"
                className="relative rounded-lg shadow-2xl w-full h-auto object-cover aspect-square transform transition-transform duration-700 group-hover:scale-[1.05]"
                loading="lazy"
              />
              <div className="absolute top-5 left-5 h-24 w-24 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full flex flex-col items-center justify-center text-white shadow-xl transform group-hover:scale-110 transition-transform duration-300 cursor-pointer" title="Winner of the Golden Whisk Award">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                <span className="font-bold text-xs uppercase tracking-wide">Golden</span>
                <span className="text-xs uppercase -mt-1 tracking-wide">Whisk</span>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-[#483434] mb-4">Our Award-Winning Masterpiece</h2>
            <p className="text-2xl font-serif text-[#6B4F4F] mb-6">The 'Velvet Sunrise' Gateau</p>
            <p className="text-lg text-stone-700 leading-relaxed mb-8">
              Winner of the prestigious Golden Whisk Award, the Velvet Sunrise is an exquisite fusion of flavors. Layers of delicate saffron-infused sponge, raspberry-rose confit, and a light pistachio mousse, all enveloped in a silky white chocolate glaze. A true celebration for the senses.
            </p>
            <div className="flex justify-center lg:justify-start">
              <a
                href="#"
                className="bg-[#6B4F4F] text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Available by Special Order
              </a>
            </div>
            <div className="mt-10 pt-6 border-t border-[#D3B49D]/50">
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
                <span className="font-semibold text-stone-600">Share the Masterpiece:</span>
                <div className="flex space-x-3">
                    <a href="#" aria-label="Share on Facebook" className="text-[#6B4F4F] hover:text-[#483434] transition-colors"><FacebookIcon className="w-5 h-5"/></a>
                    <a href="#" aria-label="Share on Twitter" className="text-[#6B4F4F] hover:text-[#483434] transition-colors"><TwitterIcon className="w-5 h-5"/></a>
                    <a href="#" aria-label="Share on Pinterest" className="text-[#6B4F4F] hover:text-[#483434] transition-colors"><PinterestIcon className="w-5 h-5"/></a>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                {tags.map(tag => (
                  <span key={tag} className="bg-amber-100 text-amber-800 text-xs font-medium px-3 py-1 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
