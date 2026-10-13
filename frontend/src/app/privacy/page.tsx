'use client';

import React from 'react';
import { ShieldCheck } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-8 text-[#1F2933]">
      
      <div className="space-y-4 border-b border-[#E9DCCB] pb-8">
        <div className="inline-flex items-center gap-2 bg-[#DDEFE8] text-[#176B67] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4" />
          <span>Data Protection & Privacy</span>
        </div>
        <h1 className="text-4xl font-bold font-serif">Privacy Policy</h1>
        <p className="text-sm text-[#1F2933]/60">Last updated: October 2026</p>
      </div>

      <div className="prose prose-md max-w-none space-y-6 text-sm leading-relaxed text-[#1F2933]/85">
        <p>
          Bambe Center ("we", "our", "us") respects your personal privacy. Because mental-health information can be highly sensitive, we adhere to strict minimal data collection principles in compliance with Rwandan data protection standards.
        </p>

        <h2 className="text-xl font-bold font-serif text-[#176B67]">1. Information We Collect</h2>
        <p>
          We only collect personal information that you voluntarily submit through our contact forms or support request submissions, such as your name, email address, optional phone number, and message notes.
        </p>

        <h2 className="text-xl font-bold font-serif text-[#176B67]">2. Wellness Check-In Data</h2>
        <p>
          Responses provided during our interactive Wellness Check-In quiz are evaluated locally within your browser session to generate self-reflection feedback. We do not store identifiable check-in answers on our servers.
        </p>

        <h2 className="text-xl font-bold font-serif text-[#176B67]">3. How We Use Your Information</h2>
        <p>
          We use submitted contact details solely to respond to your support inquiries, arrange preferred connection methods, or address partnership requests. We never sell or share your information with third-party advertisers.
        </p>

        <h2 className="text-xl font-bold font-serif text-[#176B67]">4. Contact Us Regarding Privacy</h2>
        <p>
          If you have any questions about this privacy policy, please contact us at <strong>privacy@bambecenter.rw</strong>.
        </p>
      </div>

    </div>
  );
}
