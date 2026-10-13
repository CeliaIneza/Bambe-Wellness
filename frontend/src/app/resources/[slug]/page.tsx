'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { ArrowLeft, Clock, BookOpen, PhoneCall, CheckCircle2, Share2 } from 'lucide-react';

export default function ArticlePage() {
  const params = useParams();
  const slug = params?.slug as string;

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-10">
      
      {/* Back Link */}
      <Link
        href="/resources"
        className="inline-flex items-center gap-2 text-sm font-bold text-[#176B67] hover:underline"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Resources</span>
      </Link>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#176B67] bg-[#DDEFE8] px-3.5 py-1 rounded-full">
            Anxiety & Wellbeing
          </span>
          <div className="flex items-center gap-1 text-xs text-[#1F2933]/60 font-medium">
            <Clock className="w-3.5 h-3.5" />
            <span>5 min read</span>
          </div>
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold font-serif text-[#1F2933] leading-tight">
          How to deal with constant overthinking
        </h1>

        <p className="text-lg text-[#1F2933]/70">
          Practical, evidence-informed grounding strategies to quiet a racing mind and regain daily peace.
        </p>
      </div>

      {/* Featured Header Illustration Box */}
      <div className="bg-[#DDEFE8]/60 rounded-3xl p-8 sm:p-12 border border-[#176B67]/20 flex items-center justify-center text-center">
        <div className="space-y-2 max-w-md">
          <div className="w-14 h-14 bg-[#176B67] text-white rounded-2xl flex items-center justify-center mx-auto shadow-md">
            <BookOpen className="w-8 h-8" />
          </div>
          <p className="text-sm font-semibold text-[#176B67]">
            Bambe Center Mental Wellness Guides
          </p>
          <p className="text-xs text-[#1F2933]/60">
            Reviewed by Rwandan Mental Health Professionals
          </p>
        </div>
      </div>

      {/* Body Content */}
      <div className="prose prose-lg max-w-none text-[#1F2933]/90 space-y-8 leading-relaxed font-sans">
        
        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#1F2933]">
            Introduction
          </h2>
          <p>
            Have you ever found yourself lying in bed at night, replaying a conversation from three years ago, or worrying about a future event that hasn't even happened? If so, you are experiencing overthinking.
          </p>
          <p>
            Overthinking is an extremely common human experience. While our brains are naturally designed to protect us by analyzing potential problems, constant rumination can leave us feeling emotionally exhausted, anxious, and detached from the present moment.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#1F2933]">
            What is overthinking?
          </h2>
          <p>
            Overthinking typically manifests in two primary patterns:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Rumination:</strong> Dwelling repeatedly on the past ("Why did I say that?", "What if I had done things differently?").</li>
            <li><strong>Catastrophizing:</strong> Predicting worst-case future outcomes ("What if I fail my exam?", "What if everyone turns against me?").</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#1F2933]">
            Why does it happen?
          </h2>
          <p>
            In moments of stress, academic pressure, relationship uncertainty, or major life changes, the brain tries to create a sense of control. When we feel uncertain, our mind mistakenly assumes that thinking harder will solve the emotional discomfort.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#1F2933]">
            What can you try?
          </h2>
          
          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-white border border-[#E9DCCB] space-y-1">
              <h3 className="font-bold text-[#176B67] text-lg">1. Practice 5-4-3-2-1 Sensory Grounding</h3>
              <p className="text-sm">Name 5 things you can see around you, 4 things you can physically touch, 3 things you hear, 2 things you smell, and 1 deep breath. This pulls your brain out of future worries and back into physical reality.</p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#E9DCCB] space-y-1">
              <h3 className="font-bold text-[#176B67] text-lg">2. Schedule "Worry Time"</h3>
              <p className="text-sm">Set aside 15 minutes in the afternoon specifically for writing down worries. If a worry pops up during the day, tell yourself: 'I will address this during my 15-minute worry window.'</p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#E9DCCB] space-y-1">
              <h3 className="font-bold text-[#176B67] text-lg">3. Write It Down (Brain Dump)</h3>
              <p className="text-sm">Keeping thoughts inside your head causes them to loop indefinitely. Writing them on paper transfers them out of your working memory.</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#1F2933]">
            When should you seek support?
          </h2>
          <p>
            If overthinking causes constant insomnia, prevents you from completing daily tasks, or leaves you feeling hopeless or chronically anxious, speaking with a supportive professional can help you develop personalized coping strategies.
          </p>
        </div>

      </div>

      {/* CTA Box inside Article */}
      <div className="bg-[#DDEFE8] rounded-3xl p-8 border border-[#176B67]/20 text-center space-y-4">
        <h3 className="text-2xl font-bold font-serif text-[#1F2933]">
          Need someone to talk to about what you're experiencing?
        </h3>
        <p className="text-sm text-[#1F2933]/80 max-w-lg mx-auto">
          You don't need a diagnosis. Bambe Center is here to listen with compassion and confidentiality.
        </p>
        <Link
          href="/support/talk-to-someone"
          className="inline-flex items-center gap-2 bg-[#176B67] hover:bg-[#125552] text-white px-7 py-3.5 rounded-xl font-bold text-sm shadow-md transition-all"
        >
          <PhoneCall className="w-4 h-4" />
          <span>Talk to Someone</span>
        </Link>
      </div>

    </article>
  );
}
