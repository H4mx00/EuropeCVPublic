'use client';

import React from 'react';
import Link from 'next/link';
import { HowItWorksConfig } from '../../Configuration/Homepage/Config';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-12 md:py-20 text-[#101828]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#f0f2f5] rounded-[40px] p-8 md:p-12 lg:p-14 xl:p-16 relative overflow-hidden">
          
          <h2 className="text-[32px] sm:text-[38px] md:text-[44px] lg:text-[48px] font-black leading-tight tracking-tight text-[#101828] mb-10 max-w-xl whitespace-pre-line">
            {HowItWorksConfig.header}
          </h2>

          {/* Cards Grid: 4 columns on desktop, 2 columns on tablet, 1 column on mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            
            {/* Card 1 */}
            <div className="bg-white rounded-[24px] p-6 lg:p-8 flex flex-col justify-between h-[210px] sm:h-[230px] border border-gray-100/50 hover:shadow-md transition-shadow duration-250">
              <div>
                <div className="w-[34px] h-[34px] rounded-full bg-[#1e80f0] text-white font-extrabold flex items-center justify-center text-[15px] mb-5 select-none shadow-sm">
                  {HowItWorksConfig.steps[0].number}
                </div>
                <p className="text-[#101828] text-[16px] lg:text-[18px] font-bold leading-snug">
                  {HowItWorksConfig.steps[0].text}
                </p>
              </div>
              
              {/* Card 1 Line Indicator */}
              <div className="relative mt-auto pt-4 flex items-center w-full">
                <div className="w-[10px] h-[10px] rounded-full bg-black shrink-0 relative z-10"></div>
                <div className="flex-grow h-[2.5px] bg-[#101828]"></div>
                <div className="w-0 h-0 border-t-[4.5px] border-t-transparent border-b-[4.5px] border-b-transparent border-l-[8.5px] border-l-black shrink-0"></div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-[24px] p-6 lg:p-8 flex flex-col justify-between h-[210px] sm:h-[230px] border border-gray-100/50 hover:shadow-md transition-shadow duration-250">
              <div>
                <div className="w-[34px] h-[34px] rounded-full bg-[#1e80f0] text-white font-extrabold flex items-center justify-center text-[15px] mb-5 select-none shadow-sm">
                  {HowItWorksConfig.steps[1].number}
                </div>
                <p className="text-[#101828] text-[16px] lg:text-[18px] font-bold leading-snug">
                  {HowItWorksConfig.steps[1].text}
                </p>
              </div>
              
              {/* Card 2 Line Indicator */}
              <div className="relative mt-auto pt-4 flex items-center w-full">
                <div className="flex-grow h-[2.5px] bg-[#101828]"></div>
                <div className="w-0 h-0 border-t-[4.5px] border-t-transparent border-b-[4.5px] border-b-transparent border-l-[8.5px] border-l-black shrink-0"></div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-[24px] p-6 lg:p-8 flex flex-col justify-between h-[210px] sm:h-[230px] border border-gray-100/50 hover:shadow-md transition-shadow duration-250">
              <div>
                <div className="w-[34px] h-[34px] rounded-full bg-[#1e80f0] text-white font-extrabold flex items-center justify-center text-[15px] mb-5 select-none shadow-sm">
                  {HowItWorksConfig.steps[2].number}
                </div>
                <p className="text-[#101828] text-[16px] lg:text-[18px] font-bold leading-snug">
                  {HowItWorksConfig.steps[2].text}
                </p>
              </div>
              
              {/* Card 3 Line Indicator */}
              <div className="relative mt-auto pt-4 flex items-center w-full">
                <div className="flex-grow h-[2.5px] bg-[#101828]"></div>
                <div className="w-0 h-0 border-t-[4.5px] border-t-transparent border-b-[4.5px] border-b-transparent border-l-[8.5px] border-l-black shrink-0"></div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-[24px] p-6 lg:p-8 flex flex-col justify-between h-[210px] sm:h-[230px] border border-gray-100/50 hover:shadow-md transition-shadow duration-250">
              <div>
                <div className="w-[34px] h-[34px] rounded-full bg-[#1e80f0] text-white font-extrabold flex items-center justify-center text-[15px] mb-5 select-none shadow-sm">
                  {HowItWorksConfig.steps[3].number}
                </div>
                <p className="text-[#101828] text-[16px] lg:text-[18px] font-bold leading-snug">
                  {HowItWorksConfig.steps[3].text}
                </p>
              </div>
              
              {/* Card 4 Line Indicator */}
              <div className="relative mt-auto pt-4 flex items-center w-full">
                <div className="flex-grow h-[2.5px] bg-[#101828]"></div>
                <div className="w-[10px] h-[10px] rounded-full bg-black shrink-0 relative z-10"></div>
              </div>
            </div>

          </div>

          {/* Centered CTA Button */}
          <div className="flex justify-center mt-6">
            <Link 
              href="#" 
              className="inline-flex items-center justify-between pl-8 pr-4 py-4 text-[16px] font-bold text-white bg-[#101828] rounded-full hover:bg-gray-850 transition-all duration-200 shadow-md hover:shadow-lg group"
            >
              <span className="mr-8 select-none">{HowItWorksConfig.ctaLabel}</span>
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
