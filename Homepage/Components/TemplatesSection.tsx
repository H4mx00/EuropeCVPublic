'use client';

import React, { useState } from 'react';
import { TemplatesSectionConfig } from '../../Configuration/Homepage/Config';

export default function TemplatesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTemplate = () => setActiveIndex((prev) => (prev + 1) % 3);
  const prevTemplate = () => setActiveIndex((prev) => (prev - 1 + 3) % 3);

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 mb-6">
      <div className="bg-[#0b1227] rounded-[40px] md:rounded-[48px] relative overflow-hidden pt-20 pb-20 md:pt-24 md:pb-32 px-6 md:px-10 lg:px-12 shadow-2xl">
        {/* Background Decorative Shape */}
        <div className="absolute top-0 right-0 w-[100%] h-[100%] overflow-hidden pointer-events-none z-0">
          <div className="absolute -top-[60%] md:-top-[80%] -right-[20%] w-[150%] md:w-[120%] h-[200%] bg-[#3b4be0] rounded-[50%] transform rotate-[15deg]"></div>
        </div>

        <div className="relative z-10 w-full">
          <div className="flex flex-col lg:flex-row justify-between lg:items-center mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="text-white text-3xl sm:text-4xl md:text-[52px] font-bold tracking-tight leading-[1.1]">
                {TemplatesSectionConfig.header.title}
              </h2>
              <p className="text-white text-[18px] md:text-[22px] font-normal mt-6">
                {TemplatesSectionConfig.header.subtitle}
              </p>
            </div>

            {/* Europass Compatible Badge */}
            <div className="shrink-0 max-w-full overflow-hidden bg-white rounded-full pl-4 pr-4 py-2 sm:pl-6 sm:pr-8 sm:py-3.5 flex items-center justify-center gap-2 sm:gap-5 shadow-[0_6px_28px_rgba(0,0,0,0.18)] border border-white/10 select-none lg:mb-1">
              {/* European Union Flag */}
              <div className="w-[40px] h-[26px] sm:w-[57px] sm:h-[38px] shrink-0 relative overflow-hidden rounded-[3px] shadow-sm">
                <svg width="100%" height="100%" viewBox="0 0 18 12" className="absolute top-0 left-0">
                  <rect width="18" height="12" fill="#003399" />
                  <g fill="#ffcc00" transform="translate(9,6)">
                    <g id="s">
                      <polygon points="0,-1.2 0.35,-0.35 1.15,-0.35 0.5,0.15 0.75,0.95 0,0.45 -0.75,0.95 -0.5,0.15 -1.15,-0.35 -0.35,-0.35" transform="translate(0,-3.4)" />
                    </g>
                    <use href="#s" transform="rotate(30)" />
                    <use href="#s" transform="rotate(60)" />
                    <use href="#s" transform="rotate(90)" />
                    <use href="#s" transform="rotate(120)" />
                    <use href="#s" transform="rotate(150)" />
                    <use href="#s" transform="rotate(180)" />
                    <use href="#s" transform="rotate(210)" />
                    <use href="#s" transform="rotate(240)" />
                    <use href="#s" transform="rotate(270)" />
                    <use href="#s" transform="rotate(300)" />
                    <use href="#s" transform="rotate(330)" />
                  </g>
                </svg>
              </div>
              
              {/* Europass Text */}
              <span className="text-[#4b5563] text-[18px] sm:text-[29px] font-semibold tracking-tight font-sans leading-none -mb-0.5">
                {TemplatesSectionConfig.europass.label}
              </span>
              
              {/* Separator Line */}
              <div className="h-5 sm:h-7 w-[1.5px] bg-gray-200"></div>
              
              {/* Compatible Text */}
              <div className="flex items-center gap-1 sm:gap-2">
                <svg viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[12px] h-[9px] sm:w-[18px] sm:h-[14px] text-[#007374] shrink-0">
                  <path d="M1.5 5.5l3.5 3.5l7.5-7.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[#007374] text-[10px] sm:text-[15px] font-black tracking-[0.16em] leading-none uppercase">
                  {TemplatesSectionConfig.europass.status}
                </span>
              </div>
            </div>
          </div>

          <div className="relative max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto">
            {/* Navigation Arrows */}
            <button 
              onClick={prevTemplate}
              className="absolute -left-4 sm:-left-12 lg:-left-20 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-colors z-20"
              aria-label="Previous template"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button 
              onClick={nextTemplate}
              className="absolute -right-4 sm:-right-12 lg:-right-20 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-colors z-20"
              aria-label="Next template"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

          <div className="w-full relative shadow-xl rounded-[20px] overflow-hidden bg-white aspect-[1/1.414] max-h-[700px] sm:max-h-none">
            {activeIndex === 0 && (
              <div className="w-full h-full p-6 md:p-8 flex flex-col relative group cursor-pointer isolate overflow-hidden">
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-white/95 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-40 flex flex-col items-center justify-center p-6 text-center rounded-[20px]">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="24" height="24" viewBox="0 0 24 24" fill="#fbbf24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>
                  ))}
                </div>
                <p className="text-sm font-bold text-[#3b4be0] uppercase tracking-widest mb-1">{TemplatesSectionConfig.templates[0].topPickText}</p>
                <h3 className="text-[28px] font-black text-[#101828] mb-3 leading-tight">{TemplatesSectionConfig.templates[0].region}</h3>
                <div className="flex gap-3 mb-6">
                  {TemplatesSectionConfig.templates[0].flags.map((flag, idx) => (
                    <img key={idx} src={`https://flagcdn.com/w40/${flag}.png`} alt={flag.toUpperCase()} className="w-8 h-8 rounded-full object-cover border border-gray-200" />
                  ))}
                </div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">{TemplatesSectionConfig.templates[0].companiesPrefix}</p>
                <div className="flex gap-4 items-center mb-6">
                  {TemplatesSectionConfig.templates[0].companies.map((company, idx) => (
                    <div key={idx} className={`w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center font-bold text-gray-700 whitespace-pre text-center`} style={{ fontSize: company.size }}>
                      {company.display}
                    </div>
                  ))}
                </div>
                <button className="mt-2 bg-[#3b4be0] text-white px-6 py-3 rounded-full font-bold text-sm tracking-wide shadow-lg hover:bg-blue-700 transition-colors w-full max-w-[200px] flex items-center justify-center group/btn">
                  {TemplatesSectionConfig.templates[0].selectText}
                  <span className="ml-2 bg-white text-[#3b4be0] rounded-full w-[20px] h-[20px] flex items-center justify-center transition-transform group-hover/btn:translate-x-1">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>
              </div>
              <div className="flex justify-between items-start mb-6">
                 <div>
                   <div className="w-24 h-6 md:w-32 md:h-8 bg-gray-800 rounded mb-3"></div>
                   <div className="w-32 h-3 md:w-48 md:h-4 bg-[#ff6b6b] rounded"></div>
                 </div>
                 <div className="w-10 h-10 md:w-12 md:h-12 bg-[#ff6b6b] rounded-[10px]"></div>
              </div>
              <div className="w-full h-16 text-[10px] md:h-24 bg-gray-100 rounded mb-6 flex flex-col justify-evenly px-4 py-2">
                <div className="w-full h-2 bg-gray-200 rounded"></div>
                <div className="w-[90%] h-2 bg-gray-200 rounded"></div>
                <div className="w-full h-2 bg-gray-200 rounded"></div>
                <div className="w-[70%] h-2 bg-gray-200 rounded"></div>
              </div>
              <div className="flex gap-4 md:gap-6 flex-1">
                 <div className="w-[60%] flex flex-col gap-4">
                   <div className="w-1/2 h-3 md:h-4 bg-[#ff6b6b] rounded"></div>
                   <div className="w-full h-12 md:h-16 bg-gray-100 rounded flex flex-col px-3 py-2 justify-evenly">
                     <div className="w-[80%] h-1.5 bg-gray-200 rounded"></div>
                     <div className="w-[90%] h-1.5 bg-gray-200 rounded"></div>
                     <div className="w-[40%] h-1.5 bg-gray-200 rounded"></div>
                   </div>
                   <div className="w-full h-12 md:h-16 bg-gray-100 rounded flex flex-col px-3 py-2 justify-evenly">
                     <div className="w-[70%] h-1.5 bg-gray-200 rounded"></div>
                     <div className="w-[80%] h-1.5 bg-gray-200 rounded"></div>
                     <div className="w-[60%] h-1.5 bg-gray-200 rounded"></div>
                   </div>
                 </div>
                 <div className="w-[40%] flex flex-col gap-4 border-l border-gray-100 pl-4 md:pl-6">
                   <div className="w-[80%] h-3 md:h-4 bg-[#101828] rounded"></div>
                   <div className="w-full h-20 md:h-32 bg-gray-100 rounded flex flex-col px-3 py-2 justify-evenly">
                     <div className="w-[90%] h-1.5 bg-gray-200 rounded"></div>
                     <div className="w-[100%] h-1.5 bg-gray-200 rounded"></div>
                     <div className="w-[60%] h-1.5 bg-gray-200 rounded"></div>
                     <div className="w-[80%] h-1.5 bg-gray-200 rounded"></div>
                     <div className="w-[70%] h-1.5 bg-gray-200 rounded"></div>
                   </div>
                 </div>
              </div>
              </div>
            )}

            {/* Template 2 Placeholder */}
            {activeIndex === 1 && (
              <div className="w-full h-full p-6 md:p-8 flex flex-col relative group cursor-pointer isolate overflow-hidden">
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-white/95 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-40 flex flex-col items-center justify-center p-6 text-center rounded-[20px]">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="24" height="24" viewBox="0 0 24 24" fill="#fbbf24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>
                  ))}
                </div>
                <p className="text-sm font-bold text-[#3b4be0] uppercase tracking-widest mb-1">{TemplatesSectionConfig.templates[1].topPickText}</p>
                <h3 className="text-[28px] font-black text-[#101828] mb-3 leading-tight">{TemplatesSectionConfig.templates[1].region}</h3>
                <div className="flex gap-3 mb-6">
                  {TemplatesSectionConfig.templates[1].flags.map((flag, idx) => (
                    <img key={idx} src={`https://flagcdn.com/w40/${flag}.png`} alt={flag.toUpperCase()} className="w-8 h-8 rounded-full object-cover border border-gray-200" />
                  ))}
                </div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">{TemplatesSectionConfig.templates[1].companiesPrefix}</p>
                <div className="flex gap-4 items-center mb-6">
                  {TemplatesSectionConfig.templates[1].companies.map((company, idx) => (
                    <div key={idx} className={`w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center font-bold text-gray-700 whitespace-pre text-center`} style={{ fontSize: company.size }}>
                      {company.display}
                    </div>
                  ))}
                </div>
                <button className="mt-2 bg-[#3b4be0] text-white px-6 py-3 rounded-full font-bold text-sm tracking-wide shadow-lg hover:bg-blue-700 transition-colors w-full max-w-[200px] flex items-center justify-center group/btn">
                  {TemplatesSectionConfig.templates[1].selectText}
                  <span className="ml-2 bg-white text-[#3b4be0] rounded-full w-[20px] h-[20px] flex items-center justify-center transition-transform group-hover/btn:translate-x-1">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>
              </div>
              <div className="text-center mb-6">
                 <div className="w-32 h-6 md:w-40 md:h-8 bg-[#3b4be0] rounded mb-3 mx-auto"></div>
                 <div className="w-40 h-3 md:w-56 md:h-4 bg-blue-100 rounded mx-auto"></div>
              </div>
              <div className="w-full h-16 md:h-20 bg-gray-100 rounded mb-6 flex flex-col px-4 py-2 justify-evenly">
                <div className="w-full h-2 bg-gray-200 rounded"></div>
                <div className="w-[90%] h-2 bg-gray-200 rounded"></div>
                <div className="w-[80%] h-2 bg-gray-200 rounded"></div>
              </div>
              <div className="flex gap-4 md:gap-6 flex-1">
                 <div className="w-1/2 flex flex-col gap-4">
                   <div className="w-[60%] h-3 md:h-4 bg-[#3b4be0] rounded"></div>
                   <div className="w-full h-16 md:h-24 bg-gray-100 rounded flex flex-col px-3 py-2 justify-evenly">
                     <div className="w-[90%] h-1.5 bg-gray-200 rounded"></div>
                     <div className="w-[70%] h-1.5 bg-gray-200 rounded"></div>
                     <div className="w-[80%] h-1.5 bg-gray-200 rounded"></div>
                   </div>
                   <div className="w-full h-12 md:h-20 bg-gray-100 rounded flex flex-col px-3 py-2 justify-evenly">
                     <div className="w-[60%] h-1.5 bg-gray-200 rounded"></div>
                     <div className="w-[50%] h-1.5 bg-gray-200 rounded"></div>
                   </div>
                 </div>
                 <div className="w-1/2 flex flex-col gap-4 border-l border-[#3b4be0] border-opacity-20 pl-4 md:pl-6">
                   <div className="w-[70%] h-3 md:h-4 bg-[#3b4be0] rounded"></div>
                   <div className="w-full h-20 md:h-32 bg-gray-100 rounded flex flex-col px-3 py-2 justify-evenly">
                     <div className="w-[80%] h-1.5 bg-gray-200 rounded"></div>
                     <div className="w-[90%] h-1.5 bg-gray-200 rounded"></div>
                     <div className="w-[70%] h-1.5 bg-gray-200 rounded"></div>
                     <div className="w-[100%] h-1.5 bg-gray-200 rounded"></div>
                   </div>
                 </div>
              </div>
              </div>
            )}

            {/* Template 3 Placeholder */}
            {activeIndex === 2 && (
              <div className="w-full h-full p-0 flex relative group cursor-pointer isolate overflow-hidden bg-white">
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-white/95 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-40 flex flex-col items-center justify-center p-6 text-center rounded-[20px]">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="24" height="24" viewBox="0 0 24 24" fill="#fbbf24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>
                  ))}
                </div>
                <p className="text-sm font-bold text-[#3b4be0] uppercase tracking-widest mb-1">{TemplatesSectionConfig.templates[2].topPickText}</p>
                <h3 className="text-[28px] font-black text-[#101828] mb-3 leading-tight">{TemplatesSectionConfig.templates[2].region}</h3>
                <div className="flex gap-3 mb-6">
                   {TemplatesSectionConfig.templates[2].flags.map((flag, idx) => (
                    <img key={idx} src={`https://flagcdn.com/w40/${flag}.png`} alt={flag.toUpperCase()} className="w-8 h-8 rounded-full object-cover border border-gray-200" />
                  ))}
                </div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">{TemplatesSectionConfig.templates[2].companiesPrefix}</p>
                <div className="flex gap-4 items-center mb-6">
                   {TemplatesSectionConfig.templates[2].companies.map((company, idx) => (
                    <div key={idx} className={`w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center font-bold text-gray-700 whitespace-pre text-center`} style={{ fontSize: company.size }}>
                      {company.display}
                    </div>
                  ))}
                </div>
                <button className="mt-2 bg-[#3b4be0] text-white px-6 py-3 rounded-full font-bold text-sm tracking-wide shadow-lg hover:bg-blue-700 transition-colors w-full max-w-[200px] flex items-center justify-center group/btn">
                  {TemplatesSectionConfig.templates[2].selectText}
                  <span className="ml-2 bg-white text-[#3b4be0] rounded-full w-[20px] h-[20px] flex items-center justify-center transition-transform group-hover/btn:translate-x-1">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>
              </div>
              <div className="w-[35%] h-full bg-[#1b2f4c] p-4 md:p-6 flex flex-col gap-4 md:gap-6">
                <div className="w-full h-16 md:h-24 bg-white/10 rounded flex flex-col justify-evenly px-3 py-2">
                  <div className="w-[80%] h-2 bg-white/20 rounded"></div>
                  <div className="w-[90%] h-2 bg-white/20 rounded"></div>
                  <div className="w-[60%] h-2 bg-white/20 rounded"></div>
                </div>
                <div className="w-[80%] h-3 md:h-4 bg-[#3dcc90] rounded"></div>
                <div className="w-full h-12 md:h-16 bg-white/10 rounded flex flex-col justify-evenly px-3 py-2">
                  <div className="w-[70%] h-2 bg-white/20 rounded"></div>
                  <div className="w-[60%] h-2 bg-white/20 rounded"></div>
                </div>
                <div className="w-[90%] h-3 md:h-4 bg-[#3dcc90] rounded"></div>
                <div className="w-full h-20 md:h-32 bg-white/10 rounded flex flex-col justify-evenly px-3 py-2">
                  <div className="w-[90%] h-2 bg-white/20 rounded"></div>
                  <div className="w-[80%] h-2 bg-white/20 rounded"></div>
                  <div className="w-[90%] h-2 bg-white/20 rounded"></div>
                  <div className="w-[60%] h-2 bg-white/20 rounded"></div>
                </div>
              </div>
              <div className="w-[65%] p-4 md:p-8 flex flex-col gap-4 md:gap-6">
                <div>
                   <div className="w-32 h-6 md:w-40 md:h-8 bg-gray-800 rounded mb-2"></div>
                   <div className="w-40 h-3 md:w-48 md:h-4 bg-[#e9a941] rounded"></div>
                </div>
                <div className="w-full h-16 md:h-24 bg-gray-100 rounded flex flex-col justify-evenly px-4 py-2">
                  <div className="w-[90%] h-2 bg-gray-200 rounded"></div>
                  <div className="w-[100%] h-2 bg-gray-200 rounded"></div>
                  <div className="w-[80%] h-2 bg-gray-200 rounded"></div>
                </div>
                <div className="w-[60%] h-4 bg-gray-800 rounded"></div>
                <div className="w-full h-12 md:h-16 bg-gray-100 rounded flex flex-col justify-evenly px-4 py-2">
                  <div className="w-[80%] h-2 bg-gray-200 rounded"></div>
                  <div className="w-[70%] h-2 bg-gray-200 rounded"></div>
                </div>
                <div className="w-full h-12 md:h-16 bg-gray-100 rounded flex flex-col justify-evenly px-4 py-2">
                  <div className="w-[90%] h-2 bg-gray-200 rounded"></div>
                  <div className="w-[80%] h-2 bg-gray-200 rounded"></div>
                </div>
              </div>
              </div>
            )}
            
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}

