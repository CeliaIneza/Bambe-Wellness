'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { HeartHandshake, Menu, X, PhoneCall, AlertTriangle, ChevronDown } from 'lucide-react';

export function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navItems = [
    { name: t.nav.home, href: '/' },
    { name: t.nav.findSupport, href: '/support' },
    { name: t.nav.imFeeling, href: '/feelings' },
    { name: t.nav.resources, href: '/resources' },
    { name: t.nav.forStudents, href: '/students' },
    { name: t.nav.forFamilies, href: '/families' },
    { name: t.nav.forOrganizations, href: '/organizations' },
    { name: t.nav.about, href: '/about' },
    { name: t.nav.contact, href: '/contact' },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-[#FAF7F0]/95 backdrop-blur-md border-b border-[#E9DCCB]/60 shadow-xs">
      {/* Emergency Top Alert Ribbon */}
      <div className="bg-[#C83C3C] text-white text-xs py-1.5 px-4 text-center font-medium flex items-center justify-center gap-2">
        <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
        <span>In crisis? You're not alone. Immediate support is available in Rwanda.</span>
        <Link 
          href="/urgent-help" 
          className="underline font-bold hover:text-red-100 transition-colors ml-1"
        >
          {t.nav.urgentHelp}
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-[#176B67] text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-[#176B67] font-serif block leading-none">
                Bambe Center
              </span>
              <span className="text-[10px] uppercase tracking-wider text-[#1F2933]/60 font-semibold block mt-0.5">
                Mental Wellness Rwanda
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 font-medium text-sm text-[#1F2933]">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-lg transition-colors ${
                  isActive(item.href)
                    ? 'bg-[#DDEFE8] text-[#176B67] font-semibold'
                    : 'hover:bg-[#E9DCCB]/40 hover:text-[#176B67]'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Action Controls (Desktop) */}
          <div className="hidden xl:flex items-center gap-4">
            {/* Language Switcher */}
            <div className="flex items-center bg-[#E9DCCB]/50 p-1 rounded-lg text-xs font-semibold text-[#1F2933]">
              <button
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 rounded-md transition-all ${
                  lang === 'en'
                    ? 'bg-[#176B67] text-white shadow-xs'
                    : 'hover:text-[#176B67]'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang('rw')}
                className={`px-2.5 py-1 rounded-md transition-all ${
                  lang === 'rw'
                    ? 'bg-[#176B67] text-white shadow-xs'
                    : 'hover:text-[#176B67]'
                }`}
              >
                RW
              </button>
            </div>

            {/* Talk to Someone Primary CTA */}
            <Link
              href="/support/talk-to-someone"
              className="inline-flex items-center gap-2 bg-[#176B67] hover:bg-[#125552] text-white px-4 py-2.5 rounded-xl font-semibold text-sm shadow-md transition-all hover:shadow-lg"
            >
              <PhoneCall className="w-4 h-4" />
              <span>{t.nav.talkToSomeone}</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <div className="flex items-center bg-[#E9DCCB]/50 p-0.5 rounded-lg text-xs font-semibold">
              <button
                onClick={() => setLang('en')}
                className={`px-2 py-1 rounded ${
                  lang === 'en' ? 'bg-[#176B67] text-white' : 'text-[#1F2933]'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang('rw')}
                className={`px-2 py-1 rounded ${
                  lang === 'rw' ? 'bg-[#176B67] text-white' : 'text-[#1F2933]'
                }`}
              >
                RW
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-[#1F2933] hover:text-[#176B67] focus:outline-hidden"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#FAF7F0] border-b border-[#E9DCCB] px-4 pt-2 pb-6 space-y-3 shadow-lg">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  isActive(item.href)
                    ? 'bg-[#DDEFE8] text-[#176B67] font-semibold'
                    : 'text-[#1F2933] hover:bg-[#E9DCCB]/30'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-[#E9DCCB] space-y-2">
            <Link
              href="/support/talk-to-someone"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-[#176B67] text-white py-3 rounded-xl font-semibold text-base shadow-sm"
            >
              <PhoneCall className="w-5 h-5" />
              <span>{t.nav.talkToSomeone}</span>
            </Link>

            <Link
              href="/urgent-help"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-[#C83C3C] text-white py-3 rounded-xl font-semibold text-base shadow-sm"
            >
              <AlertTriangle className="w-5 h-5" />
              <span>{t.nav.urgentHelp}</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
