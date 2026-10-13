'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { PhoneCall, BookOpen, CheckCircle2, AlertCircle, ArrowLeft, Heart } from 'lucide-react';

interface FeelingData {
  titleEn: string;
  titleRw: string;
  subtitleEn: string;
  subtitleRw: string;
  symptomsEn: string[];
  symptomsRw: string[];
  strategiesEn: string[];
  strategiesRw: string[];
  whenToSeekEn: string;
  whenToSeekRw: string;
}

const feelingsData: Record<string, FeelingData> = {
  overwhelmed: {
    titleEn: "Feeling Overwhelmed?",
    titleRw: "Wumva Biremereye Cyane?",
    subtitleEn: "When everything starts feeling like too much to carry, even small daily tasks can feel like climbing a mountain.",
    subtitleRw: "Mu gihe ibintu byose bitangiye kuremera, n'imirimo mito ya buri munsi ishobora kuremera cyane.",
    symptomsEn: [
      "Difficulty concentrating on one task at a time",
      "Mental and emotional exhaustion",
      "Difficulty making even basic daily decisions",
      "Feeling like your to-do list never ends",
      "Irritability or feeling easily snapped",
      "Wanting to withdraw from friends and family",
    ],
    symptomsRw: [
      "Ingorane zo gushyira igitekerezo ku kintu kimwe",
      "Umunaniro ukabije mu bitekerezo n'umutima",
      "Kugorwa no gufata icyemezo icyo ari cyose",
      "Kugira igitekerezo ko ibyo ugomba gukora bitazashira",
      "Kushukuzwa cyangwa kurakazwa n'ubusa",
      "Kwishyira ku ruhande ukitarura inshuti n'umuryango",
    ],
    strategiesEn: [
      "Break your day into tiny, manageable steps. Focus only on the next 30 minutes.",
      "Practice 4-7-8 breathing: Inhale for 4 seconds, hold for 7, exhale for 8.",
      "Write everything down on paper to get it out of your head.",
      "Give yourself permission to postpone non-essential tasks.",
    ],
    strategiesRw: [
      "Gabanya ibyo ugomba gukora mu bice bito cane. Ita gusa ku munota 30 iri imbere.",
      "Jya ufata umwuka mwiza munsi w'akanya gato hanyuma uwusohore buhoro.",
      "Andika buri kintu cyose mu bitekerezo ku rupapuro ubibohore.",
      "Ihe uburenganzira bwo gusubika imirimo idakenewe uyu munsi.",
    ],
    whenToSeekEn: "If feeling overwhelmed persists for more than two weeks and prevents you from sleeping, working, or connecting with loved ones, speaking with a supportive counselor can help you regain balance.",
    whenToSeekRw: "Niba ibyo bintu biremereye bikomeza kurenza ibyumeru bibiri kandi bikaza kukubuza gusinzira no gukora, kuvugana n'umujyanama biragufasha neza.",
  },
  anxious: {
    titleEn: "Feeling Anxious?",
    titleRw: "Wumva Ufite Umuhangayiko cyangwa Igihunga?",
    subtitleEn: "When your mind won't slow down, replay future scenarios, or keep your heart racing without clear reason.",
    subtitleRw: "Mu gihe ibitekerezo byawe bitari gutuza, bitinya ahazaza cyangwa bikaba bihutisha umutima.",
    symptomsEn: [
      "Racing thoughts that won't quiet down",
      "Physical tension in shoulders, jaw, or chest",
      "Restlessness or feeling constantly on edge",
      "Trouble falling asleep or staying asleep",
      "Feeling a sense of dread or impending trouble",
    ],
    symptomsRw: [
      "Ibitekerezo byiruka cyane bitagira umutuzo",
      "Umutwe cyangwa ibitugu bikanyaraye",
      "Igihunga gihoraho no kumva uhangayitse",
      "Kugorwa no gusinzira mu ijoro",
      "Kugira ubwoba bw'ibitaraba",
    ],
    strategiesEn: [
      "Use 5-4-3-2-1 Grounding: Name 5 things you see, 4 you can touch, 3 you hear, 2 you smell, 1 you taste.",
      "Limit caffeine intake as it can trigger heart palpitations.",
      "Remind yourself: 'I am safe in this exact moment.'",
    ],
    strategiesRw: [
      "Tekerereza ku bintu 5 ubona iruhande rwawe n'ibintu 4 ushobora gukora no gukora ku ntoki.",
      "Gabanya ikawa n'ibyo kunywa bifite ingufu bitera igihunga.",
      "Ibibutse: 'Muri uyu munsi n'uyu mwanya ndi mu mutekano.'",
    ],
    whenToSeekEn: "When anxiety interferes with your school, job, or physical health, reach out to someone who can guide you through calming, evidence-informed techniques.",
    whenToSeekRw: "Niba umuhangayiko ubangamiye akazi n'amasomo yawe, shaka umuntu ugufasha kugabanya uwo muhangayiko.",
  },
};

export default function FeelingDetailPage() {
  const params = useParams();
  const { lang } = useLanguage();
  const slug = params?.slug as string;

  const data = feelingsData[slug] || feelingsData['overwhelmed'];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12">
      
      {/* Back Link */}
      <Link
        href="/feelings"
        className="inline-flex items-center gap-2 text-sm font-bold text-[#176B67] hover:underline"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Feelings Directory</span>
      </Link>

      {/* Hero Header */}
      <div className="bg-[#DDEFE8]/50 rounded-3xl p-8 sm:p-12 border border-[#176B67]/20 space-y-4">
        <div className="w-12 h-12 bg-[#176B67] text-white rounded-xl flex items-center justify-center">
          <Heart className="w-6 h-6 fill-current" />
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold font-serif text-[#1F2933]">
          {lang === 'en' ? data.titleEn : data.titleRw}
        </h1>
        <p className="text-lg text-[#1F2933]/80 leading-relaxed">
          {lang === 'en' ? data.subtitleEn : data.subtitleRw}
        </p>
      </div>

      {/* Symptoms List */}
      <div className="bg-white rounded-3xl p-8 border border-[#E9DCCB] space-y-6">
        <h2 className="text-2xl font-bold font-serif text-[#1F2933]">
          You might notice:
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {(lang === 'en' ? data.symptomsEn : data.symptomsRw).map((sym, idx) => (
            <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-[#FAF7F0]">
              <CheckCircle2 className="w-5 h-5 text-[#176B67] shrink-0 mt-0.5" />
              <span className="text-sm text-[#1F2933]/80 font-medium">{sym}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Strategies */}
      <div className="bg-white rounded-3xl p-8 border border-[#E9DCCB] space-y-6">
        <h2 className="text-2xl font-bold font-serif text-[#1F2933]">
          What might help?
        </h2>
        <div className="space-y-3">
          {(lang === 'en' ? data.strategiesEn : data.strategiesRw).map((strat, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-[#DDEFE8]/30 border border-[#176B67]/15 flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-[#176B67] text-white font-bold text-xs flex items-center justify-center shrink-0">
                {idx + 1}
              </span>
              <p className="text-sm text-[#1F2933]/85 leading-relaxed font-medium pt-0.5">{strat}</p>
            </div>
          ))}
        </div>
      </div>

      {/* When to Seek Support */}
      <div className="bg-amber-50 rounded-3xl p-8 border border-amber-200 space-y-4">
        <div className="flex items-center gap-2 text-amber-900 font-bold text-lg">
          <AlertCircle className="w-6 h-6 text-amber-700 shrink-0" />
          <span>When should I talk to someone?</span>
        </div>
        <p className="text-sm text-amber-950/80 leading-relaxed">
          {lang === 'en' ? data.whenToSeekEn : data.whenToSeekRw}
        </p>
      </div>

      {/* CTAs */}
      <div className="bg-white rounded-3xl p-8 border border-[#E9DCCB] text-center space-y-6">
        <h3 className="text-2xl font-bold font-serif text-[#1F2933]">
          Take your next step today.
        </h3>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/support/talk-to-someone"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#176B67] hover:bg-[#125552] text-white px-8 py-4 rounded-xl font-bold text-base shadow-md transition-all"
          >
            <PhoneCall className="w-5 h-5" />
            <span>Talk to Someone</span>
          </Link>
          <Link
            href="/resources"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#DDEFE8] text-[#176B67] px-8 py-4 rounded-xl font-bold text-base transition-all"
          >
            <BookOpen className="w-5 h-5" />
            <span>Explore Resources</span>
          </Link>
        </div>
      </div>

    </div>
  );
}
