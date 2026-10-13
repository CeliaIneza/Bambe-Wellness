'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { GraduationCap, PhoneCall, CheckCircle2, ArrowRight } from 'lucide-react';

export default function StudentsPage() {
  const { t } = useLanguage();

  const studentTopics = [
    { title: "Exam Stress & Anxiety", desc: "Feeling overwhelmed before national or university examinations." },
    { title: "Academic & Family Expectations", desc: "Balancing personal goals with pressure from family expectations." },
    { title: "University Transition", desc: "Adapting to campus life, living away from home, and making new connections." },
    { title: "Career & Future Uncertainty", desc: "Navigating graduation anxiety, internship searches, and future job choices." },
    { title: "Financial Stress", desc: "Managing tuition costs, living expenses, and academic materials." },
    { title: "Student Burnout", desc: "Feeling mentally depleted after months of continuous assignments and exams." },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-16">
      
      {/* Hero */}
      <div className="bg-[#DDEFE8]/60 rounded-3xl p-8 sm:p-14 border border-[#176B67]/20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-[#176B67] text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <GraduationCap className="w-4 h-4" />
            <span>Student Wellbeing</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold font-serif text-[#1F2933]">
            You are more than your grades.
          </h1>
          <p className="text-lg text-[#1F2933]/80 leading-relaxed max-w-2xl">
            School and university life can be exciting, but assignments, exams, relationships, and uncertainty about the future can be heavy. You don't have to carry it alone.
          </p>
          <div className="pt-2">
            <Link
              href="/support/talk-to-someone"
              className="inline-flex items-center gap-2 bg-[#176B67] hover:bg-[#125552] text-white px-7 py-3.5 rounded-xl font-bold text-sm shadow-md transition-all"
            >
              <PhoneCall className="w-4 h-4" />
              <span>I'm a Student & Need Support</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Topics */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-3xl font-bold font-serif text-[#1F2933]">
            Common Challenges Student Face
          </h2>
          <p className="text-sm text-[#1F2933]/70">
            If you are experiencing any of these, know that your feelings are valid.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {studentTopics.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-[#E9DCCB] space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#DDEFE8] text-[#176B67] flex items-center justify-center font-bold">
                {idx + 1}
              </div>
              <h3 className="text-lg font-bold font-serif text-[#1F2933]">
                {item.title}
              </h3>
              <p className="text-sm text-[#1F2933]/70 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
