'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface SupportCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  badge?: string;
}

export function SupportCard({ title, description, href, icon, badge }: SupportCardProps) {
  return (
    <Link
      href={href}
      className="group relative bg-white rounded-2xl p-7 border border-[#E9DCCB] shadow-sm hover:shadow-lg hover:border-[#176B67] transition-all flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between mb-5">
          <div className="w-14 h-14 rounded-2xl bg-[#DDEFE8] text-[#176B67] flex items-center justify-center group-hover:bg-[#176B67] group-hover:text-white transition-colors shadow-inner">
            {icon}
          </div>
          {badge && (
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#E9DCCB]/60 text-[#176B67]">
              {badge}
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold font-serif text-[#1F2933] group-hover:text-[#176B67] transition-colors mb-2">
          {title}
        </h3>
        <p className="text-sm text-[#1F2933]/70 leading-relaxed">
          {description}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-100 flex items-center text-sm font-bold text-[#176B67] group-hover:underline">
        <span>Explore Option</span>
        <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </div>
    </Link>
  );
}
