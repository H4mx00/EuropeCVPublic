'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Upload, FileText, CheckCircle2 } from 'lucide-react';
import { ATSCheckerConfig } from '../../Configuration/ATSChecker/Config';
import HeroDemo from './HeroDemo';
import ATSScanResultsModal from './ATSScanResultsModal';

export default function Hero() {
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    if (!isUploading) setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const startUploadSimulation = () => {
    setIsDragging(false);
    setIsUploading(true);
    setUploadProgress(0);
    
    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 100);

    // Open modal after a short delay when upload reaches 100%
    setTimeout(() => {
      setIsUploading(false);
      setIsModalOpen(true);
      setUploadProgress(0);
    }, 2500);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (isUploading) return;
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      startUploadSimulation();
    }
  };

  const handleBrowseClick = () => {
    if (!isUploading) {
      fileInputRef.current?.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      startUploadSimulation();
      // Reset input so the same file can be uploaded again if needed
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  return (
    <section className="relative pt-0 pb-8 lg:pt-2 lg:pb-12 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-[30px]">
        <div className="grid lg:grid-cols-[1.1fr_1fr] grid-cols-1 gap-12 lg:gap-16 items-center w-full min-h-[500px]">
          
          {/* Left Side Content */}
          <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
            
            <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-normal tracking-tight text-gray-800 mb-6 leading-[1.1]">
              <span className="font-extrabold text-gray-900 relative inline-flex items-center flex-wrap gap-4">
                {ATSCheckerConfig.hero.title.highlight}
                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-100 text-blue-600 font-bold text-sm sm:text-base uppercase tracking-wider relative -top-1">
                  {ATSCheckerConfig.hero.badge}
                </span>
              </span>
            </h1>
            
            <p className="text-[1.125rem] text-gray-600 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              {ATSCheckerConfig.hero.subtitle}
            </p>
            
            {/* Upload Area */}
            <div className="mb-10 relative flex justify-center lg:justify-start w-full">
              <div 
                className={`w-full max-w-xl rounded-3xl border-2 p-10 transition-all duration-300 ease-in-out cursor-pointer flex flex-col items-center justify-center shadow-sm relative overflow-hidden
                  ${isUploading ? 'border-emerald-500 bg-emerald-50/30' : isDragging ? 'border-blue-500 bg-blue-50 shadow-md transform scale-[1.02] border-dashed' : 'border-gray-300 hover:border-blue-400 hover:bg-gray-100 border-dashed bg-gray-50'}`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={handleBrowseClick}
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  accept=".pdf,.doc,.docx,.txt"
                  onChange={handleFileChange}
                />
                
                {isUploading ? (
                  <div className="flex flex-col items-center justify-center w-full py-2 z-10">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6 relative">
                      {uploadProgress < 100 ? (
                        <>
                           <svg className="w-16 h-16 absolute animate-spin text-emerald-500" viewBox="0 0 100 100">
                             <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="8" strokeDasharray="200" strokeLinecap="round" />
                           </svg>
                           <FileText className="w-8 h-8 text-emerald-600" />
                        </>
                      ) : (
                        <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 tracking-tight">
                      {uploadProgress < 100 ? 'Analyzing Resume...' : 'Scan Complete!'}
                    </h3>
                    <div className="w-full max-w-[200px] h-2 bg-emerald-100 rounded-full mt-4 overflow-hidden">
                      <div 
                        className="h-full bg-emerald-500 rounded-full transition-all duration-200 ease-out" 
                        style={{ width: `${uploadProgress}%` }}
                      ></div>
                    </div>
                    <p className="mt-3 text-emerald-600 font-medium text-sm">
                      {uploadProgress}%
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 shadow-sm">
                      <Upload className="w-8 h-8 text-blue-600" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2 tracking-tight">
                      {ATSCheckerConfig.hero.uploadArea.title}
                    </h3>
                    
                    <p className="text-gray-500 text-sm mb-6 max-w-[280px] sm:max-w-md mx-auto leading-relaxed text-center">
                      {ATSCheckerConfig.hero.uploadArea.subtitle}
                    </p>
                    
                    <button 
                      type="button"
                      className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors shadow-sm relative z-10 w-full sm:w-auto"
                      onClick={(e) => {
                        e.stopPropagation(); // prevent double triggering
                        handleBrowseClick();
                      }}
                    >
                      {ATSCheckerConfig.hero.uploadArea.buttonText}
                    </button>
                    
                    <p className="mt-3 text-sm font-medium text-gray-400 uppercase tracking-wide">
                      {ATSCheckerConfig.hero.uploadArea.dragDropText}
                    </p>
                  </>
                )}
              </div>
            </div>
            
            {/* Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-x-4 sm:gap-x-6 gap-y-3 text-[12px] sm:text-[13px] font-semibold text-gray-500">
              {ATSCheckerConfig.hero.badges.map((badge, idx) => {
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

          {/* Right Side Demo */}
          <div className="relative lg:ml-0 xl:ml-8 mt-0 sm:mt-4 md:mt-12 lg:mt-0 w-full h-[260px] min-[320px]:h-[280px] min-[380px]:h-[320px] sm:h-[420px] md:h-[520px] lg:h-[600px] flex items-center justify-center">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-blue-300/15 blur-[60px] md:blur-[100px] rounded-full pointer-events-none" />
             <HeroDemo />
          </div>
        </div>

        {/* Footer Stats Banner */}
        <div className="mt-[100px] mb-0 w-full bg-gradient-to-r from-blue-50/80 to-blue-200/40 rounded-tl-[48px] rounded-bl-sm sm:rounded-bl-[16px] rounded-r-[48px] py-8 sm:py-10 px-5 sm:px-12 relative z-50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8">
            <div className="flex items-center border-l-[2px] border-[#101828] pl-4 sm:pl-6 md:pl-8 py-2">
              <div className="flex flex-col">
                <span className="text-[32px] sm:text-[40px] md:text-[48px] font-bold text-[#101828] leading-none tracking-tight mb-2">{ATSCheckerConfig.statsBanner.stats[0].value}</span>
                <span className="text-[14px] sm:text-[16px] md:text-[18px] text-[#101828] font-medium leading-snug">{ATSCheckerConfig.statsBanner.stats[0].label}</span>
              </div>
            </div>

            <div className="flex items-center border-l-[2px] border-[#101828] pl-4 sm:pl-6 md:pl-8 py-2">
              <div className="flex flex-col">
                <span className="text-[32px] sm:text-[40px] md:text-[48px] font-bold text-[#101828] leading-none tracking-tight mb-2">{ATSCheckerConfig.statsBanner.stats[1].value}</span>
                <span className="text-[14px] sm:text-[16px] md:text-[18px] text-[#101828] font-medium leading-snug">{ATSCheckerConfig.statsBanner.stats[1].label}</span>
              </div>
            </div>

            <div className="flex items-center border-l-[2px] border-[#101828] pl-4 sm:pl-6 md:pl-8 py-2">
              <div className="flex flex-col">
                <span className="text-[32px] sm:text-[40px] md:text-[48px] font-bold text-[#101828] leading-none tracking-tight mb-2">{ATSCheckerConfig.statsBanner.stats[2].value}</span>
                <span className="text-[14px] sm:text-[16px] md:text-[18px] text-[#101828] font-medium leading-snug">{ATSCheckerConfig.statsBanner.stats[2].label}</span>
              </div>
            </div>
          </div>

          {/* Logos Marquee */}
          <div className="mt-14 pt-10 border-t border-blue-200/50 flex flex-col items-center">
            <p className="text-[#101828] font-bold text-[18px] md:text-[20px] mb-8 text-center tracking-tight">{ATSCheckerConfig.statsBanner.logos.title}</p>
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
                  width: 120px;
                  opacity: 0.5;
                  filter: grayscale(100%);
                  transition: all 0.3s ease;
                }
                @media (min-width: 480px) {
                  .banner-marquee-logo {
                    width: 150px;
                  }
                }
                @media (min-width: 640px) {
                  .banner-marquee-logo {
                    width: 250px;
                  }
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
                    <span className="font-bold text-xl sm:text-2xl tracking-tighter text-slate-800">{ATSCheckerConfig.statsBanner.logos.names[0]}</span>
                  </div>
                  <div className="banner-marquee-logo">
                    <span className="font-extrabold text-xl sm:text-2xl tracking-widest text-slate-800">{ATSCheckerConfig.statsBanner.logos.names[1]}</span>
                  </div>
                  <div className="banner-marquee-logo">
                    <span className="font-serif text-xl sm:text-2xl italic text-slate-800">{ATSCheckerConfig.statsBanner.logos.names[2]}</span>
                  </div>
                  <div className="banner-marquee-logo">
                    <span className="font-mono text-xl sm:text-2xl uppercase text-slate-800">{ATSCheckerConfig.statsBanner.logos.names[3]}</span>
                  </div>
                  <div className="banner-marquee-logo">
                    <span className="font-sans text-xl sm:text-2xl font-black text-slate-800">{ATSCheckerConfig.statsBanner.logos.names[4]}</span>
                  </div>
                </div>
                {/* Set 2 (Duplicate for smooth scrolling) */}
                <div className="flex">
                  <div className="banner-marquee-logo">
                    <span className="font-bold text-xl sm:text-2xl tracking-tighter text-slate-800">{ATSCheckerConfig.statsBanner.logos.names[0]}</span>
                  </div>
                  <div className="banner-marquee-logo">
                    <span className="font-extrabold text-xl sm:text-2xl tracking-widest text-slate-800">{ATSCheckerConfig.statsBanner.logos.names[1]}</span>
                  </div>
                  <div className="banner-marquee-logo">
                    <span className="font-serif text-xl sm:text-2xl italic text-slate-800">{ATSCheckerConfig.statsBanner.logos.names[2]}</span>
                  </div>
                  <div className="banner-marquee-logo">
                    <span className="font-mono text-xl sm:text-2xl uppercase text-slate-800">{ATSCheckerConfig.statsBanner.logos.names[3]}</span>
                  </div>
                  <div className="banner-marquee-logo">
                    <span className="font-sans text-xl sm:text-2xl font-black text-slate-800">{ATSCheckerConfig.statsBanner.logos.names[4]}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ATSScanResultsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} score={93} />
    </section>
  );
}
