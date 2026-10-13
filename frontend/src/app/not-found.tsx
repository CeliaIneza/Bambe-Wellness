'use client';

import React from 'react';
import Link from 'next/link';
import { Home, PhoneCall, Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-24 text-center space-y-8">
      <div className="w-20 h-20 bg-[#DDEFE8] text-[#176B67] rounded-3xl flex items-center justify-center mx-auto shadow-inner">
        <Compass className="w-10 h-10 animate-spin-slow" />
      </div>

      <div className="space-y-3">
        <h1 className="text-4xl sm:text-5xl font-bold font-serif text-[#1F2933]">
          Looks like we lost our way.
        </h1>
        <p className="text-lg text-[#1F2933]/80">
          That's okay. Let's get you somewhere helpful.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
        <Link
          href="/"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#176B67] hover:bg-[#125552] text-white px-7 py-3.5 rounded-xl font-bold text-sm shadow-md transition-all"
        >
          <Home className="w-4 h-4" />
          <span>Go Home</span>
        </Link>
        <Link
          href="/support"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#DDEFE8] text-[#176B67] px-7 py-3.5 rounded-xl font-bold text-sm transition-all"
        >
          <PhoneCall className="w-4 h-4" />
          <span>Find Support</span>
        </Link>
      </div>
    </div>
  );
}
