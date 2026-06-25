'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ATSFAQConfig } from '../../Configuration/ATSChecker/Config';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white py-20 lg:py-28 text-[#101828] border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Layout: Two Columns on big screens */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Title & Video Tutorial Placeholder */}
          <div className="lg:col-span-12 xl:col-span-5 flex flex-col gap-8 lg:sticky lg:top-24">
            <div className="max-w-md">
              <h2 className="text-[34px] sm:text-[42px] font-black leading-tight tracking-tight text-[#101828] uppercase mb-4 whitespace-pre-line">
                {ATSFAQConfig.header.title}
              </h2>
              <p className="text-gray-500 text-[15px] leading-relaxed">
                {ATSFAQConfig.header.description}
              </p>
            </div>

            {/* Premium Video Tutorial Placeholder */}
            <div className="relative aspect-video rounded-3xl overflow-hidden bg-slate-900 border border-slate-200/80 shadow-[0_12px_36px_rgba(15,23,42,0.1)] group cursor-pointer">
              {/* Abstract video poster background matching EuropeCV theme */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#1a2e40] via-[#0f171e] to-[#122130] opacity-95 transition-all duration-300 group-hover:scale-105"></div>
              
              {/* Grid backdrop pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

              {/* Decorative Tech Elements representing ATS Matching */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between text-white/50 select-none pointer-events-none">
                <div className="flex items-center justify-between text-[11px] font-mono tracking-wider opacity-60">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    {ATSFAQConfig.videoPlaceholder.filename}
                  </span>
                  <span>{ATSFAQConfig.videoPlaceholder.resolution} • {ATSFAQConfig.videoPlaceholder.duration}</span>
                </div>
                
                {/* Visual Graphic Representation of Resume optimization */}
                <div className="flex items-center justify-center flex-grow">
                  <div className="relative w-28 h-20 bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col gap-1.5 backdrop-blur-sm shadow-2xl transition-transform duration-300 group-hover:translate-y-[-4px]">
                    <div className="w-10 h-1.5 bg-sky-400 rounded-full"></div>
                    <div className="w-16 h-1 bg-white/20 rounded-full"></div>
                    <div className="w-12 h-1 bg-white/20 rounded-full"></div>
                    <div className="w-8 h-1 bg-white/20 rounded-full"></div>
                    
                    {/* Pulsing Match Circle graphic */}
                    <div className="absolute -bottom-3 -right-3 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg border border-slate-100">
                      <span className="text-[11px] font-black text-emerald-600 leading-none">{ATSFAQConfig.videoPlaceholder.matchScore}</span>
                    </div>
                  </div>
                </div>

                <div className="text-center text-[12px] font-semibold text-white/80 tracking-wide">
                  {ATSFAQConfig.videoPlaceholder.promoText}
                </div>
              </div>

              {/* Glowing Interactive Play Button Panel */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/25 transition-all duration-300">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white flex items-center justify-center text-[#101828] shadow-[0_8px_24px_rgba(0,0,0,0.3)] transition-all duration-300 transform group-hover:scale-110 group-hover:shadow-[0_12px_28px_rgba(16,185,129,0.25)] border-4 border-white/20 relative z-10">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#101828] fill-current ml-1" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* Edge Gradient Border Effect */}
              <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-emerald-500 via-sky-500 to-indigo-500 opacity-60"></div>
            </div>

          </div>

          {/* Right Column: FAQ Accordions */}
          <div className="lg:col-span-12 xl:col-span-7 flex flex-col gap-4">
            {ATSFAQConfig.faqList.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  id={`faq-item-${index}`}
                  className={`border rounded-2xl transition-all duration-300 ${
                    isOpen 
                      ? 'border-gray-200 bg-slate-50/50 shadow-sm' 
                      : 'border-gray-100 hover:border-gray-200 hover:bg-slate-50/30'
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-bold text-[16px] sm:text-[17px] text-[#101828] select-none"
                  >
                    <span className="leading-snug">{faq.question}</span>
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen ? 'bg-[#101828] text-white rotate-180' : 'bg-gray-100 text-[#101828]'
                    }`}>
                      <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="stroke-current stroke-[2.5]" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1l4 4l4-4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                      >
                        <div className="px-6 pb-6 pt-1 text-gray-500 text-[15px] leading-relaxed border-t border-gray-100">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
