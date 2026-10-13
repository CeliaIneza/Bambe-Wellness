'use client';

import React from 'react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { AlertTriangle, PhoneCall, Building2, ShieldCheck, HeartPulse } from 'lucide-react';

const emergencyHelplines = [
  { name: "Rwanda National Emergency (Police)", number: "112", desc: "For immediate safety threats, physical security, and life emergencies in Rwanda." },
  { name: "Rwanda Medical Emergency / Ambulance", number: "114", desc: "For urgent medical care, acute health crises, and ambulance dispatch." },
  { name: "Rwanda Biomedical Centre (RBC) Helpline", number: "1520", desc: "National health helpline for mental wellness guidance and medical referral." },
  { name: "Isange One Stop Centre (Trauma & GBV)", number: "3512", desc: "Toll-free 24/7 helpline for victims of violence, trauma, and psychological emergency." },
];

const medicalFacilities = [
  {
    name: "CARAES Ndera Neuropsychiatric Hospital",
    location: "Ndera, Gasabo District, Kigali",
    phone: "+250 788 307 200",
    desc: "Rwanda's specialized national psychiatric and neurological referral hospital.",
  },
  {
    name: "Kigali University Teaching Hospital (CHUK)",
    location: "Nyarugenge District, Kigali",
    phone: "+250 788 305 000",
    desc: "Major public hospital offering emergency medical and psychiatric triage.",
  },
  {
    name: "King Faisal Hospital (KFH)",
    location: "Kacyiru, Kigali",
    phone: "+250 788 307 900",
    desc: "Multi-specialty tertiary care hospital with 24/7 emergency department.",
  },
];

export default function UrgentHelpPage() {
  const { t } = useLanguage();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12">
      
      {/* Alert Header */}
      <div className="bg-[#C83C3C] text-white rounded-3xl p-8 sm:p-12 shadow-2xl space-y-4 text-center sm:text-left">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center shrink-0">
            <AlertTriangle className="w-10 h-10" />
          </div>
          <div className="space-y-1">
            <h1 className="text-3xl sm:text-4xl font-bold font-serif">
              {t.urgentHelpPage.title}
            </h1>
            <p className="text-base sm:text-lg text-white/90 leading-relaxed">
              {t.urgentHelpPage.warning}
            </p>
          </div>
        </div>
      </div>

      {/* Verification Notice */}
      <div className="flex items-center gap-2 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-semibold">
        <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0" />
        <span>{t.urgentHelpPage.disclaimer}</span>
      </div>

      {/* 24/7 Rwanda Crisis Helplines */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold font-serif text-[#1F2933] flex items-center gap-2">
          <PhoneCall className="w-6 h-6 text-[#C83C3C]" />
          <span>{t.urgentHelpPage.helplinesTitle}</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {emergencyHelplines.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border-2 border-red-100 shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-[#1F2933] text-base">{item.name}</h3>
                <span className="text-xl font-bold text-[#C83C3C] bg-red-50 px-3 py-1 rounded-xl">
                  {item.number}
                </span>
              </div>
              <p className="text-xs text-[#1F2933]/70 leading-relaxed">
                {item.desc}
              </p>
              <a
                href={`tel:${item.number.replace(/\s+/g, '')}`}
                className="inline-flex items-center justify-center gap-2 w-full bg-[#C83C3C] hover:bg-red-700 text-white py-2.5 rounded-xl font-bold text-xs transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Call {item.number} Now</span>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Key Mental Health Facilities */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold font-serif text-[#1F2933] flex items-center gap-2">
          <Building2 className="w-6 h-6 text-[#176B67]" />
          <span>{t.urgentHelpPage.facilitiesTitle}</span>
        </h2>

        <div className="space-y-4">
          {medicalFacilities.map((fac, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-[#E9DCCB] space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h3 className="font-bold text-[#1F2933] text-lg">{fac.name}</h3>
                <span className="text-xs font-bold text-[#176B67] bg-[#DDEFE8] px-3 py-1 rounded-full w-fit">
                  {fac.phone}
                </span>
              </div>
              <p className="text-xs text-[#176B67] font-semibold">{fac.location}</p>
              <p className="text-xs text-[#1F2933]/70 leading-relaxed">{fac.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
