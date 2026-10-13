'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { SupportCard } from '@/components/SupportCard';
import { PhoneCall, Heart, BookOpen, AlertTriangle, UserCheck } from 'lucide-react';

export default function FindSupportPage() {
  const { t } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12">
      
      {/* Hero Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold font-serif text-[#1F2933]">
          Find the support that's right for you.
        </h1>
        <p className="text-lg text-[#1F2933]/80 leading-relaxed">
          You don't need to know exactly what you need. Start with what's happening in your life.
        </p>
      </div>

      {/* Options Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <SupportCard
          title="I want to talk to someone"
          description="I just need a safe, confidential space where someone will listen to me without judgment."
          href="/support/talk-to-someone"
          icon={<PhoneCall className="w-7 h-7" />}
          badge="Option A"
        />

        <SupportCard
          title="I want to understand myself"
          description="Help me make sense of the overwhelming emotions, stress, or exhaustion I am experiencing."
          href="/feelings"
          icon={<UserCheck className="w-7 h-7" />}
          badge="Option B"
        />

        <SupportCard
          title="I want to learn & reflect"
          description="Show me practical, evidence-informed guides, exercises, and strategies I can try."
          href="/resources"
          icon={<BookOpen className="w-7 h-7" />}
          badge="Option C"
        />

        <SupportCard
          title="I'm worried about someone"
          description="Help me recognize the signs of a friend, student, or family member struggling and how to start a conversation."
          href="/families"
          icon={<Heart className="w-7 h-7" />}
          badge="Option D"
        />

        <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-7 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="w-14 h-14 bg-[#C83C3C] text-white rounded-2xl flex items-center justify-center">
              <AlertTriangle className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold font-serif text-[#C83C3C]">
              I need urgent help
            </h3>
            <p className="text-sm text-red-950/80 leading-relaxed">
              If you or someone else is in immediate danger or safety risk, access 24/7 Rwanda emergency contact pathways.
            </p>
          </div>
          <Link
            href="/urgent-help"
            className="inline-block text-center bg-[#C83C3C] hover:bg-red-700 text-white font-bold py-3 px-5 rounded-xl text-sm transition-colors"
          >
            Access Urgent Crisis Help
          </Link>
        </div>

      </div>

    </div>
  );
}
