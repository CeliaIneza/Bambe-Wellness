'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { Users, PhoneCall, Award, Globe, HeartHandshake } from 'lucide-react';

const teamMembers = [
  {
    name: "Dr. Divine Uwase, PhD",
    titleEn: "Lead Clinical Psychologist",
    titleRw: "Umushakashatsi n'Umuyobozi w'Ubuzima bwo mu Mutwe",
    qualifications: "PhD in Clinical Psychology (University of Rwanda), MSc Mental Health",
    expertise: "Anxiety, Student Wellbeing, Burnout & Trauma Recovery",
    languages: "English, Kinyarwanda, French",
    bioEn: "Dr. Divine has over 12 years of experience providing compassionate mental health care and designing stigma-reduction programs in Kigali.",
    bioRw: "Dr. Divine afite ubumenyi bw'imyaka irenga 12 mu gufasha abantu bahangana n'umuhangayiko mu Mujyi wa Kigali.",
    registration: "Registered with Rwanda Allied Health Professions Council (RAHPC #7482)",
  },
  {
    name: "Jean-Paul Mugisha, MA",
    titleEn: "Senior Mental Health Counsellor",
    titleRw: "Umujyanama Mukuru mu Ubuzima bwo mu Mutwe",
    qualifications: "MA in Counselling Psychology, BA Social Work",
    expertise: "Family Relations, Academic Stress, Young Adult Support",
    languages: "English, Kinyarwanda",
    bioEn: "Jean-Paul specializes in student mental health and helping families navigate difficult emotional transitions through compassionate dialogue.",
    bioRw: "Jean-Paul yibanda ku gufasha abanyeshuri n'imirimo yo gufasha imiryango mu bitekerezo.",
    registration: "RAHPC Registered Professional Counsellor (#8190)",
  },
  {
    name: "Aline Keza, BSc",
    titleEn: "Community Wellbeing & Outreach Coordinator",
    titleRw: "Umuhuzabikorwa w'Ubuzima bwo mu Mutwe mu Muryango",
    qualifications: "BSc Public Health, Certified Psychological First Aid Trainer",
    expertise: "Workplace Wellness Workshops, Youth Peer Support",
    languages: "English, Kinyarwanda",
    bioEn: "Aline leads Bambe Center's community awareness initiatives, workplace workshops, and university outreach programs across Rwanda.",
    bioRw: "Aline ayoboye gahunda zo kwigisha no kwita ku buzima bwo mu mutwe mu bigo n'amashuri.",
    registration: "Certified Psychological First Aid Practitioner",
  },
];

export default function TeamPage() {
  const { lang } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12">
      
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="w-14 h-14 bg-[#DDEFE8] text-[#176B67] rounded-2xl flex items-center justify-center mx-auto">
          <Users className="w-8 h-8" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold font-serif text-[#1F2933]">
          Our Care Professionals
        </h1>
        <p className="text-lg text-[#1F2933]/80 leading-relaxed">
          Bambe Center is guided by qualified Rwandan psychologists, licensed counsellors, and community wellbeing advocates.
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="bg-white rounded-3xl p-7 border border-[#E9DCCB] shadow-sm flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              
              {/* Profile Avatar Box */}
              <div className="w-20 h-20 rounded-2xl bg-[#DDEFE8] text-[#176B67] flex items-center justify-center font-bold text-2xl shadow-inner">
                {member.name.split(' ')[1]?.[0] || 'B'}
              </div>

              <div>
                <h3 className="text-xl font-bold font-serif text-[#1F2933]">
                  {member.name}
                </h3>
                <p className="text-sm font-semibold text-[#176B67]">
                  {lang === 'en' ? member.titleEn : member.titleRw}
                </p>
              </div>

              <div className="space-y-2 text-xs text-[#1F2933]/80">
                <div className="flex items-start gap-2">
                  <Award className="w-4 h-4 text-[#176B67] shrink-0 mt-0.5" />
                  <span>{member.qualifications}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Globe className="w-4 h-4 text-[#176B67] shrink-0 mt-0.5" />
                  <span>{member.languages}</span>
                </div>
              </div>

              <p className="text-sm text-[#1F2933]/70 leading-relaxed pt-2 border-t border-gray-100">
                {lang === 'en' ? member.bioEn : member.bioRw}
              </p>

            </div>

            <div className="pt-4 border-t border-gray-100 space-y-3">
              <div className="text-[11px] text-[#1F2933]/60 font-mono">
                {member.registration}
              </div>
              <Link
                href="/support/talk-to-someone"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#DDEFE8] hover:bg-[#176B67] text-[#176B67] hover:text-white py-2.5 rounded-xl text-xs font-bold transition-all"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Request Support Connection</span>
              </Link>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
