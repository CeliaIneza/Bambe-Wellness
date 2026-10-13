'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { PhoneCall, Sparkles, ShieldCheck, Heart } from 'lucide-react';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#DDEFE8]/40 via-[#FAF7F0] to-[#FAF7F0] pt-12 pb-20 md:pt-20 md:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 bg-[#DDEFE8] text-[#176B67] px-4 py-1.5 rounded-full text-xs font-semibold shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>A safe, welcoming space for mental wellbeing in Rwanda</span>
            </div>

            {/* H1 Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-[#1F2933] leading-tight tracking-tight">
              {t.hero.title}
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-[#1F2933]/80 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {t.hero.subtitle}
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/support/talk-to-someone"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#176B67] hover:bg-[#125552] text-white px-7 py-4 rounded-xl font-bold text-base shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5"
              >
                <PhoneCall className="w-5 h-5" />
                <span>{t.hero.talkCTA}</span>
              </Link>

              <Link
                href="/support"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-[#E9DCCB]/30 text-[#176B67] border-2 border-[#176B67]/30 px-7 py-4 rounded-xl font-bold text-base transition-all shadow-xs"
              >
                <span>{t.hero.exploreCTA}</span>
              </Link>
            </div>

            {/* Small Stigma-Reduction Disclaimer */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-2 text-sm font-medium text-[#176B67]">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>{t.hero.disclaimer}</span>
            </div>

          </div>

          {/* Right Visual Graphic / Warm Human Illustration Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Background Glow */}
              <div className="absolute -inset-4 bg-[#E98B7A]/20 rounded-3xl blur-xl opacity-70 transform -rotate-3"></div>
              
              {/* Card Container */}
              <div className="relative bg-white rounded-3xl p-8 border border-[#E9DCCB] shadow-xl space-y-6">
                
                {/* Visual Icon Badge */}
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-[#DDEFE8] text-[#176B67] flex items-center justify-center shadow-inner">
                    <Heart className="w-8 h-8 fill-current" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#176B67] bg-[#DDEFE8] px-3 py-1 rounded-full">
                    Rwanda Mental Wellness
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-bold font-serif text-[#1F2933]">
                    What's going on?
                  </h3>
                  <p className="text-sm text-[#1F2933]/70 leading-relaxed">
                    Instead of asking <span className="font-semibold text-[#1F2933]">"What's wrong with you?"</span>, we ask <span className="font-semibold text-[#176B67]">"What are you experiencing?"</span>
                  </p>
                </div>

                {/* Quick Check-in CTA snippet inside hero card */}
                <div className="p-4 rounded-2xl bg-[#FAF7F0] border border-[#E9DCCB]/60 space-y-2">
                  <div className="text-xs font-bold uppercase text-[#176B67]">
                    Take a moment for yourself
                  </div>
                  <p className="text-xs text-[#1F2933]/80">
                    Not sure what you're feeling? Take our 2-minute non-clinical wellness reflection.
                  </p>
                  <Link
                    href="/check-in"
                    className="inline-block text-xs font-bold text-[#176B67] underline hover:text-[#125552]"
                  >
                    Start Wellness Check-In →
                  </Link>
                </div>

                {/* Micro trust stats */}
                <div className="grid grid-cols-2 gap-3 pt-2 border-t border-gray-100 text-center">
                  <div className="bg-[#FAF7F0] p-2.5 rounded-xl">
                    <span className="block text-lg font-bold text-[#176B67]">100% Free</span>
                    <span className="text-[11px] text-[#1F2933]/70">Information & Guides</span>
                  </div>
                  <div className="bg-[#FAF7F0] p-2.5 rounded-xl">
                    <span className="block text-lg font-bold text-[#176B67]">Confidential</span>
                    <span className="text-[11px] text-[#1F2933]/70">Safe & Respectful</span>
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
