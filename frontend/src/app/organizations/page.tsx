'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { Building2, CheckCircle2, ArrowRight, ShieldCheck, Mail } from 'lucide-react';

export default function OrganizationsPage() {
  const { t } = useLanguage();

  const services = [
    { title: "Mental Wellness Workshops", desc: "Interactive awareness sessions on managing workplace stress, emotional resilience, and work-life harmony." },
    { title: "Burnout Awareness & Prevention", desc: "Equipping team leaders and HR departments with tools to detect and prevent burnout early." },
    { title: "Employee Wellbeing Support", desc: "Confidential support pathways for employees experiencing personal or professional difficulties." },
    { title: "School & University Programs", desc: "Customized workshops for student bodies, faculty members, and student counselors." },
    { title: "Psychological First Aid Training", desc: "Training key organizational members to offer empathetic peer support during stressful crises." },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-16">
      
      {/* Hero */}
      <div className="bg-[#DDEFE8]/60 rounded-3xl p-8 sm:p-14 border border-[#176B67]/20 text-center space-y-4 max-w-4xl mx-auto">
        <div className="w-14 h-14 bg-[#176B67] text-white rounded-2xl flex items-center justify-center mx-auto shadow-md">
          <Building2 className="w-8 h-8" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold font-serif text-[#1F2933]">
          Healthy people build healthier organizations.
        </h1>
        <p className="text-lg text-[#1F2933]/80 leading-relaxed max-w-2xl mx-auto">
          Bambe Center collaborates with companies, universities, schools, and non-profits across Rwanda to foster supportive, mentally healthy environments.
        </p>
      </div>

      {/* Services Grid */}
      <div className="space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h2 className="text-3xl font-bold font-serif text-[#1F2933]">
            Workplace & Institutional Offerings
          </h2>
          <p className="text-sm text-[#1F2933]/70">
            Tailored programs built for Rwandan organizational contexts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((srv, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-[#E9DCCB] space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#DDEFE8] text-[#176B67] flex items-center justify-center font-bold">
                {idx + 1}
              </div>
              <h3 className="text-lg font-bold font-serif text-[#1F2933]">
                {srv.title}
              </h3>
              <p className="text-sm text-[#1F2933]/70 leading-relaxed">
                {srv.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Partner CTA */}
      <div className="bg-white rounded-3xl p-8 sm:p-12 border-2 border-[#176B67]/20 text-center space-y-4 shadow-xl">
        <h3 className="text-3xl font-bold font-serif text-[#1F2933]">
          Interested in partnering with Bambe Center?
        </h3>
        <p className="text-base text-[#1F2933]/80 max-w-xl mx-auto">
          Contact our team to discuss customized wellness workshops or institutional support for your team in Rwanda.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-[#176B67] hover:bg-[#125552] text-white px-8 py-4 rounded-xl font-bold text-base shadow-md transition-all"
        >
          <Mail className="w-5 h-5" />
          <span>Partner With Us</span>
        </Link>
      </div>

    </div>
  );
}
