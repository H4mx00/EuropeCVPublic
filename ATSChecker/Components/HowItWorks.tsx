'use client';

import React from 'react';
import Link from 'next/link';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-12 md:py-20 text-[#101828]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#f0f2f5] rounded-[40px] p-8 md:p-12 lg:p-14 xl:p-16 relative overflow-hidden">
          
          <h2 className="text-[32px] sm:text-[38px] md:text-[44px] lg:text-[48px] font-black leading-tight tracking-tight text-[#101828] mb-10 max-w-xl whitespace-pre-line">
            How ATS Checker Works
          </h2>

          {/* Cards Grid: 3 columns on desktop, 1 column on mobile */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            
            {/* Step 1 */}
            <div className="bg-white rounded-[24px] p-8 flex flex-col items-center text-center border border-gray-100/50 hover:shadow-md transition-shadow duration-250">
              <div className="w-full aspect-[4/3] bg-gray-50 rounded-xl mb-6 relative overflow-hidden flex items-center justify-center border border-gray-100">
                {/* Upload Animation */}
                <style dangerouslySetInnerHTML={{__html: `
                  @keyframes uploadCursor {
                    0%, 15% { transform: translate(calc(-50% + 40px), calc(-50% + 40px)); opacity: 0; }
                    25% { transform: translate(calc(-50% + 40px), calc(-50% + 40px)); opacity: 1; }
                    40%, 60% { transform: translate(-50%, -50%); opacity: 1; }
                    70%, 100% { transform: translate(-50%, -50%); opacity: 0; }
                  }
                  @keyframes uploadFileSequence {
                    0%, 5% { transform: translate(calc(-50% + 40px), calc(-50% + 40px)) scale(1); opacity: 0; }
                    8.33% { transform: translate(calc(-50% + 40px), calc(-50% + 40px)) scale(1); opacity: 1; }
                    13.33%, 20% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
                    21.66% { transform: translate(-50%, -50%) scale(0.8); opacity: 1; }
                    23.33%, 100% { transform: translate(-50%, -50%) scale(0.5); opacity: 0; }
                  }
                  @keyframes uploadZone {
                    0%, 40% { border-color: #cbd5e1; background-color: transparent; }
                    45%, 65% { border-color: #3b82f6; background-color: #eff6ff; }
                    70%, 100% { border-color: #cbd5e1; background-color: transparent; }
                  }
                `}} />
                
                {/* Upload Zone */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120px] h-[90px] border-2 border-dashed rounded-lg animate-[uploadZone_4s_infinite_ease-in-out] flex flex-col items-center justify-center z-10">
                  <svg className="w-8 h-8 text-blue-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                </div>

                {/* PDF File */}
                <div className="absolute top-1/2 left-1/2 w-[44px] h-[56px] bg-white border border-red-200 rounded shadow-sm flex flex-col items-center animate-[uploadFileSequence_12s_infinite_ease-in-out] z-20 overflow-hidden" style={{ transformOrigin: 'center', opacity: 0 }}>
                  <div className="flex-1 w-full p-1.5 flex flex-col gap-1">
                    <div className="w-full h-1 bg-gray-200 rounded"></div>
                    <div className="w-3/4 h-1 bg-gray-200 rounded"></div>
                    <div className="w-full h-1 bg-gray-200 rounded"></div>
                    <div className="w-1/2 h-1 bg-gray-200 rounded"></div>
                  </div>
                  <div className="w-full bg-red-500 text-white text-[8px] font-bold py-[1px] text-center">PDF</div>
                </div>

                {/* DOCX File */}
                <div className="absolute top-1/2 left-1/2 w-[44px] h-[56px] bg-white border border-blue-200 rounded shadow-sm flex flex-col items-center animate-[uploadFileSequence_12s_infinite_ease-in-out] z-20 overflow-hidden" style={{ transformOrigin: 'center', animationDelay: '4s', opacity: 0 }}>
                  <div className="flex-1 w-full p-1.5 flex flex-col gap-1">
                    <div className="w-full h-1 bg-gray-200 rounded"></div>
                    <div className="w-3/4 h-1 bg-gray-200 rounded"></div>
                    <div className="w-full h-1 bg-gray-200 rounded"></div>
                    <div className="w-1/2 h-1 bg-gray-200 rounded"></div>
                  </div>
                  <div className="w-full bg-blue-600 text-white text-[8px] font-bold py-[1px] text-center">DOCX</div>
                </div>

                {/* TXT File */}
                <div className="absolute top-1/2 left-1/2 w-[44px] h-[56px] bg-white border border-gray-300 rounded shadow-sm flex flex-col items-center animate-[uploadFileSequence_12s_infinite_ease-in-out] z-20 overflow-hidden" style={{ transformOrigin: 'center', animationDelay: '8s', opacity: 0 }}>
                  <div className="flex-1 w-full p-1.5 flex flex-col gap-1">
                    <div className="w-full h-1 bg-gray-200 rounded"></div>
                    <div className="w-3/4 h-1 bg-gray-200 rounded"></div>
                    <div className="w-full h-1 bg-gray-200 rounded"></div>
                    <div className="w-1/2 h-1 bg-gray-200 rounded"></div>
                  </div>
                  <div className="w-full bg-gray-600 text-white text-[8px] font-bold py-[1px] text-center">TXT</div>
                </div>

                {/* Cursor */}
                <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 animate-[uploadCursor_4s_infinite_ease-in-out] z-30 drop-shadow-md" viewBox="0 0 24 24" fill="none">
                    <path d="M4.5 3V17.35L8.93 13.56L13.28 21L16.5 19.14L12.22 11.83L17.5 11.5L4.5 3Z" fill="black" stroke="white" strokeWidth="2" strokeLinejoin="round" />
                </svg>

              </div>
              <div className="w-[34px] h-[34px] rounded-full bg-[#1e80f0] text-white font-extrabold flex items-center justify-center text-[15px] mb-4 shadow-sm">1</div>
              <h3 className="text-[#101828] text-[20px] font-bold mb-2">Upload your resume</h3>
              <p className="text-gray-500 text-[15px] leading-relaxed">Securely upload your resume in PDF or DOCX format. Your data is private and never shared.</p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-[24px] p-8 flex flex-col items-center text-center border border-gray-100/50 hover:shadow-md transition-shadow duration-250">
              <div className="w-full aspect-[4/3] bg-gray-50 rounded-xl mb-6 relative overflow-hidden flex items-center justify-center border border-gray-100">
                {/* ATS Scoring Animation */}
                <style dangerouslySetInnerHTML={{__html: `
                  @keyframes gaugeFillMini { 
                    0%, 15% { stroke-dashoffset: 157; }
                    50%, 80% { stroke-dashoffset: 10.9; }
                    100% { stroke-dashoffset: 157; } 
                  }
                  @keyframes dotRotMini {
                    0%, 15% { transform: rotate(0deg); }
                    50%, 80% { transform: rotate(167.4deg); }
                    100% { transform: rotate(0deg); }
                  }
                  @keyframes dotOpacityMini {
                    0%, 14% { opacity: 0; }
                    15%, 80% { opacity: 1; }
                    81%, 100% { opacity: 0; }
                  }
                  @keyframes excellentFade {
                    0%, 45% { opacity: 0; transform: translateY(4px); }
                    50%, 80% { opacity: 1; transform: translateY(0); }
                    85%, 100% { opacity: 0; transform: translateY(4px); }
                  }
                `}} />
                
                <div className="w-[120px] flex flex-col items-center">
                  <div className="relative w-full h-[70px] flex justify-center overflow-hidden">
                      <svg className="w-[120px] h-[120px]" viewBox="0 0 120 120">
                          <defs>
                              <linearGradient id="gaugeGradientMini" x1="0%" y1="100%" x2="100%" y2="100%">
                                  <stop offset="0%" stopColor="#ff7a00" />
                                  <stop offset="45%" stopColor="#ecc92b" />
                                  <stop offset="90%" stopColor="#10b981" />
                                  <stop offset="100%" stopColor="#059669" />
                              </linearGradient>
                          </defs>
                          <path className="fill-none stroke-[#f0f2f5] stroke-[9px]" strokeLinecap="round" d="M 10 60 A 50 50 0 0 1 110 60" />
                          <path className="fill-none stroke-[9px] [stroke-dasharray:157] animate-[gaugeFillMini_4s_infinite_ease-in-out]" style={{ stroke: 'url(#gaugeGradientMini)' }} strokeLinecap="round" d="M 10 60 A 50 50 0 0 1 110 60" />
                          <circle className="fill-white stroke-black stroke-[3px]" cx="10" cy="60" r="5.5" style={{ transformOrigin: '60px 60px', animation: 'dotRotMini 4s infinite ease-in-out, dotOpacityMini 4s infinite linear' }} />
                      </svg>
                      <div className="absolute bottom-0 text-[32px] font-extrabold text-[#000] tracking-tight leading-none">9.3</div>
                  </div>
                  <div className="w-full text-center py-[4px] rounded-[6px] text-[10px] font-extrabold uppercase tracking-[0.5px] mt-[8px] bg-emerald-50 text-emerald-700 border border-emerald-100 opacity-0 animate-[excellentFade_4s_infinite_ease-in-out]">EXCELLENT</div>
                </div>

              </div>
              <div className="w-[34px] h-[34px] rounded-full bg-[#1e80f0] text-white font-extrabold flex items-center justify-center text-[15px] mb-4 shadow-sm">2</div>
              <h3 className="text-[#101828] text-[20px] font-bold mb-2">Get ATS scoring</h3>
              <p className="text-gray-500 text-[15px] leading-relaxed">Our AI scans your resume against thousands of rules to calculate your ATS compatibility score.</p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-[24px] p-8 flex flex-col items-center text-center border border-gray-100/50 hover:shadow-md transition-shadow duration-250">
              <div className="w-full aspect-[4/3] bg-gray-50 rounded-xl mb-6 relative overflow-hidden flex flex-col items-center justify-center border border-gray-100 p-4">
                 
                 <style dangerouslySetInnerHTML={{__html: `
                    @keyframes textSwapReal {
                        0%, 35% { opacity: 0; }
                        45%, 80% { opacity: 1; }
                        90%, 100% { opacity: 0; }
                    }
                    @keyframes textSwapPlaceholder {
                        0%, 35% { opacity: 1; }
                        45%, 80% { opacity: 0; }
                        90%, 100% { opacity: 1; }
                    }
                    @keyframes hlPulse {
                        0%, 35% { background-color: transparent; border-bottom-color: transparent; }
                        45%, 80% { background-color: #dbeafe; border-bottom-color: #93c5fd; }
                        90%, 100% { background-color: transparent; border-bottom-color: transparent; }
                    }
                    @keyframes slidePillMini {
                        0%, 35% { opacity: 0; transform: translateY(10px) scale(0.9); }
                        45%, 80% { opacity: 1; transform: translateY(0) scale(1); }
                        90%, 100% { opacity: 0; transform: translateY(-10px) scale(0.9); }
                    }
                    @keyframes aiShimmer {
                        0% { background-position: -200% 0; }
                        100% { background-position: 200% 0; }
                    }
                 `}} />

                 <div className="w-full text-left bg-white p-3 rounded-lg shadow-sm border border-gray-100 mb-4 relative z-10 text-[8px] sm:text-[9px] leading-[1.6] text-gray-800">
                     <p className="font-bold text-[9px] sm:text-[10px] mb-1.5 uppercase tracking-wide text-gray-900">Professional Summary</p>
                     <p>Senior Software Engineer with 5+ years of experience. 
                        <span className="relative inline-block mx-0.5 align-bottom">
                           <span className="absolute inset-y-[2px] inset-x-0 rounded-[4px] bg-[linear-gradient(90deg,#f8fafc,40%,#f1f5f9,60%,#f8fafc)] bg-[length:200%_100%] border border-gray-100 flex items-center justify-center overflow-hidden" style={{ animation: 'textSwapPlaceholder 4s infinite, aiShimmer 2s infinite linear' }}>
                              <span className="flex gap-1 opacity-60">
                                <span className="w-1 h-1 rounded-full bg-blue-400 animate-bounce" style={{animationDelay: '0ms'}}></span>
                                <span className="w-1 h-1 rounded-full bg-blue-400 animate-bounce" style={{animationDelay: '150ms'}}></span>
                                <span className="w-1 h-1 rounded-full bg-blue-400 animate-bounce" style={{animationDelay: '300ms'}}></span>
                              </span>
                           </span>
                           <span className="relative inline-block px-0.5 rounded-[2px] border-b-[1.5px] border-transparent animate-[hlPulse_4s_infinite]">
                              <span className="inline-block animate-[textSwapReal_4s_infinite] opacity-0 transition-opacity">Successfully led development of HA messaging system</span>
                           </span>
                        </span>
                        at AI startups.
                     </p>
                 </div>

                 <div className="absolute bottom-6 right-4 z-20 animate-[slidePillMini_4s_infinite] bg-[linear-gradient(135deg,#00C6FF_0%,#0072FF_100%)] text-white text-[9px] sm:text-[10px] font-bold px-2.5 sm:px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg whitespace-nowrap">
                     <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-white"><path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41Z"/></svg>
                     Quantified Impact Added
                 </div>
              </div>
              <div className="w-[34px] h-[34px] rounded-full bg-[#1e80f0] text-white font-extrabold flex items-center justify-center text-[15px] mb-4 shadow-sm">3</div>
              <h3 className="text-[#101828] text-[20px] font-bold mb-2">Improve your resume</h3>
              <p className="text-gray-500 text-[15px] leading-relaxed">Receive actionable AI insights and keyword suggestions to optimize your resume instantly.</p>
            </div>

          </div>

          {/* Centered CTA Button */}
          <div className="flex justify-center mt-6">
            <Link 
              href="/get-started" 
              className="inline-flex items-center justify-between pl-8 pr-4 py-4 text-[16px] font-bold text-white bg-[#101828] rounded-full hover:bg-gray-850 transition-all duration-200 shadow-md hover:shadow-lg group"
            >
              <span className="mr-8 select-none">Improve my resume now</span>
              <span className="bg-white text-[#101828] rounded-full w-[26px] h-[26px] flex items-center justify-center transition-transform group-hover:translate-x-1 shrink-0">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
