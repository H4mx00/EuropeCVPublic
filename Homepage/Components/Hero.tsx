'use client';

import { HeroConfig, StatsBannerConfig } from '../../Configuration/Homepage/Config';
import Link from 'next/link';
import HeroDashboard from './HeroDashboard';

export default function Hero() {
  return (
    <section className="relative pt-0 pb-8 lg:pt-2 lg:pb-12 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-[30px]">
        <div className="grid lg:grid-cols-[1.1fr_1fr] grid-cols-1 gap-12 lg:gap-16 items-center w-full min-h-[500px]">
          
          {/* Left Side Content */}
          <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-normal tracking-tight text-gray-800 mb-6 leading-[1.1]">
              {HeroConfig.title.prefix}{' '}
              <span className="font-extrabold text-gray-900 block mt-2 relative inline-block">
                {HeroConfig.title.highlight}
              </span>
            </h1>
            
            <p className="text-[1.125rem] text-gray-600 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              {HeroConfig.subtitle}
            </p>
            
            <div className="mb-10 relative flex justify-center lg:justify-start">
              <Link 
                href={HeroConfig.cta.href}
                className="inline-flex items-center justify-center px-10 py-5 text-[17px] font-bold text-white bg-blue-500 rounded-full hover:bg-blue-600 transition-colors w-full sm:w-auto shadow-sm relative z-10"
              >
                {HeroConfig.cta.label}
              </Link>
              
              {/* Decorative elements or spacer could go here if needed later */}
            </div>
            
            {/* Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3 text-[13px] font-semibold text-gray-500">
              {HeroConfig.badges.map((badge, idx) => {
                const Icon = badge.icon;
                return (
                  <div key={idx} className="flex items-center space-x-1.5">
                    <Icon className={`w-5 h-5 ${(badge as any).color || 'text-gray-400'}`} />
                    <span>{badge.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side Mockup */}
          <div className="relative lg:ml-0 xl:ml-8 mt-0 sm:mt-4 md:mt-12 lg:mt-0 w-full h-[260px] min-[320px]:h-[280px] min-[380px]:h-[320px] sm:h-[420px] md:h-[520px] lg:h-[600px] flex items-center justify-center">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-blue-300/15 blur-[60px] md:blur-[100px] rounded-full pointer-events-none" />
             <HeroDashboard />
          </div>
        </div>

        {/* Footer Stats Banner */}
        <div className="mt-[100px] mb-0 w-full bg-gradient-to-r from-blue-50/80 to-blue-200/40 rounded-tl-[48px] rounded-bl-sm sm:rounded-bl-[16px] rounded-r-[48px] py-10 px-8 sm:px-12 relative z-50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            <div className="flex items-center border-l-[2px] border-[#101828] pl-6 md:pl-8 py-2">
              <div className="flex flex-col">
                <span className="text-[40px] md:text-[48px] font-bold text-[#101828] leading-none tracking-tight mb-2">{StatsBannerConfig.stats[0].value}</span>
                <span className="text-[16px] md:text-[18px] text-[#101828] font-medium leading-snug">{StatsBannerConfig.stats[0].label}</span>
              </div>
            </div>

            <div className="flex items-center border-l-[2px] border-[#101828] pl-6 md:pl-8 py-2">
              <div className="flex flex-col">
                <span className="text-[40px] md:text-[48px] font-bold text-[#101828] leading-none tracking-tight mb-2">{StatsBannerConfig.stats[1].value}</span>
                <span className="text-[16px] md:text-[18px] text-[#101828] font-medium leading-snug">{StatsBannerConfig.stats[1].label}</span>
              </div>
            </div>

            <div className="flex items-center border-l-[2px] border-[#101828] pl-6 md:pl-8 py-2">
              <div className="flex flex-col">
                <span className="text-[40px] md:text-[48px] font-bold text-[#101828] leading-none tracking-tight mb-2">{StatsBannerConfig.stats[2].value}</span>
                <span className="text-[16px] md:text-[18px] text-[#101828] font-medium leading-snug">{StatsBannerConfig.stats[2].label}</span>
              </div>
            </div>
          </div>

          {/* Logos Marquee */}
          <div className="mt-14 pt-10 border-t border-blue-200/50 flex flex-col items-center">
            <p className="text-[#101828] font-bold text-[18px] md:text-[20px] mb-8 text-center tracking-tight">{StatsBannerConfig.logos.title}</p>
            <div className="w-full relative overflow-hidden flex items-center">
              <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes bannerMarquee {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }
                .banner-marquee-content {
                  display: flex;
                  width: max-content;
                  animation: bannerMarquee 25s linear infinite;
                }
                .banner-marquee-logo {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  width: 250px;
                  opacity: 0.5;
                  filter: grayscale(100%);
                  transition: all 0.3s ease;
                }
                .banner-marquee-logo:hover {
                  opacity: 0.8;
                  filter: grayscale(0%);
                }
                `
              }} />
              
              <div className="banner-marquee-content">
                {/* Set 1 */}
                <div className="flex">
                  <div className="banner-marquee-logo">
                    <span className="font-bold text-2xl tracking-tighter text-slate-800">{StatsBannerConfig.logos.names[0]}</span>
                  </div>
                  <div className="banner-marquee-logo">
                    <span className="font-extrabold text-2xl tracking-widest text-slate-800">{StatsBannerConfig.logos.names[1]}</span>
                  </div>
                  <div className="banner-marquee-logo">
                    <span className="font-serif text-2xl italic text-slate-800">{StatsBannerConfig.logos.names[2]}</span>
                  </div>
                  <div className="banner-marquee-logo">
                    <span className="font-mono text-2xl uppercase text-slate-800">{StatsBannerConfig.logos.names[3]}</span>
                  </div>
                  <div className="banner-marquee-logo">
                    <span className="font-sans text-2xl font-black text-slate-800">{StatsBannerConfig.logos.names[4]}</span>
                  </div>
                </div>
                {/* Set 2 (Duplicate for smooth scrolling) */}
                <div className="flex">
                  <div className="banner-marquee-logo">
                    <span className="font-bold text-2xl tracking-tighter text-slate-800">{StatsBannerConfig.logos.names[0]}</span>
                  </div>
                  <div className="banner-marquee-logo">
                    <span className="font-extrabold text-2xl tracking-widest text-slate-800">{StatsBannerConfig.logos.names[1]}</span>
                  </div>
                  <div className="banner-marquee-logo">
                    <span className="font-serif text-2xl italic text-slate-800">{StatsBannerConfig.logos.names[2]}</span>
                  </div>
                  <div className="banner-marquee-logo">
                    <span className="font-mono text-2xl uppercase text-slate-800">{StatsBannerConfig.logos.names[3]}</span>
                  </div>
                  <div className="banner-marquee-logo">
                    <span className="font-sans text-2xl font-black text-slate-800">{StatsBannerConfig.logos.names[4]}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
