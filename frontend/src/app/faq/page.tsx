'use client';

import React from 'react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { Accordion } from '@/components/Accordion';
import { HelpCircle, PhoneCall } from 'lucide-react';
import Link from 'next/link';

export default function FAQPage() {
  const { lang } = useLanguage();

  const faqItems = [
    {
      id: 'q1',
      question: lang === 'en' ? "Do I need a diagnosed mental illness to seek help?" : "Ese ngomba kumenyeshwa uburwayi bwo mu mutwe mbere yo gushaka ubufasha?",
      answer: lang === 'en'
        ? "No. Bambe Center is for anyone experiencing stress, anxiety, burnout, loneliness, relationship difficulties, or simply feeling that something is not right. You don't need a medical diagnosis to deserve care."
        : "Oya. Bambe Center ni iy'umuntu wese ufite umuhangayiko, urungu, n'umunaniro mu bitekerezo. Ntuba ukeneye ikirezi cya muganga kugira ngo uhewe ubufasha.",
    },
    {
      id: 'q2',
      question: lang === 'en' ? "Can I talk to someone if I don't know what's wrong?" : "Ese nshobora kuvugana n'umuntu niba ntazi ikimbaho neza?",
      answer: lang === 'en'
        ? "Yes, absolutely. You don't need to have all the words or answers right now. Simply starting a conversation is enough for us to guide you."
        : "Yego rwose. Ntubaye ufite amagambo yose cyangwa ibisubizo muri uyu munsi. Gutangira ikiganiro birahagije.",
    },
    {
      id: 'q3',
      question: lang === 'en' ? "Can this website diagnose me medically?" : "Ese uru rubuga rushobora kumpa icyemezo cy'uburwayi bwa muganga?",
      answer: lang === 'en'
        ? "No. The resources and Wellness Check-In on this website are designed for educational self-reflection and guidance only. They do not replace a formal medical or psychological diagnosis."
        : "Oya. Ibikoresho n'ibipimo by'urubuga ni ibyo kwisuzuma n'ubumenyi gusa. Ntibirera serivisi z'ibitaro bya muganga.",
    },
    {
      id: 'q4',
      question: lang === 'en' ? "How does confidentiality work at Bambe Center?" : "Ese amakuru yanjye abikwa ate mu ibanga?",
      answer: lang === 'en'
        ? "We treat all support requests and contact submissions with strict confidentiality and care. We never sell or publicize your personal information."
        : "Twita ku bikorwa byose n'amatsinda y'ubufasha mu ibanga rikomeye cyane.",
    },
    {
      id: 'q5',
      question: lang === 'en' ? "What should I do in a severe emergency?" : "Ese nkorera iki mu bihe by'ubutabazi bukomeye?",
      answer: lang === 'en'
        ? "If you or someone else is in immediate physical danger, please visit our Urgent Help page or call 112 / 114 / RBC 1520 right away."
        : "Niba uri mu kaga k'ubuzima, sura urupapuro rw'Ubufasha bw'Ubwitaragasi cyangwa uhamagare 112 / 114 ubu nyine.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12">
      
      {/* Header */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <div className="w-14 h-14 bg-[#DDEFE8] text-[#176B67] rounded-2xl flex items-center justify-center mx-auto">
          <HelpCircle className="w-8 h-8" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold font-serif text-[#1F2933]">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-[#1F2933]/80 leading-relaxed">
          Clear answers to common questions about Bambe Center, confidentiality, and seeking mental wellness support.
        </p>
      </div>

      {/* Accordion Component */}
      <Accordion items={faqItems} />

      {/* Footer CTA */}
      <div className="bg-[#DDEFE8]/50 rounded-3xl p-8 border border-[#176B67]/20 text-center space-y-4">
        <h3 className="text-xl font-bold font-serif text-[#1F2933]">
          Have a question not answered here?
        </h3>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-[#176B67] hover:bg-[#125552] text-white px-6 py-3 rounded-xl font-bold text-sm shadow-xs transition-colors"
        >
          <PhoneCall className="w-4 h-4" />
          <span>Contact Our Team</span>
        </Link>
      </div>

    </div>
  );
}
