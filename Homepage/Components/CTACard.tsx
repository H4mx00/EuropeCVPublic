'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion } from 'motion/react';
import { CTACardConfig } from '../../Configuration/Homepage/Config';

export default function CTACard() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % CTACardConfig.images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 mb-20">
      {/* Sleek, more compact cards layout with exact soft-blue background from screenshot */}
      <div className="bg-gradient-to-br from-[#e8f3ff] via-[#dcedff] to-[#f4f9ff] rounded-[48px] px-8 py-12 md:px-14 md:py-16 lg:px-20 lg:py-16 relative overflow-hidden shadow-sm border border-blue-100/50">
        
        {/* Subtle decorative background glow grids and abstract shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[60%] rounded-full bg-blue-400/20 blur-[80px]"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[60%] rounded-full bg-[#136bf5]/10 blur-[100px]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(30,128,240,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(30,128,240,0.04)_1px,transparent_1px)] bg-[size:32px_32px] opacity-70"></div>
          
          {/* Curvy decorative SVG line */}
          <svg className="absolute top-0 right-0 w-1/2 h-full text-blue-200/40 transform translate-x-1/4" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M400 0C400 0 250 150 200 300C150 450 0 400 0 400" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" />
            <path d="M350 -50C350 -50 200 100 150 250C100 400 -50 350 -50 350" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>

        {/* Crisp grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10 w-full">
          
          {/* Left Column: Copywriting content (takes 6 columns) */}
          <div className="lg:col-span-6 flex flex-col items-start justify-center text-left">
            <h2 className="text-3xl sm:text-4xl md:text-[54px] font-black leading-[1.12] text-slate-900 tracking-[-1px] mb-4">
              {CTACardConfig.title.prefix}{' '}
              <span className="text-[#136bf5] underline decoration-blue-500/40 decoration-4 underline-offset-4 relative inline-block">
                {CTACardConfig.title.count}
              </span>{' '}
              {CTACardConfig.title.suffix}
            </h2>
            
            <p className="text-[17px] sm:text-[19px] text-[#475467] font-medium leading-relaxed mb-10 max-w-md">
              {CTACardConfig.subtitle}
            </p>
            
            <Link 
              href={CTACardConfig.cta.href}
              className="inline-flex items-center justify-center px-8 py-4 text-[16px] font-bold text-white bg-[#136bf5] hover:bg-[#115ed7] transition-all duration-300 rounded-2xl shadow-[0_8px_24px_rgba(19,107,245,0.25)] hover:shadow-[0_12px_32px_rgba(19,107,245,0.35)] select-none cursor-pointer transform hover:-translate-y-0.5"
            >
              {CTACardConfig.cta.label}
              <svg className="w-5 h-5 ml-2.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

          {/* Right Column: Animated Image Slider */}
          <div className="lg:col-span-6 flex items-center justify-center relative w-full pt-10 lg:pt-0">
            
            {/* Alignment container */}
            <div className="relative flex items-center justify-center h-[280px] sm:h-[320px] lg:h-[360px] cursor-default w-full">
              
              {/* Smiling Person Image Card (Compact, clean shape as requested) */}
              <div id="portrait-wrapper" className="relative w-[210px] h-[210px] sm:w-[260px] sm:h-[260px] lg:w-[300px] lg:h-[300px] rounded-[40px] bg-white border-[6px] border-white shadow-[0_20px_48px_rgba(19,107,245,0.12)] shrink-0 hover:scale-[1.02] transition-transform duration-500 z-10 group">
                {/* Visual custom blue overlay to tint background of portrait matching screenshots */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#9cc6ff]/30 via-transparent to-[#def0ff]/30 mix-blend-multiply z-10 pointer-events-none rounded-[34px]"></div>
                
                <div className="relative w-full h-full overflow-hidden rounded-[34px] bg-[#ebf4ff]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentIndex}
                      initial={{ opacity: 0, scale: 1.08, filter: 'blur(4px)' }}
                      animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                      exit={{ opacity: 0, scale: 0.95, filter: 'blur(4px)' }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-0 w-full h-full"
                    >
                      <Image 
                        src={CTACardConfig.images[currentIndex]}
                        alt="EuropeCV Premium User Portrait"
                        fill
                        className="object-cover relative z-0 transition-transform duration-1000 group-hover:scale-105"
                        unoptimized
                        priority
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
              
              {/* Decorative Floating Badges */}
              
              {/* Floating 5 Stars Badge */}
              <div className="absolute -top-[5%] -right-4 sm:right-[5%] lg:right-[-5%] xl:right-[-10%] bg-white shadow-xl shadow-blue-900/5 rounded-2xl rounded-tr-sm p-3 flex flex-col gap-1.5 z-20 animate-[bounce_4s_infinite]">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-4 h-4 text-yellow-500 drop-shadow-sm" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-[1px]">{CTACardConfig.badges.lovedBy.label}</div>
                  <div className="text-sm font-black text-slate-800 leading-none">{CTACardConfig.badges.lovedBy.value}</div>
                </div>
              </div>

              <div className="absolute top-[30%] -left-4 sm:left-[5%] lg:left-[-10%] xl:left-[-15%] bg-white shadow-xl shadow-blue-900/5 rounded-2xl p-3 flex items-center gap-3 z-20 animate-[bounce_5s_infinite_reverse]">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">{CTACardConfig.badges.status.label}</div>
                  <div className="text-sm font-black text-slate-800 leading-none">{CTACardConfig.badges.status.value}</div>
                </div>
              </div>

              <div className="absolute bottom-[10%] -right-4 sm:right-[5%] lg:right-[-5%] xl:right-[-10%] bg-white shadow-xl shadow-blue-900/5 rounded-2xl rounded-bl-sm p-3 flex items-center gap-3 z-20 animate-[bounce_5s_infinite_reverse]">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className={`w-8 h-8 rounded-full border-2 border-white bg-blue-100 relative overflow-hidden`}>
                      <Image 
                         src={CTACardConfig.images[i]} 
                         alt="User" 
                         fill 
                         className="object-cover"
                         unoptimized
                      />
                    </div>
                  ))}
                </div>
                <div className="text-xs font-bold text-slate-600">
                   {CTACardConfig.badges.joined.label}<br/>{CTACardConfig.badges.joined.value}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
