'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { HeartHandshake, ShieldCheck, Target, Eye, Users, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-16">
      
      {/* Hero */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-[#DDEFE8] text-[#176B67] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
          <HeartHandshake className="w-4 h-4" />
          <span>About Bambe Center</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold font-serif text-[#1F2933]">
          We believe mental wellbeing belongs to everyone.
        </h1>
        <p className="text-lg text-[#1F2933]/80 leading-relaxed">
          Bambe Center is a modern, accessible initiative created to normalize conversations about mental health, reduce stigma, and connect people with compassionate support.
        </p>
      </div>

      {/* Story & Approach */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-3xl border border-[#E9DCCB] space-y-4">
          <h2 className="text-2xl font-bold font-serif text-[#176B67] flex items-center gap-2">
            <Target className="w-6 h-6" />
            <span>Our Mission</span>
          </h2>
          <p className="text-base text-[#1F2933]/80 leading-relaxed">
            To make mental health information, self-care tools, and support care easier to understand and access without stigma or clinical barriers.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-[#E9DCCB] space-y-4">
          <h2 className="text-2xl font-bold font-serif text-[#176B67] flex items-center gap-2">
            <Eye className="w-6 h-6" />
            <span>Our Vision</span>
          </h2>
          <p className="text-base text-[#1F2933]/80 leading-relaxed">
            A place where taking care of your mental wellbeing is normal, accessible, culturally understood, and free from judgment.
          </p>
        </div>
      </div>

      {/* Our Approach */}
      <div className="bg-[#DDEFE8]/40 rounded-3xl p-8 sm:p-12 border border-[#176B67]/20 space-y-6">
        <h2 className="text-3xl font-bold font-serif text-[#1F2933] text-center">
          Our Central Philosophy
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm text-[#1F2933]/80">
          <div className="p-4 bg-white rounded-2xl border border-[#E9DCCB]">
            <p className="font-bold text-[#176B67] mb-1">No Diagnosis Needed</p>
            <p>You don't need a medical diagnosis to deserve care and someone to listen to you.</p>
          </div>
          <div className="p-4 bg-white rounded-2xl border border-[#E9DCCB]">
            <p className="font-bold text-[#176B67] mb-1">Early Support Matters</p>
            <p>Asking for help early prevents small struggles from turning into overwhelming crises.</p>
          </div>
          <div className="p-4 bg-white rounded-2xl border border-[#E9DCCB]">
            <p className="font-bold text-[#176B67] mb-1">Everyone Deserves Respect</p>
            <p>Every person's story is valid. We listen with compassion and complete confidentiality.</p>
          </div>
          <div className="p-4 bg-white rounded-2xl border border-[#E9DCCB]">
            <p className="font-bold text-[#176B67] mb-1">Rooted in Rwanda</p>
            <p>Designed specifically for our culture, family structures, and everyday experiences.</p>
          </div>
        </div>
      </div>

      {/* Link to Team */}
      <div className="bg-white rounded-3xl p-8 border border-[#E9DCCB] flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="text-xl font-bold font-serif text-[#1F2933]">
            Meet Our Care Professionals
          </h3>
          <p className="text-sm text-[#1F2933]/70">
            Qualified counsellors, mental health educators, and wellbeing specialists.
          </p>
        </div>
        <Link
          href="/about/team"
          className="inline-flex items-center gap-2 bg-[#176B67] hover:bg-[#125552] text-white px-6 py-3 rounded-xl font-bold text-sm shadow-xs transition-colors shrink-0"
        >
          <Users className="w-4 h-4" />
          <span>View Team Profiles</span>
        </Link>
      </div>

    </div>
  );
}
