'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { HeartHandshake, Phone, ShieldAlert, Heart } from 'lucide-react';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#1F2933] text-white mt-auto pt-16 pb-12 border-t border-[#176B67]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-gray-700">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#176B67] text-white flex items-center justify-center">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <span className="text-2xl font-bold font-serif text-[#DDEFE8]">
                Bambe Center
              </span>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed pr-4">
              {t.footer.tagline}
            </p>
            <div className="pt-2 text-xs text-gray-400">
              <p>Kigali, Rwanda • Mental Health & Wellness Support</p>
            </div>
          </div>

          {/* Navigation Sitemap */}
          <div>
            <h4 className="text-[#DDEFE8] font-semibold text-sm uppercase tracking-wider mb-4">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <Link href="/support" className="hover:text-[#DDEFE8] transition-colors">
                  {t.nav.findSupport}
                </Link>
              </li>
              <li>
                <Link href="/feelings" className="hover:text-[#DDEFE8] transition-colors">
                  {t.nav.imFeeling}
                </Link>
              </li>
              <li>
                <Link href="/check-in" className="hover:text-[#DDEFE8] transition-colors">
                  Wellness Check-In
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-[#DDEFE8] transition-colors">
                  {t.nav.resources}
                </Link>
              </li>
              <li>
                <Link href="/students" className="hover:text-[#DDEFE8] transition-colors">
                  {t.nav.forStudents}
                </Link>
              </li>
              <li>
                <Link href="/families" className="hover:text-[#DDEFE8] transition-colors">
                  {t.nav.forFamilies}
                </Link>
              </li>
            </ul>
          </div>

          {/* Organization & About */}
          <div>
            <h4 className="text-[#DDEFE8] font-semibold text-sm uppercase tracking-wider mb-4">
              Organization
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <Link href="/about" className="hover:text-[#DDEFE8] transition-colors">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href="/about/team" className="hover:text-[#DDEFE8] transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/organizations" className="hover:text-[#DDEFE8] transition-colors">
                  {t.nav.forOrganizations}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#DDEFE8] transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-[#DDEFE8] transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Urgent Help Ribbon */}
          <div className="bg-red-950/40 p-5 rounded-2xl border border-red-900/50 space-y-3">
            <div className="flex items-center gap-2 text-[#E98B7A] font-bold text-sm">
              <ShieldAlert className="w-5 h-5 shrink-0" />
              <span>Rwanda Crisis Lines</span>
            </div>
            <p className="text-xs text-gray-300 leading-normal">
              If you or someone you know is in crisis, call emergency helplines immediately.
            </p>
            <div className="space-y-1.5 text-xs font-medium text-white pt-1">
              <div className="flex items-center justify-between">
                <span>Emergency:</span>
                <span className="font-bold text-[#E98B7A]">112 / 114</span>
              </div>
              <div className="flex items-center justify-between">
                <span>RBC Helpline:</span>
                <span className="font-bold text-[#E98B7A]">1520</span>
              </div>
            </div>
            <Link
              href="/urgent-help"
              className="mt-2 block text-center bg-[#C83C3C] hover:bg-red-700 text-white py-2 px-3 rounded-lg text-xs font-bold transition-colors"
            >
              Get Urgent Help Now
            </Link>
          </div>

        </div>

        {/* Legal & Medical Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p className="max-w-2xl leading-relaxed text-center md:text-left">
            <span className="font-semibold text-gray-300">Disclaimer:</span> Bambe Center provides educational and mental wellness support resources. Content on this platform does not constitute medical diagnosis, clinical treatment, or psychological therapy.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms & Disclaimer
            </Link>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-xs text-gray-500 flex items-center justify-center gap-1">
          <span>{t.footer.copyright}</span>
        </div>
      </div>
    </footer>
  );
}
