'use client';
import { useState, useEffect } from 'react';

export default function HeroDemo() {
  const [score, setScore] = useState("0.0");
  const [dashOffset, setDashOffset] = useState(157);
  const [dotRotation, setDotRotation] = useState(0);
  const [dotOpacity, setDotOpacity] = useState(0);

  useEffect(() => {
    let start = Date.now();
    const duration = 2000;
    
    let req: number;
    const animate = () => {
      const now = Date.now();
      const elapsed = Math.min(now - start, duration);
      const progress = elapsed / duration;
      
      const easedP = progress * (2 - progress);
      const currentScore = easedP * 9.3;
      
      setScore(currentScore.toFixed(1));
      setDashOffset(157 - (157 * 0.93 * easedP));
      setDotRotation(180 * 0.93 * easedP);
      setDotOpacity(progress > 0 ? 1 : 0);
      
      if (progress < 1) {
        req = requestAnimationFrame(animate);
      }
    };
    
    req = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(req);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center font-sans">
      <style dangerouslySetInnerHTML={{
        __html: `
        :root {
            /* Brand Colors based on EuropeCV */
            --brand-blue: #1b4efa;
            --brand-cyan: #06b6d4;
            --brand-light-blue: #e2eafc;
            --brand-navy: #0a1325;
            
            /* Themed Highlight & Pill Colors */
            --highlight-bg: #dbeafe;
            --highlight-border: #93c5fd;
            --pill-gradient: linear-gradient(135deg, #00C6FF 0%, #0072FF 100%);
            
            /* General UI */
            --text-main: #0f172a;
            --text-muted: #475569;
            --bg-card: #ffffff;
            --border-dashed: #cbd5e1;
        }

        /* Math for gauge: length of half circle path approx 220 */
        @keyframes fillGauge { 
            0% { stroke-dashoffset: 157; }
            100% { stroke-dashoffset: 10.9; } /* Matches 9.3/10 mark */
        }
        @keyframes fadeInDot { 
            0% { opacity: 0; transform: rotate(0deg); }
            100% { opacity: 1; transform: rotate(148.8deg); }
        }
        @keyframes slideInPill { 
            0% { opacity: 0; transform: translateX(30px) scale(0.95); }
            100% { opacity: 1; transform: translateX(0) scale(1); } 
        }
        @keyframes highlightAnim {
            0% { background-color: transparent; border-bottom-color: transparent; }
            100% { background-color: #dbeafe; border-bottom-color: #93c5fd; }
        }
        .hl-anim {
            border-bottom: 2px solid transparent;
            border-radius: 3px;
            padding: 2px 4px;
            transition: background-color 0.3s ease, border-bottom-color 0.3s ease;
            animation: highlightAnim 1.5s ease-out forwards;
            animation-delay: 1.5s;
        }
        `
      }} />

      <div className="absolute top-[48%] left-[46%] -translate-x-1/2 -translate-y-1/2 transform scale-[0.25] min-[320px]:scale-[0.28] min-[380px]:scale-[0.34] sm:scale-[0.48] md:scale-[0.56] lg:scale-[0.48] xl:scale-[0.58] origin-center z-10 w-[820px] h-[700px] flex justify-center items-center">
        
        <div className="relative w-full h-full bg-white rounded-[24px] shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-[#eef2f5] p-[48px] box-border text-left !overflow-visible">
            
            {/* Floating Sparkle Motif */}
            <svg className="absolute top-[30px] left-[30px] text-[#1b4efa]" viewBox="0 0 64 64" width="60" height="60">
                <path d="M32 0 C32 17.67 17.67 32 0 32 C17.67 32 32 46.33 32 64 C32 46.33 46.33 32 64 32 C46.33 32 32 17.67 32 0 Z" fill="currentColor"/>
                <path d="M12 8 C12 12.42 8.42 16 4 16 C8.42 16 12 19.58 12 24 C12 19.58 15.58 16 20 16 C15.58 16 12 12.42 12 8 Z" fill="currentColor"/>
            </svg>

            {/* Gauge Score Card from Homepage Hero Demo */}
            <div className="absolute top-[30px] right-[30px] w-[215px] bg-white rounded-[22px] p-[18px] shadow-[0_12px_32px_rgba(0,0,0,0.08)] border border-[#eef2f5] flex flex-col items-center z-20">
                <div className="relative w-[166px] h-[94px] flex justify-center overflow-hidden">
                    <svg className="w-[166px] h-[166px]" viewBox="0 0 120 120">
                        <defs>
                            <linearGradient id="gaugeGradientHero" x1="0%" y1="100%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#ff7a00" />
                                <stop offset="45%" stopColor="#ecc92b" />
                                <stop offset="90%" stopColor="#10b981" />
                                <stop offset="100%" stopColor="#059669" />
                            </linearGradient>
                        </defs>
                        <path className="fill-none stroke-[#f0f2f5] stroke-[9px]" strokeLinecap="round" d="M 10 60 A 50 50 0 0 1 110 60" />
                        {/* Arc Fill */}
                        <path className="fill-none stroke-[9px] [stroke-dasharray:157]" style={{ stroke: 'url(#gaugeGradientHero)', strokeDashoffset: dashOffset }} strokeLinecap="round" d="M 10 60 A 50 50 0 0 1 110 60" />
                        {/* Position Indicator Dot */}
                        <circle className="fill-white stroke-black stroke-[3px]" cx="10" cy="60" r="5.5" style={{ transformOrigin: '60px 60px', transform: `rotate(${dotRotation}deg)`, opacity: dotOpacity }} />
                    </svg>
                    <div className="absolute bottom-0 text-[48px] font-extrabold text-[#000] tracking-[-1.2px] leading-none">{score}</div>
                </div>
                <div className="w-full text-center py-[7.5px] rounded-[11px] text-[14px] font-extrabold uppercase tracking-[0.5px] mt-[8px] bg-emerald-50 text-emerald-700 border border-emerald-100">EXCELLENT</div>
            </div>

            {/* Core Resume Document Formatting */}
            <div className="mt-[40px]">
                <h1 className="text-[34px] font-[700] text-[#0f172a] m-0 mb-[10px] ml-[50px]">Jamie Parker</h1>
                <div className="flex gap-[12px] mb-[40px] ml-[50px]">
                    <div className="h-[18px] bg-[#f1f5f9] rounded-[6px] w-[100px]"></div>
                    <div className="h-[18px] bg-[#f1f5f9] rounded-[6px] w-[120px]"></div>
                    <div className="h-[18px] bg-[#f1f5f9] rounded-[6px] w-[80px]"></div>
                </div>

                <div className="mb-[32px]">
                    <h2 className="text-[16px] font-[800] text-[#0f172a] uppercase m-0 mb-[16px] tracking-[0.5px]">Professional Summary</h2>
                    <p className="text-[14.5px] leading-[1.7] text-[#0f172a] m-0">
                        <span className="hl-anim">Senior Software Engineer with over five years of experience specializing in backend development and distributed systems. Successfully led the development of HA messaging system with 10,000/s throughput. Eager to utilize expertise in handling large-scale applications at AI startups.</span>
                    </p>
                </div>

                <div className="mb-[32px]">
                    <h2 className="text-[16px] font-[800] text-[#0f172a] uppercase m-0 mb-[16px] tracking-[0.5px]">Skill</h2>
                    <p className="text-[14.5px] leading-[1.7] text-[#0f172a] m-0">
                        Java , Python , Go , Apache Kafka , RabbitMQ , Kubernetes , CI/CD with Jenkins, Prometheus , Node.js , <span className="hl-anim">Typescript</span> , <span className="hl-anim">Multimedia System</span> , <span className="hl-anim">HLS</span>
                    </p>
                </div>

                <div className="mb-[32px]">
                    <h2 className="text-[16px] font-[800] text-[#0f172a] uppercase m-0 mb-[16px] tracking-[0.5px]">Experience</h2>
                    <div className="flex justify-between items-baseline mb-[8px] font-[700] text-[14.5px] text-[#0f172a]">
                        <span>Distributed System Engineer, XYZ Comp</span>
                        <span>January 2020 - Present</span>
                    </div>
                    <p className="text-[14.5px] leading-[1.7] text-[#0f172a] m-0 pl-[12px] relative before:content-['•'] before:absolute before:left-0 before:font-bold">
                        Designed and implemented microservices architecture using Java and Kubernetes, which improved system scalability and facilitated the seamless integration of <span className="hl-anim">video streaming services</span>
                    </p>
                    
                    {/* Bottom Skeleton Rows */}
                    <div className="w-[90%] h-[16px] bg-[#f1f5f9] rounded-[6px] mt-[16px] mb-[8px]"></div>
                    <div className="w-[30%] h-[16px] bg-[#f1f5f9] rounded-[6px]"></div>
                </div>
            </div>

            {/* Floating Enhancement Pills (Bottom Right Overhang) */}
            <div className="absolute -bottom-[30px] -right-[40px] flex flex-col gap-[12px] items-end z-[20]">
                <div className="animate-[slideInPill_0.6s_cubic-bezier(0.2,0.8,0.2,1)_forwards] opacity-0 text-white text-[20px] font-[600] px-[28px] py-[14px] rounded-[100px] flex items-center gap-[12px] shadow-[0_10px_25px_rgba(0,114,255,0.3)] bg-[linear-gradient(135deg,#00C6FF_0%,#0072FF_100%)]" style={{ animationDelay: '0.8s' }}>
                    <svg viewBox="0 0 24 24" className="w-[24px] h-[24px] fill-white"><path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41Z"/></svg>
                    Structure well organised
                </div>
                <div className="animate-[slideInPill_0.6s_cubic-bezier(0.2,0.8,0.2,1)_forwards] opacity-0 text-white text-[20px] font-[600] px-[28px] py-[14px] rounded-[100px] flex items-center gap-[12px] shadow-[0_10px_25px_rgba(0,114,255,0.3)] bg-[linear-gradient(135deg,#00C6FF_0%,#0072FF_100%)]" style={{ animationDelay: '1.0s' }}>
                    <svg viewBox="0 0 24 24" className="w-[24px] h-[24px] fill-white"><path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41Z"/></svg>
                    ATS Keywords Optimized
                </div>
                <div className="animate-[slideInPill_0.6s_cubic-bezier(0.2,0.8,0.2,1)_forwards] opacity-0 text-white text-[20px] font-[600] px-[28px] py-[14px] rounded-[100px] flex items-center gap-[12px] shadow-[0_10px_25px_rgba(0,114,255,0.3)] bg-[linear-gradient(135deg,#00C6FF_0%,#0072FF_100%)]" style={{ animationDelay: '1.2s' }}>
                    <svg viewBox="0 0 24 24" className="w-[24px] h-[24px] fill-white"><path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41Z"/></svg>
                    Formatting ATS-Compliant
                </div>
            </div>

        </div>
      </div>
    </div>
  );
}
