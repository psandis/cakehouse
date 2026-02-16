'use client';

import { motion } from 'framer-motion';
import React from 'react';

const milestones = [
  { year: '2010', title: 'Atelier Opens On Rue Montorgueil', detail: 'Chef Camille unveils a six-seat tasting counter, marrying French heritage with modern patisserie art.' },
  { year: '2014', title: 'First Golden Whisk Trophy', detail: 'The Velvet Sunrise gateau sweeps the international jury with saffron sponge and pistachio mousse layers.' },
  { year: '2018', title: 'Maison Residency Program', detail: 'We begin mentoring young artisans, exchanging techniques with luminaries from Paris and Kyoto.' },
  { year: '2023', title: 'Salon du Chocolat Laureates', detail: 'Crème de la Crème debuts edible light sculptures, earning the Jury Coup de Coeur award.' },
];

const stagger = {
  hidden: { opacity: 0, y: 30 },
  show: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
};

const History: React.FC = () => {
  return (
    <section id="history" className="bg-[#FDF8F0] text-[#483434] py-24 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#EED6C4]/60 to-transparent pointer-events-none" />
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="uppercase tracking-[0.3em] text-xs text-[#B08968]">Maison Chronique</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">A Legacy Baked Into Every Layer</h2>
          <p className="text-lg text-[#6B4F4F]">
            From an intimate atelier to an award-winning salon, these are the chapters that shaped Crème de la Crème.
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 border-l border-dashed border-[#D3B49D]" aria-hidden="true" />
          <div className="space-y-10">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                className={`relative md:w-1/2 ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'} pl-12 md:pl-16`}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                custom={index}
                variants={stagger}
              >
                <div className="absolute left-3 md:left-0 top-5 transform md:-translate-x-1/2">
                  <div className="w-4 h-4 rounded-full bg-[#6B4F4F] border-4 border-[#FDF8F0]" />
                </div>
                <div className="bg-white rounded-3xl shadow-lg border border-[#E7C8AF] px-8 py-8 hover:-translate-y-1 transition-transform duration-300">
                  <p className="text-sm uppercase tracking-[0.2em] text-[#B08968]">{milestone.year}</p>
                  <h3 className="text-2xl font-semibold mt-2 mb-3">{milestone.title}</h3>
                  <p className="text-base text-[#6B4F4F]">{milestone.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
