'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { Hero } from '@/components/Hero';
import { FeelingCard } from '@/components/FeelingCard';
import { SupportCard } from '@/components/SupportCard';
import { ResourceCard } from '@/components/ResourceCard';
import {
  CloudRain,
  Zap,
  Moon,
  BatteryLow,
  UserX,
  HeartHandshake,
  GraduationCap,
  Users,
  HelpCircle,
  PhoneCall,
  Sparkles,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  Building2,
  Heart,
  Smile,
  Globe,
  Compass,
} from 'lucide-react';

export default function HomePage() {
  const { t } = useLanguage();

  const feelingItems = [
    {
      slug: 'overwhelmed',
      title: t.whatBringsYouHere.feelings.overwhelmed.title,
      description: t.whatBringsYouHere.feelings.overwhelmed.desc,
      icon: <CloudRain className="w-6 h-6" />,
    },
    {
      slug: 'anxious',
      title: t.whatBringsYouHere.feelings.anxious.title,
      description: t.whatBringsYouHere.feelings.anxious.desc,
      icon: <Zap className="w-6 h-6" />,
    },
    {
      slug: 'sad-low',
      title: t.whatBringsYouHere.feelings.low.title,
      description: t.whatBringsYouHere.feelings.low.desc,
      icon: <Moon className="w-6 h-6" />,
    },
    {
      slug: 'burnt-out',
      title: t.whatBringsYouHere.feelings.burntOut.title,
      description: t.whatBringsYouHere.feelings.burntOut.desc,
      icon: <BatteryLow className="w-6 h-6" />,
    },
    {
      slug: 'lonely',
      title: t.whatBringsYouHere.feelings.lonely.title,
      description: t.whatBringsYouHere.feelings.lonely.desc,
      icon: <UserX className="w-6 h-6" />,
    },
    {
      slug: 'grieving',
      title: t.whatBringsYouHere.feelings.grieving.title,
      description: t.whatBringsYouHere.feelings.grieving.desc,
      icon: <HeartHandshake className="w-6 h-6" />,
    },
    {
      slug: 'school-pressure',
      title: t.whatBringsYouHere.feelings.schoolPressure.title,
      description: t.whatBringsYouHere.feelings.schoolPressure.desc,
      icon: <GraduationCap className="w-6 h-6" />,
    },
    {
      slug: 'relationship-problems',
      title: t.whatBringsYouHere.feelings.relationships.title,
      description: t.whatBringsYouHere.feelings.relationships.desc,
      icon: <Users className="w-6 h-6" />,
    },
    {
      slug: 'dont-know',
      title: t.whatBringsYouHere.feelings.dontKnow.title,
      description: t.whatBringsYouHere.feelings.dontKnow.desc,
      icon: <HelpCircle className="w-6 h-6" />,
    },
  ];

  return (
    <div className="space-y-20 pb-20">
      
      {/* 1. HERO SECTION */}
      <Hero />

      {/* 2. WHAT BRINGS YOU HERE? */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#DDEFE8] text-[#176B67] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>Start With What You Feel</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#1F2933]">
            {t.whatBringsYouHere.title}
          </h2>
          <p className="text-base sm:text-lg text-[#1F2933]/70">
            {t.whatBringsYouHere.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {feelingItems.map((item) => (
            <FeelingCard
              key={item.slug}
              slug={item.slug}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>
      </section>

      {/* 3. EARLY SUPPORT BANNER */}
      <section className="bg-[#DDEFE8]/60 border-y border-[#176B67]/15 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="w-14 h-14 bg-[#176B67] text-white rounded-2xl flex items-center justify-center mx-auto shadow-md">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#1F2933]">
            {t.earlySupport.title}
          </h2>
          <p className="text-base sm:text-lg text-[#1F2933]/80 leading-relaxed max-w-3xl mx-auto">
            {t.earlySupport.text}
          </p>
          <div className="pt-2">
            <Link
              href="/support"
              className="inline-flex items-center gap-2 bg-[#176B67] hover:bg-[#125552] text-white px-8 py-4 rounded-xl font-bold text-base shadow-md transition-all hover:shadow-lg"
            >
              <span>{t.earlySupport.cta}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. SUPPORT OPTIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#1F2933]">
            {t.supportOptions.title}
          </h2>
          <p className="text-base text-[#1F2933]/70">
            Choose the pathway that feels most comfortable for you right now.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <SupportCard
            title={t.supportOptions.talkToSomeone.title}
            description={t.supportOptions.talkToSomeone.desc}
            href="/support/talk-to-someone"
            icon={<PhoneCall className="w-7 h-7" />}
            badge="Direct Support"
          />
          <SupportCard
            title={t.supportOptions.understandFeeling.title}
            description={t.supportOptions.understandFeeling.desc}
            href="/feelings"
            icon={<Smile className="w-7 h-7" />}
            badge="Exploration"
          />
          <SupportCard
            title={t.supportOptions.learnGrow.title}
            description={t.supportOptions.learnGrow.desc}
            href="/resources"
            icon={<BookOpen className="w-7 h-7" />}
            badge="Resources"
          />
          <SupportCard
            title={t.supportOptions.supportLovedOne.title}
            description={t.supportOptions.supportLovedOne.desc}
            href="/families"
            icon={<Heart className="w-7 h-7" />}
            badge="For Families"
          />
        </div>
      </section>

      {/* 5. WELLNESS CHECK-IN PROMO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#176B67] to-[#125552] rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive Reflection Tool</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif leading-tight">
              {t.checkIn.heroTitle}
            </h2>
            <p className="text-base sm:text-lg text-white/90 leading-relaxed">
              {t.checkIn.heroSubtitle}
            </p>
            <div>
              <Link
                href="/check-in"
                className="inline-flex items-center gap-2 bg-[#FAF7F0] hover:bg-white text-[#176B67] px-8 py-4 rounded-xl font-bold text-base shadow-md transition-all hover:scale-105"
              >
                <span>{t.checkIn.startBtn}</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <p className="text-xs text-white/70">
              * {t.checkIn.quizDisclaimer}
            </p>
          </div>
        </div>
      </section>

      {/* 6. FEATURED RESOURCES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#176B67] mb-1">
              Practical Guides
            </div>
            <h2 className="text-3xl font-bold font-serif text-[#1F2933]">
              Sometimes understanding helps.
            </h2>
          </div>
          <Link
            href="/resources"
            className="inline-flex items-center gap-1 text-sm font-bold text-[#176B67] hover:underline"
          >
            <span>Explore All Resources</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ResourceCard
            slug="what-does-burnout-actually-feel-like"
            category="Burnout & Work"
            title="What does burnout actually feel like?"
            description="Recognizing the subtle warning signs of emotional exhaustion before your body forces you to stop."
            readTime="4 min read"
          />
          <ResourceCard
            slug="how-to-deal-with-constant-overthinking"
            category="Anxiety"
            title="How to deal with constant overthinking"
            description="Practical evidence-informed grounding techniques to calm a racing mind during stressful periods."
            readTime="5 min read"
          />
          <ResourceCard
            slug="when-should-i-talk-to-someone"
            category="Support Guide"
            title="When should I talk to someone?"
            description="Understanding when taking the first step to speak with a supportive professional can help."
            readTime="3 min read"
          />
          <ResourceCard
            slug="how-to-support-a-friend-who-is-struggling"
            category="Supporting Others"
            title="How to support a friend who is struggling"
            description="Clear advice on how to start compassionate conversations without making things awkward or stressful."
            readTime="6 min read"
          />
        </div>
      </section>

      {/* 7. STUDENTS BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF7F0] rounded-3xl p-8 sm:p-12 border-2 border-[#E9DCCB] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#DDEFE8] text-[#176B67] px-3.5 py-1 rounded-full text-xs font-bold">
              <GraduationCap className="w-4 h-4" />
              <span>For Secondary & University Students</span>
            </div>
            <h2 className="text-3xl font-bold font-serif text-[#1F2933]">
              {t.students.title}
            </h2>
            <p className="text-base text-[#1F2933]/80 leading-relaxed">
              {t.students.subtitle}
            </p>
            <div className="pt-2">
              <Link
                href="/students"
                className="inline-flex items-center gap-2 bg-[#176B67] text-white px-6 py-3 rounded-xl font-bold text-sm shadow-sm hover:bg-[#125552] transition-colors"
              >
                <span>{t.students.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAMILIES BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E9DCCB] shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#E9DCCB]/60 text-[#1F2933] px-3.5 py-1 rounded-full text-xs font-bold">
              <Users className="w-4 h-4 text-[#176B67]" />
              <span>Family & Community Care</span>
            </div>
            <h2 className="text-3xl font-bold font-serif text-[#1F2933]">
              {t.families.title}
            </h2>
            <p className="text-base text-[#1F2933]/80 leading-relaxed">
              {t.families.subtitle}
            </p>
            <div className="pt-2">
              <Link
                href="/families"
                className="inline-flex items-center gap-2 bg-[#176B67] text-white px-6 py-3 rounded-xl font-bold text-sm shadow-sm hover:bg-[#125552] transition-colors"
              >
                <span>{t.families.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 9. BUILT FOR RWANDA & VALUES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="bg-[#DDEFE8]/40 rounded-3xl p-8 sm:p-12 border border-[#176B67]/15 text-center space-y-4 max-w-4xl mx-auto">
          <div className="w-12 h-12 bg-[#176B67] text-white rounded-xl flex items-center justify-center mx-auto">
            <Globe className="w-6 h-6" />
          </div>
          <h2 className="text-3xl font-bold font-serif text-[#1F2933]">
            {t.rwandaSection.title}
          </h2>
          <p className="text-base sm:text-lg text-[#1F2933]/80 leading-relaxed">
            {t.rwandaSection.text}
          </p>
        </div>

        {/* 4 Core Values */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-[#E9DCCB] space-y-2">
            <h3 className="text-lg font-bold font-serif text-[#176B67]">
              {t.values.compassion.title}
            </h3>
            <p className="text-sm text-[#1F2933]/70">
              {t.values.compassion.desc}
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-[#E9DCCB] space-y-2">
            <h3 className="text-lg font-bold font-serif text-[#176B67]">
              {t.values.respect.title}
            </h3>
            <p className="text-sm text-[#1F2933]/70">
              {t.values.respect.desc}
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-[#E9DCCB] space-y-2">
            <h3 className="text-lg font-bold font-serif text-[#176B67]">
              {t.values.accessibility.title}
            </h3>
            <p className="text-sm text-[#1F2933]/70">
              {t.values.accessibility.desc}
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-[#E9DCCB] space-y-2">
            <h3 className="text-lg font-bold font-serif text-[#176B67]">
              {t.values.trust.title}
            </h3>
            <p className="text-sm text-[#1F2933]/70">
              {t.values.trust.desc}
            </p>
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-3xl p-10 sm:p-16 border-2 border-[#176B67]/20 shadow-xl space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#1F2933]">
            {t.finalCTA.title}
          </h2>
          <p className="text-lg text-[#1F2933]/80 max-w-xl mx-auto">
            {t.finalCTA.subtitle}
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/support/talk-to-someone"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#176B67] hover:bg-[#125552] text-white px-8 py-4 rounded-xl font-bold text-base shadow-md transition-all"
            >
              <PhoneCall className="w-5 h-5" />
              <span>{t.finalCTA.talkBtn}</span>
            </Link>
            <Link
              href="/resources"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#DDEFE8] text-[#176B67] px-8 py-4 rounded-xl font-bold text-base transition-all"
            >
              <span>{t.finalCTA.exploreBtn}</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
