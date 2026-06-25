'use client';

import React from 'react';
import { CheckCircle2, ThumbsUp, AlertCircle, Lock, Star, Unlock, X, ArrowRight } from 'lucide-react';

interface ATSScanResultsModalProps {
  isOpen: boolean;
  onClose: () => void;
  score: number;
}

export default function ATSScanResultsModal({ isOpen, onClose, score }: ATSScanResultsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-5xl relative flex flex-col my-auto border border-gray-100">
        
        {/* Header */}
        <div className="flex items-start justify-between p-4 sm:p-8 border-b border-gray-100">
          <div>
            <h2 className="text-lg sm:text-[28px] font-black text-[#101828] tracking-tight mb-1">
              ATS Scan Results
            </h2>
            <p className="text-gray-500 text-[11px] leading-snug sm:text-base pr-2 sm:pr-0">
              Review the full analysis below. Close this window to start a new upload.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={onClose}
              className="hidden sm:block px-5 py-2.5 rounded-full bg-slate-100 text-slate-700 font-bold text-sm hover:bg-slate-200 transition-colors"
            >
              Close
            </button>
            <button 
              onClick={onClose}
              className="sm:hidden shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 hover:text-slate-700 transition-colors"
            >
              <X size={16} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-8 overflow-y-auto max-h-[80vh] custom-scrollbar">
          <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 sm:gap-8 items-stretch mb-10">
            
            {/* Score Card */}
            <div className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-center shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] w-full md:w-[320px]">
               
              {/* Circular Gauge */}
              <div className="relative w-[180px] h-[180px] mb-6 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
                      <defs>
                          <linearGradient id="modalGaugeGradient" x1="0%" y1="100%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#ff7a00" />
                              <stop offset="45%" stopColor="#ecc92b" />
                              <stop offset="90%" stopColor="#10b981" />
                              <stop offset="100%" stopColor="#059669" />
                          </linearGradient>
                      </defs>
                      {/* Background track */}
                      <circle 
                          cx="60" cy="60" r="50" 
                          fill="none" 
                          stroke="#f0f2f5" 
                          strokeWidth="12" 
                      />
                      {/* Progress track */}
                      <circle 
                          cx="60" cy="60" r="50" 
                          fill="none" 
                          stroke="url(#modalGaugeGradient)" 
                          strokeWidth="12" 
                          strokeLinecap="round"
                          strokeDasharray="314.159"
                          strokeDashoffset={314.159 - (314.159 * score) / 100}
                          className="transition-all duration-1000 ease-out"
                      />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-[56px] font-extrabold text-[#000] tracking-tight leading-none mb-1 mt-2">{(score / 10).toFixed(1)}</span>
                      <span className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">ATS SCORE</span>
                  </div>
              </div>

              <div className="w-full text-center py-[6px] rounded-[6px] text-[12px] font-extrabold uppercase tracking-[0.5px] bg-emerald-50 text-emerald-700 border border-emerald-100">
                  {score >= 80 ? 'EXCELLENT' : score >= 70 ? 'GOOD' : score >= 60 ? 'AVERAGE' : 'NEEDS WORK'}
              </div>

            </div>

            {/* Summary Card */}
            <div className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">
              <h3 className="text-xl font-bold text-[#101828] mb-4 tracking-tight">Summary</h3>
              <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
                The resume demonstrates strong technical skills and relevant experience in cybersecurity and IT security operations, including a recent master&apos;s thesis project and internships. The formatting is somewhat cluttered and inconsistent, which may affect ATS parsing and recruiter readability. The resume includes many relevant keywords but could improve by adding more quantifiable impact metrics and clearer section separation. Education and certifications are well presented. Skills are comprehensive but could be better highlighted.
              </p>
            </div>

          </div>

          {/* Section Scores */}
          <div className="mb-10">
            <h3 className="text-[17px] font-black text-[#101828] tracking-tight mb-5">Section Scores</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              {[
                { label: 'Design', score: 85 },
                { label: 'Structure', score: 92 },
                { label: 'Content', score: 78 },
              ].map((item, index) => {
                const getScoreColor = (score: number) => {
                  if (score >= 80) return 'bg-[#059669]';
                  if (score >= 60) return 'bg-[#ff7a00]';
                  return 'bg-red-500';
                };
                return (
                  <div key={index} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-bold text-[#101828] text-[15px] tracking-tight">{item.label}</span>
                      <span className="text-gray-500 font-medium text-sm">{item.score}/100</span>
                    </div>
                    <div className="w-full h-2.5 bg-[#f1f5f9] rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${getScoreColor(item.score)} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${item.score}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}

            </div>
          </div>

          {/* Strengths */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#d1fae5]">
                <CheckCircle2 size={24} className="fill-[#059669] text-[#d1fae5]" />
              </div>
              <h3 className="text-xl font-bold text-[#101828] tracking-tight">Strengths</h3>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] overflow-hidden relative">
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#059669]"></div>
              <div className="p-5 pl-6 sm:p-6 sm:pl-8 flex flex-col sm:flex-row gap-4 sm:gap-5">
                <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-[#d1fae5] text-[#059669]">
                  <ThumbsUp size={18} className="fill-current" strokeWidth={2} />
                </div>
                <div>
                  <p className="text-gray-600 italic text-[14px] sm:text-[15px] leading-relaxed mb-3 font-medium">
                    &quot;Implemented a customized Security Operations Center (SOC) as part of the final project (NEXTSOC Project) with SIEM, SOAR, real-time monitoring and AI-assisted threat detection&quot;
                  </p>
                  <p className="text-[#101828] text-[14px] sm:text-[15px] leading-relaxed">
                    Clearly describes a significant project with relevant technologies (SIEM, SOAR, AI) which is good for keyword matching.
                  </p>
                </div>
              </div>
            </div>

            {/* Locked Strengths */}
            <div className="relative mt-4 overflow-hidden rounded-2xl border border-emerald-100 bg-slate-50/50 p-1">
              {/* Blurred skeleton content representing hidden strengths */}
              <div className="space-y-3 p-4 filter blur-[3px] select-none opacity-40">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-slate-200 shrink-0"></div>
                  <div className="space-y-2 w-full">
                    <div className="h-4 bg-slate-300 rounded w-1/3"></div>
                    <div className="h-3 bg-slate-200 rounded w-5/6"></div>
                  </div>
                </div>
                <div className="flex gap-4 pt-2 border-t border-slate-100">
                  <div className="w-8 h-8 rounded-full bg-slate-200 shrink-0"></div>
                  <div className="space-y-2 w-full">
                    <div className="h-4 bg-slate-300 rounded w-1/4"></div>
                    <div className="h-3 bg-slate-200 rounded w-3/4"></div>
                  </div>
                </div>
              </div>
              
              {/* Premium Unlock Glassmorphic Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-white/30 backdrop-blur-[2px] transition-all hover:bg-white/40">
                <div className="bg-white/90 border border-emerald-100 shadow-[0_12px_30px_-6px_rgba(16,185,129,0.15)] rounded-2xl py-3 px-4 sm:px-6 flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left transition-all hover:scale-[1.02] duration-300 cursor-pointer w-[90%] sm:w-auto">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0 shadow-inner">
                    <Lock size={16} className="fill-emerald-600 text-emerald-100" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-[13px] sm:text-sm leading-tight">Unlock Premium Strengths</h4>
                    <p className="text-emerald-600 font-extrabold text-[11px] sm:text-xs mt-0.5">+3 additional hidden strengths</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Weaknesses */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-red-100">
                <AlertCircle size={24} className="fill-red-500 text-red-100" />
              </div>
              <h3 className="text-xl font-bold text-[#101828] tracking-tight">Weaknesses</h3>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] overflow-hidden relative">
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-red-500"></div>
              <div className="p-5 pl-6 sm:p-6 sm:pl-8 flex flex-col sm:flex-row gap-4 sm:gap-5">
                <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-red-100 text-red-600">
                  <AlertCircle size={20} strokeWidth={2.5} />
                </div>
                <div>
                  <p className="text-gray-600 italic text-[14px] sm:text-[15px] leading-relaxed mb-3 font-medium">
                    &quot;Successfully led development of HA messaging system&quot;
                  </p>
                  <p className="text-[#101828] text-[14px] sm:text-[15px] leading-relaxed">
                    <span className="font-bold text-gray-900">Missing Quantifiable Impact:</span> This statement lacks numbers. Add specific metrics like &quot;handling 5M+ daily events with 99.99% uptime&quot; to show the scale of your work.
                  </p>
                </div>
              </div>
            </div>

            {/* Locked Weaknesses */}
            <div className="relative mt-4 overflow-hidden rounded-2xl border border-red-100 bg-slate-50/50 p-1">
              {/* Blurred skeleton content representing hidden weaknesses */}
              <div className="space-y-3 p-4 filter blur-[3px] select-none opacity-40">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-slate-200 shrink-0"></div>
                  <div className="space-y-2 w-full">
                    <div className="h-4 bg-slate-300 rounded w-1/3"></div>
                    <div className="h-3 bg-slate-200 rounded w-5/6"></div>
                  </div>
                </div>
                <div className="flex gap-4 pt-2 border-t border-slate-100">
                  <div className="w-8 h-8 rounded-full bg-slate-200 shrink-0"></div>
                  <div className="space-y-2 w-full">
                    <div className="h-4 bg-slate-300 rounded w-1/4"></div>
                    <div className="h-3 bg-slate-200 rounded w-3/4"></div>
                  </div>
                </div>
              </div>
              
              {/* Premium Unlock Glassmorphic Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-white/30 backdrop-blur-[2px] transition-all hover:bg-white/40">
                <div className="bg-white/90 border border-red-100 shadow-[0_12px_30px_-6px_rgba(239,68,68,0.15)] rounded-2xl py-3 px-4 sm:px-6 flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left transition-all hover:scale-[1.02] duration-300 cursor-pointer w-[90%] sm:w-auto">
                  <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-600 shrink-0 shadow-inner">
                    <Lock size={16} className="fill-red-600 text-red-100" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-[13px] sm:text-sm leading-tight">Unlock Critical Gaps</h4>
                    <p className="text-red-600 font-extrabold text-[11px] sm:text-xs mt-0.5">+4 crucial improvement areas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Missing Keywords */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-orange-100">
                <Star size={24} className="fill-orange-500 text-orange-100" />
              </div>
              <h3 className="text-xl font-bold text-[#101828] tracking-tight">Missing Keywords</h3>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] overflow-hidden relative">
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-orange-500"></div>
              <div className="p-5 pl-6 sm:p-6 sm:pl-8 flex flex-col sm:flex-row gap-4 sm:gap-5">
                <div>
                  <div className="inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-orange-50 text-orange-700 font-bold text-sm mb-3 border border-orange-100">
                    Agile Methodology
                  </div>
                  <p className="text-[#101828] text-[14px] sm:text-[15px] leading-relaxed">
                    This keyword appears frequently in the job description but is missing from your resume. Adding it in the context of your past experience can significantly boost your ATS match rate.
                  </p>
                </div>
              </div>
            </div>

            {/* Locked Missing Keywords */}
            <div className="relative mt-4 overflow-hidden rounded-2xl border border-orange-100 bg-slate-50/50 p-1">
              {/* Blurred skeleton content representing hidden keywords */}
              <div className="space-y-3 p-4 filter blur-[3px] select-none opacity-40">
                <div className="flex flex-wrap gap-2 mb-2">
                  <div className="h-7 bg-slate-300 rounded-full w-24"></div>
                  <div className="h-7 bg-slate-300 rounded-full w-32"></div>
                  <div className="h-7 bg-slate-300 rounded-full w-28"></div>
                </div>
                <div className="space-y-2 w-full">
                  <div className="h-3 bg-slate-200 rounded w-full"></div>
                  <div className="h-3 bg-slate-200 rounded w-5/6"></div>
                </div>
              </div>
              
              {/* Premium Unlock Glassmorphic Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-white/30 backdrop-blur-[2px] transition-all hover:bg-white/40">
                <div className="bg-white/90 border border-orange-100 shadow-[0_12px_30px_-6px_rgba(249,115,22,0.15)] rounded-2xl py-3 px-4 sm:px-6 flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left transition-all hover:scale-[1.02] duration-300 cursor-pointer w-[90%] sm:w-auto">
                  <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 shrink-0 shadow-inner">
                    <Lock size={16} className="fill-orange-600 text-orange-100" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-[13px] sm:text-sm leading-tight">Unlock Missing Keywords</h4>
                    <p className="text-orange-600 font-extrabold text-[11px] sm:text-xs mt-0.5">+5 critical matching keywords</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Unlock Full Analysis CTA */}
          <div className="mt-12 mb-6 bg-white border border-gray-100 rounded-3xl p-6 sm:p-10 shadow-[0_8px_30px_-4px_rgba(0,0,0,0.05)] overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Blurred Resume Preview */}
              <div className="relative aspect-[3/4] bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 mx-auto w-full max-w-[340px]">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 opacity-50"></div>
                <div className="absolute inset-x-8 top-10 h-6 bg-gray-300 rounded w-1/2"></div>
                <div className="absolute inset-x-8 top-20 h-3 bg-gray-300 rounded-sm w-3/4"></div>
                <div className="absolute inset-x-8 top-28 h-3 bg-gray-300 rounded-sm w-5/6"></div>
                <div className="absolute inset-x-8 top-36 h-3 bg-gray-300 rounded-sm w-2/3"></div>
                <div className="absolute inset-x-8 top-52 h-4 bg-gray-300 rounded w-1/3"></div>
                <div className="absolute inset-x-8 top-64 h-3 bg-gray-300 rounded-sm w-full"></div>
                <div className="absolute inset-x-8 top-72 h-3 bg-gray-300 rounded-sm w-4/5"></div>
                <div className="absolute inset-x-8 top-80 h-3 bg-gray-300 rounded-sm w-5/6"></div>
                <div className="absolute inset-0 backdrop-blur-[6px] bg-white/40 flex items-center justify-center">
                   <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <Lock size={32} className="text-gray-400 fill-gray-100" />
                   </div>
                </div>
              </div>
              
              {/* CTA Content */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#f3f4fa] rounded-full flex items-center justify-center mb-6">
                  <Unlock size={32} className="text-[#565985] fill-[#e2e4f0]" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-[#101828] tracking-tight mb-3">Invest in your career now</h3>
                <p className="text-gray-500 text-[15px] mb-8">Sign up to see all 11+ hidden insights</p>
                
                <ul className="space-y-4 text-left w-full max-w-sm mb-8">
                  {[
                    'Unlock Full ATS Analysis',
                    'Job Description Matching',
                    'ATS-Optimized Resume'
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-100 shrink-0">
                        <CheckCircle2 size={12} className="text-emerald-600 fill-emerald-600" />
                      </div>
                      <span className="text-gray-700 text-[15px] font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="w-full max-w-sm bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-6 rounded-xl transition-colors shadow-sm flex items-center justify-center gap-2">
                  Fix my resume
                  <ArrowRight size={20} strokeWidth={2.5} />
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
