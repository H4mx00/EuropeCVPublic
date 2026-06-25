'use client';

import React from 'react';
import Link from 'next/link';
import { TestimonialsConfig } from '../../Configuration/Homepage/Config';
import Image from 'next/image';

export default function Testimonials() {
  const [activeHrIndex, setActiveHrIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveHrIndex((prev) => (prev + 1) % TestimonialsConfig.hrTestimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-6 md:py-10 overflow-hidden text-[#101828]">
      {/* 1. Left-aligned Title */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left mb-10 mt-4">
        <h2 className="text-[32px] sm:text-[38px] md:text-[44px] font-black leading-tight tracking-tight text-[#101828] uppercase">
          {TestimonialsConfig.header.sectionTitle}
        </h2>
      </div>

      {/* 2. User Testimonials Marquee - Single Row */}
      <div className="w-full overflow-hidden relative mb-12 py-1">
        <style dangerouslySetInnerHTML={{
          __html: `
            @keyframes marquee-user-left {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee-left {
              display: flex;
              width: max-content;
              animation: marquee-user-left 45s linear infinite;
            }
            /* Pause marquee on hover */
            .animate-marquee-left:hover {
              animation-play-state: paused;
            }
          `
        }} />
        
        {/* Single continuous leftward moving marquee */}
        <div className="animate-marquee-left flex gap-6">
          {[...TestimonialsConfig.userTestimonials, ...TestimonialsConfig.userTestimonials].map((testimonial, idx) => (
            <div 
              key={`testimonial-${idx}`} 
              className="flex-none w-[310px] sm:w-[360px] md:w-[410px] bg-white border border-gray-200 rounded-tl-[16px] rounded-br-[16px] rounded-tr-[56px] rounded-bl-[56px] p-6 md:p-8 text-left flex flex-col justify-between hover:border-gray-300 transition-colors duration-200"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <div className="text-gray-900">
                    <svg width="24" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-[#101828]">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <div className="flex items-center space-x-0.5 text-[#f59e0b] text-[24px] sm:text-[26px] select-none">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>
                </div>
                <p className="text-gray-850 text-[14px] sm:text-[15px] md:text-[16px] font-normal leading-relaxed mb-6">
                  {testimonial.text}
                </p>
              </div>
              <div className="flex items-center gap-3.5 mt-auto border-t border-gray-50/50 pt-4">
                <Image 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  width={44} 
                  height={44} 
                  className="rounded-full bg-gray-50 object-cover border border-gray-150"
                  unoptimized
                />
                <div>
                  <h4 className="text-[14px] font-bold text-[#101828] leading-tight">{testimonial.name}</h4>
                  <p className="text-[12px] text-gray-500 font-normal leading-tight mt-0.5">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. HR Testimonials Carousel with automatic transition & NO glow/shadow background */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-2">
        <div className="relative w-full overflow-hidden bg-[#101828] rounded-[24px] md:rounded-[32px] border border-gray-800">
          <div 
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${activeHrIndex * 100}%)` }}
          >
            {TestimonialsConfig.hrTestimonials.map((hr, idx) => (
              <div 
                key={idx} 
                className="w-full shrink-0 flex-none bg-[#101828] p-8 md:p-10 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 text-left"
              >
                {/* HR Profile */}
                <div className="flex flex-col items-center text-center md:items-start md:text-left md:w-1/3 shrink-0">
                  <Image 
                    src={hr.image} 
                    alt={hr.name} 
                    width={80} 
                    height={80} 
                    className="rounded-full mb-3 border border-gray-750 object-cover"
                    unoptimized
                  />
                  <h4 className="text-white font-bold text-[16px] mb-1">{hr.name}</h4>
                  <p className="text-gray-400 text-[11px] leading-tight max-w-[180px]">{hr.role}</p>
                </div>

                {/* Divider for desktop */}
                <div className="hidden md:block w-px h-28 bg-gray-800 shrink-0 self-center"></div>

                {/* Text */}
                <div className="md:w-2/3">
                  <div className="text-white mb-3">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="text-white text-[16px] md:text-[18px] font-medium leading-relaxed">
                    {hr.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Simple dot indicators */}
        <div className="flex justify-center gap-2 mt-3 pb-2">
          {TestimonialsConfig.hrTestimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveHrIndex(idx)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${activeHrIndex === idx ? 'bg-gray-800 scale-125' : 'bg-gray-300'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
