import React from 'react';
import Link from 'next/link';
import { Linkedin, Instagram, Facebook } from 'lucide-react';
import { FooterConfig } from '../../Configuration/Homepage/Config';

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const EUCircleLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="50" fill="#003399" />
    <g transform="translate(50,50)">
      {Array.from({length: 12}).map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180;
        const x = Number((Math.sin(angle) * 33).toFixed(4));
        const y = Number((-Math.cos(angle) * 33).toFixed(4));
        return (
          <g key={i} transform={`translate(${x},${y})`}>
            <path d="M0,-6.5 L1.4,2.2 L-5.5,-2.9 L5.5,-2.9 L-1.4,2.2 Z" fill="#FFCC00"/>
          </g>
        );
      })}
    </g>
  </svg>
);

const MadeInEUBadge = () => (
  <div className="flex items-center space-x-1.5 shrink-0">
    <div className="bg-[#003399] rounded-l w-[28px] h-[28px] flex items-center justify-center relative shadow-sm">
      <svg viewBox="0 0 100 100" className="w-[18px] h-[18px]">
        <g transform="translate(50,50)">
          {Array.from({length: 12}).map((_, i) => {
            const angle = (i * 30 * Math.PI) / 180;
            const x = Math.sin(angle) * 33;
            const y = -Math.cos(angle) * 33;
            return (
              <g key={i} transform={`translate(${x},${y})`}>
                <path d="M0,-6.5 L1.4,2.2 L-5.5,-2.9 L5.5,-2.9 L-1.4,2.2 Z" fill="#FFCC00"/>
              </g>
            );
          })}
        </g>
      </svg>
    </div>
    <div className="flex flex-col justify-center">
      <span className="text-[7px] font-bold tracking-[0.14em] text-white leading-none mb-0.5 mt-0.5">{FooterConfig.badges.madeIn.label1}</span>
      <span className="text-[14px] font-bold text-white leading-none tracking-tight">{FooterConfig.badges.madeIn.label2}</span>
    </div>
  </div>
);

const TrustpilotBadge = () => (
  <div className="flex flex-col items-start shrink-0">
    <div className="flex items-center gap-1 mb-0.5">
      <svg viewBox="0 0 512 512" className="w-[12px] h-[12px] text-[#00b67a] fill-current">
        <path d="M256 0l79.4 160.8 177.2 25.8-128.2 125 30.2 176.5L256 405.3 97.4 488.1l30.2-176.5L-.6 186.6l177.2-25.8L256 0z" />
      </svg>
      <span className="text-white font-semibold text-[11px] tracking-tight">{FooterConfig.badges.trustpilot.label}</span>
    </div>
    <div className="flex gap-[1px]">
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="bg-[#00b67a] w-[14px] h-[14px] flex items-center justify-center p-[2.5px] rounded-[1px] relative overflow-hidden">
          <svg viewBox="0 0 512 512" className="w-full h-full text-white fill-current relative z-10">
             <path d="M256 0l79.4 160.8 177.2 25.8-128.2 125 30.2 176.5L256 405.3 97.4 488.1l30.2-176.5L-.6 186.6l177.2-25.8L256 0z" />
          </svg>
        </div>
      ))}
    </div>
    <div className="text-[8px] text-gray-300 mt-0.5 whitespace-nowrap">
      <span className="font-semibold text-white">{FooterConfig.badges.trustpilot.score}</span> <span className="text-gray-500 mx-0.5">|</span> {FooterConfig.badges.trustpilot.reviews}
    </div>
  </div>
);

const SecureSSLBadge = () => (
  <div className="flex items-center shrink-0 pt-0.5">
    <div className="relative flex items-center justify-center w-[24px] h-[24px] mr-1.5">
      <svg className="w-full h-full" viewBox="0 0 50 60">
        <defs>
          <linearGradient id="lockGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#4ade80" />
            <stop offset="100%" stopColor="#22c55e" />
          </linearGradient>
        </defs>
        <path d="M 16 26 C 16 8, 34 8, 34 26" fill="none" stroke="#9ca3af" strokeWidth="6" strokeLinecap="round" />
        <rect x="5" y="26" width="40" height="28" rx="4" fill="url(#lockGrad)" />
        <path d="M 16 38 L 23 45 L 34 31" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
    <div className="flex flex-col justify-center">
      <span className="text-[10px] font-black tracking-widest text-white leading-none mb-0.5 mt-0.5">{FooterConfig.badges.secure.label1}</span>
      <span className="text-[6.5px] font-bold text-[#9ca3af] tracking-wider leading-none">{FooterConfig.badges.secure.label2}</span>
    </div>
  </div>
);

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 pt-16 pb-8 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-8">
          
          {/* Left: Logo, Brand, Socials, Copyright */}
          <div className="col-span-1 md:col-span-12 lg:col-span-5 flex flex-col items-center md:items-start pr-0 md:pr-4">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <EUCircleLogo className="w-12 h-12 shadow-sm rounded-full" />
              <span className="font-sans font-semibold text-2xl tracking-tight text-white">
                {FooterConfig.brand}
              </span>
            </Link>
            
            <div className="flex space-x-5 mb-8">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="TikTok">
                <TikTokIcon className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="w-6 h-6" />
              </Link>
            </div>
            
            <div className="text-sm text-gray-500 mb-6 text-center md:text-left">
              <p>{FooterConfig.copyright}</p>
            </div>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-y-4 gap-x-3 sm:gap-4 mt-2">
              <MadeInEUBadge />
              <div className="hidden sm:block w-[1px] h-6 bg-gray-800 shrink-0 self-center"></div>
              <TrustpilotBadge />
              <div className="hidden sm:block w-[1px] h-6 bg-gray-800 shrink-0 self-center"></div>
              <SecureSSLBadge />
            </div>
          </div>

          {FooterConfig.links.map((section, idx) => (
            <div key={idx} className={`col-span-1 md:col-span-4 lg:col-span-2 ${idx === 0 ? 'lg:col-start-7' : ''}`}>
              <h3 className="font-semibold text-white tracking-wider mb-6">{section.title}</h3>
              <ul className="space-y-4">
                {section.items.map((item, itemIdx) => (
                  <li key={itemIdx}><Link href={item.href} className="hover:text-blue-400 transition-colors">{item.label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
          
        </div>
        
      </div>
    </footer>
  );
}
