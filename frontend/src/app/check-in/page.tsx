'use client';

import React from 'react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { CheckInQuiz } from '@/components/CheckInQuiz';
import { Sparkles, ShieldCheck } from 'lucide-react';

export default function CheckInPage() {
  const { t } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12">
      
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-[#DDEFE8] text-[#176B67] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-4 h-4" />
          <span>Self-Reflection & Guidance</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold font-serif text-[#1F2933]">
          {t.checkIn.heroTitle}
        </h1>
        <p className="text-lg text-[#1F2933]/80 leading-relaxed">
          {t.checkIn.heroSubtitle}
        </p>
      </div>

      {/* Quiz */}
      <CheckInQuiz />

      {/* Footer Trust Note */}
      <div className="max-w-xl mx-auto text-center space-y-2 text-xs text-[#1F2933]/60">
        <div className="flex items-center justify-center gap-1.5 font-bold text-[#176B67]">
          <ShieldCheck className="w-4 h-4" />
          <span>Your Privacy is Protected</span>
        </div>
        <p>
          Bambe Center does not store or share your individual quiz responses without your permission.
        </p>
      </div>

    </div>
  );
}
