'use client';

import React from 'react';
import { ShieldAlert } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-8 text-[#1F2933]">
      
      <div className="space-y-4 border-b border-[#E9DCCB] pb-8">
        <div className="inline-flex items-center gap-2 bg-[#DDEFE8] text-[#176B67] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          <ShieldAlert className="w-4 h-4" />
          <span>Legal Disclaimer</span>
        </div>
        <h1 className="text-4xl font-bold font-serif">Terms & Disclaimer</h1>
        <p className="text-sm text-[#1F2933]/60">Last updated: October 2026</p>
      </div>

      <div className="prose prose-md max-w-none space-y-6 text-sm leading-relaxed text-[#1F2933]/85">
        <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950 space-y-2">
          <h2 className="text-lg font-bold font-serif text-amber-900">Medical & Clinical Disclaimer</h2>
          <p>
            The information, guides, resources, and self-reflection tools provided on the Bambe Center website are for educational and support purposes only. They do not constitute professional medical, psychiatric, or clinical psychological diagnosis or treatment.
          </p>
        </div>

        <h2 className="text-xl font-bold font-serif text-[#176B67]">1. Emergency Situations</h2>
        <p>
          If you are experiencing an immediate mental health crisis, suicidal thoughts, or believe you may be in physical danger, do not rely on website messages or forms. Seek urgent assistance by calling emergency helplines in Rwanda immediately (<strong>112</strong> / <strong>114</strong> / <strong>1520</strong>).
        </p>

        <h2 className="text-xl font-bold font-serif text-[#176B67]">2. Acceptance of Terms</h2>
        <p>
          By accessing and browsing the Bambe Center website, you acknowledge and agree to the terms described in this disclaimer.
        </p>
      </div>

    </div>
  );
}
