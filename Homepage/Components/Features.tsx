import Link from 'next/link';
import { FeaturesConfig } from '../../Configuration/Homepage/Config';

export default function Features() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 mb-6">
      <div className="bg-[#f8f9fc] rounded-3xl sm:rounded-[48px] p-6 sm:p-10 md:p-16 lg:p-24 shadow-sm border border-gray-50/50">
        <h2 className="text-3xl sm:text-4xl md:text-[44px] font-bold text-[#101828] leading-[1.1] max-w-[320px] uppercase mb-12 sm:mb-20 tracking-tighter">
          {FeaturesConfig.header.title}
        </h2>

        <div className="flex flex-col gap-16 sm:gap-24 lg:gap-32">
          {/* Feature 1 */}
          <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
              <h3 className="text-2xl sm:text-[28px] md:text-[32px] font-bold text-[#101828] mb-3 sm:mb-4 leading-tight tracking-tight">
                {FeaturesConfig.features[0].title}
              </h3>
              <p className="text-[17px] text-[#475467] mb-8 leading-relaxed font-medium">
                {FeaturesConfig.features[0].description}
              </p>
              <Link href="#" className="inline-flex flex-row items-center justify-center px-6 py-3.5 text-[15px] font-bold text-white bg-[#101828] rounded-full hover:bg-gray-800 transition-colors shadow-md group">
                {FeaturesConfig.features[0].cta}
                <span className="ml-3 bg-white text-[#101828] rounded-full w-[22px] h-[22px] flex items-center justify-center transition-transform group-hover:translate-x-1">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            </div>
            <div className="w-full lg:w-1/2 h-[320px] md:h-[420px] bg-white rounded-[24px] border border-gray-200/60 shadow-lg flex items-center justify-center">
              <span className="text-gray-400 font-medium text-lg border border-dashed border-gray-300 p-8 rounded-xl tracking-wide">
                {FeaturesConfig.features[0].demoText}
              </span>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col-reverse lg:flex-row items-center gap-8 sm:gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2 h-[320px] md:h-[420px] bg-white rounded-[24px] border border-gray-200/60 shadow-lg flex items-center justify-center">
              <span className="text-gray-400 font-medium text-lg border border-dashed border-gray-300 p-8 rounded-xl tracking-wide">
                {FeaturesConfig.features[1].demoText}
              </span>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
              <h3 className="text-2xl sm:text-[28px] md:text-[32px] font-bold text-[#101828] mb-3 sm:mb-4 leading-tight tracking-tight">
                {FeaturesConfig.features[1].title}
              </h3>
              <p className="text-[17px] text-[#475467] mb-8 leading-relaxed font-medium">
                {FeaturesConfig.features[1].description}
              </p>
              <Link href="#" className="inline-flex flex-row items-center justify-center px-6 py-3.5 text-[15px] font-bold text-white bg-[#101828] rounded-full hover:bg-gray-800 transition-colors shadow-md group">
                {FeaturesConfig.features[1].cta}
                <span className="ml-3 bg-white text-[#101828] rounded-full w-[22px] h-[22px] flex items-center justify-center transition-transform group-hover:translate-x-1">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
              <h3 className="text-2xl sm:text-[28px] md:text-[32px] font-bold text-[#101828] mb-3 sm:mb-4 leading-tight tracking-tight">
                {FeaturesConfig.features[2].title}
              </h3>
              <p className="text-[17px] text-[#475467] mb-8 leading-relaxed font-medium">
                {FeaturesConfig.features[2].description}
              </p>
              <Link href="#" className="inline-flex flex-row items-center justify-center px-6 py-3.5 text-[15px] font-bold text-white bg-[#101828] rounded-full hover:bg-gray-800 transition-colors shadow-md group">
                {FeaturesConfig.features[2].cta}
                <span className="ml-3 bg-white text-[#101828] rounded-full w-[22px] h-[22px] flex items-center justify-center transition-transform group-hover:translate-x-1">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            </div>
            <div className="w-full lg:w-1/2 h-[320px] md:h-[420px] bg-white rounded-[24px] border border-gray-200/60 shadow-lg flex items-center justify-center">
              <span className="text-gray-400 font-medium text-lg border border-dashed border-gray-300 p-8 rounded-xl tracking-wide">
                {FeaturesConfig.features[2].demoText}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
