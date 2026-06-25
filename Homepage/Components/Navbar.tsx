'use client';

import Link from 'next/link';
import { NavbarConfig } from '../../Configuration/Homepage/Config';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

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

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    
    // Check initial scroll position
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`w-full sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-transparent border-b border-gray-100/0 py-2 sm:py-3' : 'bg-white border-b border-gray-100 py-0'}`}>
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className={`mx-auto transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md border border-gray-200 shadow-[0_12px_32px_rgba(0,0,0,0.06)] rounded-full px-4 sm:px-6 h-14 sm:h-16' : 'h-16 sm:h-20 w-full border border-gray-200/0'} flex items-center justify-between`}>
            
            {/* Left: Logo */}
            <div className="flex-shrink-0 flex items-center space-x-2">
              <Link href="/" className="flex items-center space-x-2">
                <EUCircleLogo className="w-8 h-8 sm:w-10 sm:h-10 shadow-sm rounded-full" />
                <span className="font-sans font-semibold text-lg sm:text-2xl tracking-tight text-gray-900">
                  {NavbarConfig.logo.text}
                </span>
              </Link>
            </div>

            {/* Middle: Links (Desktop) */}
            <div className="hidden lg:flex items-center space-x-8">
              {NavbarConfig.links.map((link) => {
                const Icon = link.icon;
                const isActive = pathname === link.href;
                return (
                  <Link 
                    key={link.label}
                    href={link.href}
                    className={`flex items-center space-x-1.5 transition-colors font-medium text-sm ${isActive ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{link.label}</span>
                  </Link>
                );
              })}
            </div>

            {/* Right: Auth Buttons (Always visible, responsive padding) */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              <Link 
                href={NavbarConfig.auth.signIn.href}
                className="flex items-center space-x-1 sm:space-x-2 text-gray-600 hover:text-blue-600 font-medium text-xs sm:text-sm transition-colors py-1.5 sm:py-2 px-2 sm:px-3 rounded-lg hover:bg-gray-50"
              >
                <NavbarConfig.auth.signIn.icon className="hidden sm:block w-4 h-4" />
                <span>{NavbarConfig.auth.signIn.label}</span>
              </Link>
              <Link 
                href={NavbarConfig.auth.joinNow.href}
                className="flex items-center space-x-2 bg-gray-900 hover:bg-black/80 text-white font-medium text-xs sm:text-sm transition-colors py-2 sm:py-2.5 px-3 sm:px-5 rounded-full shadow-sm"
              >
                <span>{NavbarConfig.auth.joinNow.label}</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200/60 pb-[env(safe-area-inset-bottom)] z-50 shadow-[0_-8px_30px_-4px_rgba(0,0,0,0.05)]">
        <div className="flex items-center justify-around px-2 py-2">
          {NavbarConfig.links.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`flex flex-col items-center justify-center w-full py-1.5 rounded-xl transition-colors ${isActive ? 'text-blue-600' : 'text-gray-500 hover:text-gray-900'}`}
              >
                <div className={`p-1 rounded-full mb-1 transition-colors ${isActive ? 'bg-blue-50' : 'bg-transparent'}`}>
                  <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5px]' : 'stroke-2'}`} />
                </div>
                <span className={`text-[10px] leading-none ${isActive ? 'font-bold' : 'font-medium'}`}>{link.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
