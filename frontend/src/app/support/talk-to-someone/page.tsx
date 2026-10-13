'use client';

import React from 'react';
import { SupportRequestForm } from '@/components/SupportRequestForm';
import { HeartHandshake } from 'lucide-react';

export default function TalkToSomeonePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12">
      
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="w-14 h-14 bg-[#DDEFE8] text-[#176B67] rounded-2xl flex items-center justify-center mx-auto">
          <HeartHandshake className="w-8 h-8" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold font-serif text-[#1F2933]">
          Sometimes you just need someone to listen.
        </h1>
        <p className="text-lg text-[#1F2933]/80 leading-relaxed">
          You don't have to know exactly what to say. You don't have to know what your feelings mean. Starting the conversation is enough.
        </p>
      </div>

      {/* Form component */}
      <SupportRequestForm />

    </div>
  );
}
