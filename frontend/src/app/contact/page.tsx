'use client';

import React from 'react';
import { ContactForm } from '@/components/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12">
      
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="w-14 h-14 bg-[#DDEFE8] text-[#176B67] rounded-2xl flex items-center justify-center mx-auto">
          <Mail className="w-8 h-8" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold font-serif text-[#1F2933]">
          We're here to hear from you.
        </h1>
        <p className="text-lg text-[#1F2933]/80 leading-relaxed">
          Whether you have general questions, partnership ideas, or want to learn more about our wellbeing initiatives in Rwanda, feel free to drop us a message.
        </p>
      </div>

      {/* Info Cards & Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Contact Info Sidebar */}
        <div className="lg:col-span-4 bg-[#DDEFE8]/50 p-8 rounded-3xl border border-[#176B67]/20 space-y-6">
          <h3 className="text-xl font-bold font-serif text-[#176B67]">
            Reach Out Directly
          </h3>

          <div className="space-y-4 text-sm text-[#1F2933]/80">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#176B67] shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-[#1F2933]">Location</p>
                <p>Kigali, Rwanda</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-[#176B67] shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-[#1F2933]">General Inquiries</p>
                <p>contact@bambecenter.rw</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-[#176B67] shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-[#1F2933]">Support Team</p>
                <p>+250 788 000 000</p>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-[#E9DCCB] text-xs text-[#1F2933]/70 space-y-1">
            <p className="font-bold text-[#176B67]">Response Time</p>
            <p>We typically respond to general inquiries within 24 to 48 business hours.</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-8">
          <ContactForm />
        </div>

      </div>

    </div>
  );
}
