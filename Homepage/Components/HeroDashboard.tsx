'use client';

import { useState, useEffect } from 'react';
import { HeroDashboardConfigTexts, HeroDashboardHeaders } from '../../Configuration/Homepage/Config';

const contentExamples = [
  { ...HeroDashboardConfigTexts[0], job: { ...HeroDashboardConfigTexts[0].job, logo: (
        <svg viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="10.5" height="10.5" fill="#F25022"/>
            <rect x="12.5" y="0" width="10.5" height="10.5" fill="#7FBA00"/>
            <rect x="0" y="12.5" width="10.5" height="10.5" fill="#00A4EF"/>
            <rect x="12.5" y="12.5" width="10.5" height="10.5" fill="#FFB900"/>
        </svg>
      ), flag: (
        <svg className="w-[26px] h-[26px] rounded-full ml-[8px] align-middle shadow-[0_1px_3px_rgba(0,0,0,0.15)] inline-block" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
            <circle cx="9" cy="9" r="9" fill="#ffffff"/>
            <path d="M 0 7 L 18 7 L 18 11 L 0 11 Z" fill="#002f6c"/>
            <path d="M 6 0 L 10 0 L 10 18 L 6 18 Z" fill="#002f6c"/>
        </svg>
      )}
  },
  { ...HeroDashboardConfigTexts[1], job: { ...HeroDashboardConfigTexts[1].job, logo: (
        <svg viewBox="0 0 24 24" fill="none" className="w-[50px] h-[50px]" xmlns="http://www.w3.org/2000/svg">
             <rect width="24" height="24" rx="4" fill="#00609C" />
             <path d="M12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4ZM15 13L11.5 17.5L8.5 13H15ZM11.5 6.5L15 11H8.5L11.5 6.5Z" fill="white"/>
        </svg>
      ), flag: (
        <svg className="w-[26px] h-[26px] rounded-full ml-[8px] align-middle shadow-[0_1px_3px_rgba(0,0,0,0.15)] inline-block" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
            <clipPath id="norw-clip"><circle cx="9" cy="9" r="9"/></clipPath>
            <g clipPath="url(#norw-clip)">
                <rect width="18" height="18" fill="#BA0C2F"/>
                <line x1="6" y1="0" x2="6" y2="18" stroke="#FFFFFF" strokeWidth="4"/>
                <line x1="0" y1="9" x2="18" y2="9" stroke="#FFFFFF" strokeWidth="4"/>
                <line x1="6" y1="0" x2="6" y2="18" stroke="#00205B" strokeWidth="2"/>
                <line x1="0" y1="9" x2="18" y2="9" stroke="#00205B" strokeWidth="2"/>
            </g>
        </svg>
      )}
  },
  { ...HeroDashboardConfigTexts[2], job: { ...HeroDashboardConfigTexts[2].job, logo: (
        <svg viewBox="0 0 100 40" fill="none" className="w-[70px] h-[28px]" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0H100V40H0V0Z" fill="#005EB8"/>
            <path d="M8.8 30.6L20.5 10.3H26.3L27.6 30.6H22.7L21.7 15.6L11.5 30.6H8.8ZM33.5 10.3H38.5V18.1H49.1V10.3H54.1V30.6H49.1V22.4H38.5V30.6H33.5V10.3ZM62.9 26.5C62.9 26.5 64.9 28.1 68.6 28.1C72 28.1 73.1 26.5 73.1 25.4C73.1 23.3 69.8 22.7 65.5 21.6C59.9 20 58.7 16.5 58.7 14.6C58.7 11.1 62.4 8.2 68.5 8.2C72.8 8.2 76.5 9.7 78 10.9L75.6 15.1C75.6 15.1 72.8 12.8 68.7 12.8C65.6 12.8 64.2 14.3 64.2 15.4C64.2 17.3 67 17.8 70.9 18.8C77.4 20.3 78.5 24 78.5 26.2C78.5 29.8 75.1 32.8 68.5 32.8C63.4 32.8 59.8 30.6 59.2 30L62.9 26.5Z" fill="white"/>
        </svg>
      ), flag: (
        <svg className="w-[26px] h-[26px] rounded-full ml-[8px] align-middle shadow-[0_1px_3px_rgba(0,0,0,0.15)] inline-block" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
            <clipPath id="uk-clip"><circle cx="9" cy="9" r="9"/></clipPath>
            <g clipPath="url(#uk-clip)">
                <rect width="18" height="18" fill="#012169"/>
                <line x1="0" y1="0" x2="18" y2="18" stroke="#FFFFFF" strokeWidth="2.5"/>
                <line x1="0" y1="18" x2="18" y2="0" stroke="#FFFFFF" strokeWidth="2.5"/>
                <line x1="0" y1="0" x2="18" y2="18" stroke="#C8102E" strokeWidth="1"/>
                <line x1="0" y1="18" x2="18" y2="0" stroke="#C8102E" strokeWidth="1"/>
                <line x1="9" y1="0" x2="9" y2="18" stroke="#FFFFFF" strokeWidth="4"/>
                <line x1="0" y1="9" x2="18" y2="9" stroke="#FFFFFF" strokeWidth="4"/>
                <line x1="9" y1="0" x2="9" y2="18" stroke="#C8102E" strokeWidth="2.5"/>
                <line x1="0" y1="9" x2="18" y2="9" stroke="#C8102E" strokeWidth="2.5"/>
            </g>
        </svg>
      )}
  },
  { ...HeroDashboardConfigTexts[3], job: { ...HeroDashboardConfigTexts[3].job, logo: (
        <svg viewBox="0 0 24 24" fill="none" className="w-[50px] h-[50px]" xmlns="http://www.w3.org/2000/svg">
             <rect width="24" height="24" rx="4" fill="#FF6A00" />
             <path d="M12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4ZM7.5 12L12 16.5L16.5 12L12 7.5L7.5 12Z" fill="white"/>
        </svg>
      ), flag: (
        <svg className="w-[26px] h-[26px] rounded-full ml-[8px] align-middle shadow-[0_1px_3px_rgba(0,0,0,0.15)] inline-block" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
            <clipPath id="ger-clip"><circle cx="9" cy="9" r="9"/></clipPath>
            <g clipPath="url(#ger-clip)">
                <rect x="0" y="0" width="18" height="6" fill="#000000"/>
                <rect x="0" y="6" width="18" height="6" fill="#DD0000"/>
                <rect x="0" y="12" width="18" height="6" fill="#FFCC00"/>
            </g>
        </svg>
      )}
  },
  { ...HeroDashboardConfigTexts[4], job: { ...HeroDashboardConfigTexts[4].job, logo: (
        <svg viewBox="0 0 100 30" fill="none" className="w-[70px] h-[21px]" xmlns="http://www.w3.org/2000/svg">
            <path d="M60.1 19.31c-3.76 2.66-9.15 4.39-14.88 4.39-9.12 0-14.49-3.75-14.49-3.75l1.9-3.41s4.89 3.06 12.39 3.06c6.48 0 10.9-1.52 13.06-3.23l2.02 2.94" fill="#FF9900"/>
            <path d="M62.08 19.86c-1.42.06-3.32-2.18-3.32-2.18l2.94-1.39s.42 1.95 2.15 1.54l-1.77 2.03" fill="#FF9900"/>
            <path d="M28.09 13.07v1.85c-1.09-1.2-3.13-2.11-5.71-2.11-4.7 0-8.23 3.84-8.23 8.78 0 5.09 3.55 8.71 8.35 8.71 2.58 0 4.67-1 5.86-2.31l.09 1.9h5.18V13.07h-5.54zm-4.74 13.01c-2.45 0-4.32-2.01-4.32-4.94 0-2.82 2.02-4.8 4.35-4.8 2.45 0 4.29 1.95 4.29 4.86 0 2.95-1.9 4.88-4.32 4.88z" fill="#000"/>
            <path d="M49.2 13.07h-4.97v1.54c-.95-1.12-2.82-1.85-5.3-1.85-4.57 0-8.26 3.73-8.26 8.57 0 4.88 3.53 8.44 8.01 8.44 2.52 0 4.61-1.04 5.6-2.58l.12 2.42h5.15V13.07h-.35zM44.5 25.8c-2.51 0-4.48-1.93-4.48-4.7s1.84-4.66 4.38-4.66c2.42 0 4.41 2.03 4.41 4.7 0 2.82-1.9 4.66-4.31 4.66z" fill="#000"/>
        </svg>
      ), flag: (
        <svg className="w-[26px] h-[26px] rounded-full ml-[8px] align-middle shadow-[0_1px_3px_rgba(0,0,0,0.15)] inline-block" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
            <clipPath id="fra-clip"><circle cx="9" cy="9" r="9"/></clipPath>
            <g clipPath="url(#fra-clip)">
                <rect x="0" y="0" width="6" height="18" fill="#002395"/>
                <rect x="6" y="0" width="6" height="18" fill="#FFFFFF"/>
                <rect x="12" y="0" width="6" height="18" fill="#ED2939"/>
            </g>
        </svg>
      )}
  }
];

export default function HeroDashboard() {
    const [step, setStep] = useState(0);
    const [exampleIndex, setExampleIndex] = useState(0);

    const currentExample = contentExamples[exampleIndex];

    useEffect(() => {
        let isRunning = true;
        let timers: NodeJS.Timeout[] = [];
        
        const runSequence = () => {
            if (!isRunning) return;
            setStep(0);
            const times = [
                { t: 1500, s: 1 },
                { t: 1900, s: 2 },
                { t: 4400, s: 3 },
                { t: 5100, s: 4 },
                { t: 6000, s: 5 },
                { t: 10000, s: -1 } // Reset signal
            ];
            timers = times.map(({ t, s }) => setTimeout(() => {
                if (!isRunning) return;
                if (s === -1) {
                    setExampleIndex((prev) => (prev + 1) % contentExamples.length);
                    runSequence();
                } else {
                    setStep(s);
                }
            }, t));
        };

        runSequence();

        return () => {
            isRunning = false;
            timers.forEach(clearTimeout);
        };
    }, []);

    const isShowGauge = step >= 1;
    const isScannedError = step >= 1 && step < 3;
    const isProcessing = step >= 3 && step < 5;
    const isOptimizedText = step >= 5; // Content shows up at step 5
    const isComplete = step >= 5;

    const getGaugeDashOffset = () => {
        if (isComplete) return currentExample.resume.scoreOffsetAfter;
        if (isShowGauge) return currentExample.resume.scoreOffsetBefore;
        return 157;
    };

    const getGaugeRot = () => {
        if (isComplete) return currentExample.resume.scoreRotAfter;
        if (isShowGauge) return currentExample.resume.scoreRotBefore;
        return "rotate(0deg)";
    };

    const scoreValue = isComplete ? currentExample.resume.scoreAfter : currentExample.resume.scoreBefore;
    const scoreStatus = isComplete ? "Excellent" : "ATS Rejected";
    const scoreStatusBg = isComplete 
        ? "bg-emerald-50 text-emerald-700 border border-emerald-100" 
        : "bg-rose-50 text-rose-700 border border-rose-100";

    return (
        <div className="relative w-full h-full flex items-center justify-center font-sans">
            <style dangerouslySetInnerHTML={{
                __html: `
                .pulse-bar {
                    background: linear-gradient(90deg, #f0f2f5 25%, #e2e8f0 50%, #f0f2f5 75%);
                    background-size: 200% 100%;
                    animation: skeletonShimmer 1.4s infinite linear;
                }
                @keyframes highlight-green-anim {
                    from { background-size: 0% 100%; color: inherit; }
                    to { background-size: 100% 100%; color: #065f46; }
                }
                .animate-highlight-green {
                    animation: highlight-green-anim 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
                }
                @keyframes highlight-red-anim {
                    from { background-size: 0% 100%; color: inherit; border-color: transparent; }
                    to { background-size: 100% 100%; color: #991b1b; border-color: #ef4444; }
                }
                .animate-highlight-red {
                    animation: highlight-red-anim 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
                }
                @keyframes skeletonShimmer {
                    0% { background-position: -200% 0; }
                    100% { background-position: 200% 0; }
                }
                .animated-cursor {
                    animation: narrativeCursorTrack 10s infinite cubic-bezier(0.445, 0.05, 0.55, 0.95);
                }
                @keyframes narrativeCursorTrack {
                    0%   { top: 80%; left: 40%; transform: scale(1); opacity: 0; }
                    5%   { top: 80%; left: 40%; transform: scale(1); opacity: 1; }
                    14%  { top: 62%; left: 16%; transform: scale(1); }
                    15%  { top: 62%; left: 16%; transform: scale(0.85); }
                    18%  { top: 62%; left: 16%; transform: scale(1); }
                    28%  { top: 40%; left: 75%; transform: scale(1); }
                    38%  { top: 40%; left: 75%; transform: scale(1); }
                    42%  { top: 62%; left: 16%; transform: scale(1); }
                    44%  { top: 62%; left: 16%; transform: scale(0.85); }
                    47%  { top: 62%; left: 16%; transform: scale(1); }
                    60%  { top: 50%; left: 50%; transform: scale(1); }
                    80%  { top: 50%; left: 50%; transform: scale(1); opacity: 1; }
                    90%  { top: 80%; left: 40%; transform: scale(1); opacity: 0; }
                    100% { top: 80%; left: 40%; transform: scale(1); opacity: 0; }
                }
            `}} />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform scale-[0.28] min-[320px]:scale-[0.3] min-[380px]:scale-[0.35] sm:scale-[0.5] md:scale-[0.6] lg:scale-[0.45] xl:scale-[0.55] origin-center z-10 w-[960px] lg:w-[1000px]">
                <svg className="animated-cursor absolute w-[48px] h-[48px] z-[9999] pointer-events-none hidden lg:block drop-shadow-lg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.5 3V17.35L8.93 13.56L13.28 21L16.5 19.14L12.22 11.83L17.5 11.5L4.5 3Z" fill="black" stroke="white" strokeWidth="2" strokeLinejoin="round" />
                </svg>

                <div className="flex w-full items-center justify-center relative mx-auto mt-0 lg:ml-[-90px] lg:mt-[-50px]">
                    
                    {/* Left Panel */}
                    <div className="flex flex-col w-[408px] shrink-0 gap-[24px] relative justify-center mr-[-40px] z-0 transition-opacity duration-300">
                        <div className="w-full bg-white rounded-[17px] shadow-[0_10px_30px_rgba(0,0,0,0.04)] p-[34px] border border-[#e3e8ee]">
                            <div className="flex items-center mb-[29px]">
                                <div className="w-[62px] h-[62px] flex justify-center items-center mr-[17px] shrink-0 overflow-hidden rounded-[12px] bg-gray-50 border border-gray-100">
                                    {currentExample.job.logo}
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-[23px] font-bold text-[#111] m-0 leading-[1.25] transition-all duration-300">{currentExample.job.title}</h2>
                                    <p className="text-[17px] text-[#4a5568] mt-[5px] transition-all duration-300">{currentExample.job.company}</p>
                                </div>
                            </div>

                            <div className="flex items-center mb-[17px] text-[16px] text-[#4a5568]">
                                <svg className="w-[19px] h-[19px] mr-[14px] text-[#718096] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                                <span>{currentExample.job.location} 
                                    {currentExample.job.flag}
                                </span>
                            </div>

                            <div className="flex items-center mb-[17px] text-[16px] text-[#4a5568]">
                                <svg className="w-[19px] h-[19px] mr-[14px] text-[#718096] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="12" y1="1" x2="12" y2="23"></line>
                                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                                </svg>
                                <span className="transition-all duration-300">Salary: {currentExample.job.salary}</span>
                            </div>

                            <p className="text-[16px] text-[#4a5568] leading-[1.55] mt-[26px] mb-[24px] pb-[18px] border-b border-dashed border-[#e2e8f0] transition-all duration-300">{currentExample.job.desc}</p>
                            
                            <h3 className="text-[17px] font-bold text-[#111] mt-0 mb-[14px]">Key job responsibilities:</h3>
                            <ul className="m-0 p-0 list-none text-[16px] text-[#4a5568]">
                                {currentExample.job.responsibilities.map((req, i) => (
                                    <li key={i} className="mb-[12px] relative pl-[17px] leading-[1.45] before:content-['•'] before:absolute before:left-0 before:text-[#a0aec0] transition-all duration-300">{req}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right Panel (Resume) */}
                    <div className="w-[630px] h-[890px] bg-white rounded-[24px] shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-[#eef2f5] p-[48px] text-[#111] shrink-0 relative mt-[20px] overflow-hidden z-10 transition-opacity duration-300">
                        
                        {/* Gauge Score Card */}
                        <div className={`absolute top-[30px] right-[30px] w-[215px] bg-white rounded-[22px] p-[18px] shadow-[0_12px_32px_rgba(0,0,0,0.08)] border border-[#eef2f5] flex flex-col items-center z-20 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isShowGauge ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-[12px] scale-[0.9]'}`}>
                            <div className="relative w-[166px] h-[94px] flex justify-center overflow-hidden">
                                <svg className="w-[166px] h-[166px]" viewBox="0 0 120 120">
                                    <defs>
                                        <linearGradient id="gaugeGradient" x1="0%" y1="100%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#ff7a00" />
                                            <stop offset="45%" stopColor="#ecc92b" />
                                            <stop offset="90%" stopColor="#10b981" />
                                            <stop offset="100%" stopColor="#059669" />
                                        </linearGradient>
                                    </defs>
                                    <path className="fill-none stroke-[#f0f2f5] stroke-[9px]" strokeLinecap="round" d="M 10 60 A 50 50 0 0 1 110 60" />
                                    <path className="fill-none stroke-[9px] transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)]" strokeLinecap="round" strokeDasharray="157" strokeDashoffset={getGaugeDashOffset()} stroke="url(#gaugeGradient)" d="M 10 60 A 50 50 0 0 1 110 60" />
                                    <circle className="fill-white stroke-black stroke-[3px] transition-transform duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)]" cx="10" cy="60" r="5.5" style={{ transformOrigin: '60px 60px', transform: getGaugeRot() }} />
                                </svg>
                                <div className="absolute bottom-0 text-[48px] font-extrabold text-[#000] tracking-[-1.2px] leading-none transition-opacity duration-300">{scoreValue}</div>
                            </div>
                            <div className={`w-full text-center py-[7.5px] rounded-[11px] text-[14px] font-extrabold uppercase tracking-[0.5px] mt-[8px] transition-colors duration-300 ease-in-out ${scoreStatusBg}`}>{scoreStatus}</div>
                        </div>

                        <h1 className="text-[31px] font-bold text-[#000] m-0 mb-[5px] tracking-[-0.3px] transition-all duration-300">{currentExample.resume.name}</h1>
                        <p className="text-[17px] font-semibold text-[#4a5568] m-0 mb-[19px] relative inline-block transition-all duration-300">
                            {!isProcessing && !isOptimizedText && (
                                <span className={`inline bg-gradient-to-t from-[#fee2e2] to-[#fee2e2] bg-no-repeat transition-[background-size,border-color] duration-600 ease-in border-b-[1.2px] border-dashed px-[5px] pb-[2px] rounded-[2px] ${isScannedError ? 'animate-highlight-red' : 'bg-[length:0%_100%] text-[#4a5568] border-transparent'}`}>
                                    {currentExample.resume.titleBefore}
                                </span>
                            )}
                            {isProcessing && (
                                <span className="flex flex-col gap-[10px] pt-[5px]">
                                    <span className="block h-[22px] rounded-[4px] pulse-bar w-[200px]"></span>
                                </span>
                            )}
                            {isOptimizedText && (
                                <span className={`inline animate-highlight-green bg-gradient-to-t from-[#d1fae5] to-[#d1fae5] bg-no-repeat border-b-[1.2px] border-dashed px-[5px] pb-[2px] rounded-[2px] text-[#065f46] font-bold border-[#10b981]`}>
                                    {currentExample.resume.titleAfter}
                                </span>
                            )}
                        </p>
                        
                        <div className="flex gap-[12px] mb-[36px]">
                            <div className="h-[22px] bg-[#f0f2f5] rounded-[5px] w-[114px]"></div>
                            <div className="h-[22px] bg-[#f0f2f5] rounded-[5px] w-[126px]"></div>
                            <div className="h-[22px] bg-[#f0f2f5] rounded-[5px] w-[84px]"></div>
                        </div>

                        <div className="text-[16px] font-bold text-[#000] tracking-[0.5px] mt-[34px] mb-[14px] uppercase">{HeroDashboardHeaders.summary}</div>
                        <div className="relative text-[15px] leading-[1.75] text-[#222] m-0 mb-[18px]">
                            {!isProcessing && !isOptimizedText && (
                                <div className={`inline bg-gradient-to-t from-[#fee2e2] to-[#fee2e2] bg-no-repeat transition-[background-size,border-color] duration-500 ease-in-out border-b-[1.2px] border-dashed pb-[2px] ${isScannedError ? 'animate-highlight-red' : 'bg-[length:0%_100%] text-inherit border-transparent'}`}>
                                    {currentExample.resume.summaryBefore}
                                </div>
                            )}
                            {isProcessing && (
                                <div className="flex flex-col gap-[10px] pt-[5px]">
                                    <div className="h-[14px] rounded-[4px] pulse-bar w-[98%]"></div>
                                    <div className="h-[14px] rounded-[4px] pulse-bar w-[92%]"></div>
                                    <div className="h-[14px] rounded-[4px] pulse-bar w-[40%]"></div>
                                </div>
                            )}
                            {isOptimizedText && (
                                <div className="inline text-[15px] leading-[1.75] text-[#065f46]">
                                    <span className="inline animate-highlight-green bg-gradient-to-t from-[#d1fae5] to-[#d1fae5] bg-no-repeat border-b-[1.2px] border-dashed border-[#10b981] pb-[2px]">
                                        {currentExample.resume.summaryAfter}
                                    </span>
                                </div>
                            )}
                        </div>

                        <div className="text-[16px] font-bold text-[#000] tracking-[0.5px] mt-[34px] mb-[14px] uppercase">{HeroDashboardHeaders.skills}</div>
                        <div className="relative text-[15px] leading-[1.75] text-[#222] m-0 mb-[18px]">
                            {!isProcessing && !isOptimizedText && (
                                <div className={`inline bg-gradient-to-t from-[#fee2e2] to-[#fee2e2] bg-no-repeat transition-[background-size,border-color] duration-500 ease-in-out border-b-[1.2px] border-dashed pb-[2px] ${isScannedError ? 'animate-highlight-red' : 'bg-[length:0%_100%] text-inherit border-transparent'}`}>
                                    {currentExample.resume.skillsBefore}
                                </div>
                            )}
                            {isProcessing && (
                                <div className="flex flex-col gap-[10px] pt-[5px]">
                                    <div className="h-[14px] rounded-[4px] pulse-bar w-[85%]"></div>
                                </div>
                            )}
                            {isOptimizedText && (
                                <div className="inline text-[15px] leading-[1.75] text-[#065f46]">
                                    <span className="inline animate-highlight-green bg-gradient-to-t from-[#d1fae5] to-[#d1fae5] bg-no-repeat border-b-[1.2px] border-dashed border-[#10b981] pb-[2px]">
                                        {currentExample.resume.skillsAfter}
                                    </span>
                                </div>
                            )}
                        </div>

                        <div className="text-[16px] font-bold text-[#000] tracking-[0.5px] mt-[34px] mb-[14px] uppercase">{HeroDashboardHeaders.experience}</div>
                        <div className="flex justify-between items-baseline mb-[10px]">
                            <div className={`text-[16px] font-bold m-0 transition-colors duration-300 ease-in-out`}>
                                {!isProcessing && !isOptimizedText && (
                                    <div className={`inline bg-gradient-to-t from-[#fee2e2] to-[#fee2e2] bg-no-repeat transition-[background-size,border-color] duration-500 ease-in-out border-b-[1.2px] border-dashed pb-[2px] ${isScannedError ? 'animate-highlight-red' : 'bg-[length:0%_100%] text-inherit border-transparent'}`}>
                                        {currentExample.resume.companyBefore}
                                    </div>
                                )}
                                {isProcessing && (
                                    <div className="flex flex-col gap-[10px] pt-[3px] mb-[-4px]">
                                        <div className="h-[20px] rounded-[4px] pulse-bar w-[320px]"></div>
                                    </div>
                                )}
                                {isOptimizedText && (
                                    <div className="inline">
                                        <span className="inline animate-highlight-green bg-gradient-to-t from-[#d1fae5] to-[#d1fae5] bg-no-repeat text-[#065f46] border-b-[1.2px] border-dashed border-[#10b981] pb-[2px]">
                                            {currentExample.resume.companyAfter}
                                        </span>
                                    </div>
                                )}
                            </div>
                            <div className="text-[14px] font-bold text-[#000]">{currentExample.resume.date}</div>
                        </div>
                        
                        <ul className="m-0 mb-[30px] pl-[18px] list-disc marker:text-gray-400 text-[15px] text-[#222]">
                            <li className="mb-[14px]">
                                <div className="relative leading-[1.75]">
                                    {!isProcessing && !isOptimizedText && (
                                        <div className={`inline bg-gradient-to-t from-[#fee2e2] to-[#fee2e2] bg-no-repeat transition-[background-size,border-color] duration-500 ease-in-out border-b-[1.2px] border-dashed pb-[2px] ${isScannedError ? 'animate-highlight-red' : 'bg-[length:0%_100%] text-inherit border-transparent'}`}>
                                            {currentExample.resume.exp1Before}
                                        </div>
                                    )}
                                    {isProcessing && (
                                        <div className="flex flex-col gap-[10px] pt-[5px]">
                                            <div className="h-[14px] rounded-[4px] pulse-bar w-[90%]"></div>
                                        </div>
                                    )}
                                    {isOptimizedText && (
                                        <div className="inline text-[#065f46]">
                                            <span className="inline animate-highlight-green bg-gradient-to-t from-[#d1fae5] to-[#d1fae5] bg-no-repeat border-b-[1.2px] border-dashed border-[#10b981] pb-[2px]">
                                                {currentExample.resume.exp1After}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </li>
                            <li className="mb-[14px]">
                                <div className="relative leading-[1.75]">
                                    {!isProcessing && !isOptimizedText && (
                                        <div className={`inline bg-gradient-to-t from-[#fee2e2] to-[#fee2e2] bg-no-repeat transition-[background-size,border-color] duration-500 ease-in-out border-b-[1.2px] border-dashed pb-[2px] ${isScannedError ? 'animate-highlight-red' : 'bg-[length:0%_100%] text-inherit border-transparent'}`}>
                                            {currentExample.resume.exp2Before}
                                        </div>
                                    )}
                                    {isProcessing && (
                                        <div className="flex flex-col gap-[10px] pt-[5px]">
                                            <div className="h-[14px] rounded-[4px] pulse-bar w-[85%]"></div>
                                        </div>
                                    )}
                                    {isOptimizedText && (
                                        <div className="inline text-[#065f46]">
                                            <span className="inline animate-highlight-green bg-gradient-to-t from-[#d1fae5] to-[#d1fae5] bg-no-repeat border-b-[1.2px] border-dashed border-[#10b981] pb-[2px]">
                                                {currentExample.resume.exp2After}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </li>
                        </ul>

                        <div className="flex flex-col gap-[14px] mt-[24px]">
                            <div className="h-[18px] bg-[#f5f6f8] rounded-[5px] w-full"></div>
                            <div className="h-[18px] bg-[#f5f6f8] rounded-[5px] w-[45%]"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
