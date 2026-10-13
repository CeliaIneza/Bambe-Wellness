'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { Heart, Users, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';

export default function FamiliesPage() {
  const { t } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-16">
      
      {/* Hero */}
      <div className="bg-[#FAF7F0] rounded-3xl p-8 sm:p-14 border-2 border-[#E9DCCB] space-y-4 text-center max-w-4xl mx-auto">
        <div className="w-14 h-14 bg-[#176B67] text-white rounded-2xl flex items-center justify-center mx-auto shadow-md">
          <Heart className="w-8 h-8 fill-current" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold font-serif text-[#1F2933]">
          Supporting someone starts with listening.
        </h1>
        <p className="text-lg text-[#1F2933]/80 leading-relaxed max-w-2xl mx-auto">
          Sometimes the person who needs support isn't you. Learn how to recognize when a friend, child, or family member may be struggling and how to start a conversation with love and zero judgment.
        </p>
      </div>

      {/* Signs to look for */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        <div className="bg-white p-8 rounded-3xl border border-[#E9DCCB] space-y-6">
          <h2 className="text-2xl font-bold font-serif text-[#1F2933]">
            What signs should I look for?
          </h2>
          <div className="space-y-3 text-sm text-[#1F2933]/80">
            <div className="p-3 rounded-xl bg-[#FAF7F0] flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#176B67] shrink-0 mt-0.5" />
              <span>Withdrawing from family dinners, gatherings, or social activities</span>
            </div>
            <div className="p-3 rounded-xl bg-[#FAF7F0] flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#176B67] shrink-0 mt-0.5" />
              <span>Noticeable changes in sleep patterns or constant fatigue</span>
            </div>
            <div className="p-3 rounded-xl bg-[#FAF7F0] flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#176B67] shrink-0 mt-0.5" />
              <span>Unusual irritability, sudden emotional outbursts, or quietness</span>
            </div>
            <div className="p-3 rounded-xl bg-[#FAF7F0] flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#176B67] shrink-0 mt-0.5" />
              <span>Expressing feelings of being a burden or having no energy</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-[#E9DCCB] space-y-6">
          <h2 className="text-2xl font-bold font-serif text-[#1F2933]">
            How to start the conversation?
          </h2>
          <div className="space-y-3 text-sm text-[#1F2933]/80">
            <div className="p-4 rounded-xl bg-[#DDEFE8]/40 border border-[#176B67]/20 space-y-1">
              <p className="font-bold text-[#176B67]">What to say:</p>
              <p>"I've noticed you seem a bit quiet lately. Is there anything on your mind you'd like to talk about? I'm here to listen."</p>
            </div>
            <div className="p-4 rounded-xl bg-red-50 border border-red-200 space-y-1 text-red-950">
              <p className="font-bold text-red-700">What to avoid saying:</p>
              <p>"You have nothing to be sad about," or "Just pray harder and get over it." Avoid dismissing their emotions.</p>
            </div>
          </div>
        </div>

      </div>

      {/* CTA */}
      <div className="bg-[#176B67] text-white rounded-3xl p-8 sm:p-12 text-center space-y-4">
        <h3 className="text-3xl font-bold font-serif">
          Need guidance on helping a loved one?
        </h3>
        <p className="text-base text-white/90 max-w-xl mx-auto">
          Our team can help you understand how best to support someone in your family who is experiencing emotional strain.
        </p>
        <Link
          href="/support"
          className="inline-flex items-center gap-2 bg-[#FAF7F0] text-[#176B67] hover:bg-white px-7 py-3.5 rounded-xl font-bold text-sm shadow-md transition-all"
        >
          <span>Find Family Resources</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

    </div>
  );
}
