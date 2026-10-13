'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface FeelingCardProps {
  slug: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export function FeelingCard({ slug, title, description, icon }: FeelingCardProps) {
  return (
    <Link
      href={`/feelings/${slug}`}
      className="group block bg-white rounded-2xl p-6 border border-[#E9DCCB] shadow-xs hover:shadow-md hover:border-[#176B67] transition-all hover:-translate-y-1"
    >
      <div className="flex items-start justify-between gap-4">
        {icon && (
          <div className="w-12 h-12 rounded-xl bg-[#DDEFE8] text-[#176B67] flex items-center justify-center shrink-0 group-hover:bg-[#176B67] group-hover:text-white transition-colors">
            {icon}
          </div>
        )}
        <span className="text-[#176B67] opacity-0 group-hover:opacity-100 transition-opacity">
          <ArrowRight className="w-5 h-5" />
        </span>
      </div>

      <div className="mt-4 space-y-1.5">
        <h3 className="text-lg font-bold font-serif text-[#1F2933] group-hover:text-[#176B67] transition-colors">
          {title}
        </h3>
        <p className="text-sm text-[#1F2933]/70 leading-relaxed">
          {description}
        </p>
      </div>
    </Link>
  );
}
