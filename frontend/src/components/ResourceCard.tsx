'use client';

import React from 'react';
import Link from 'next/link';
import { Clock, BookOpen } from 'lucide-react';

interface ResourceCardProps {
  slug: string;
  category: string;
  title: string;
  description: string;
  readTime: string;
}

export function ResourceCard({ slug, category, title, description, readTime }: ResourceCardProps) {
  return (
    <Link
      href={`/resources/${slug}`}
      className="group block bg-white rounded-2xl p-6 border border-[#E9DCCB] shadow-xs hover:shadow-md hover:border-[#176B67] transition-all flex flex-col justify-between"
    >
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-[#176B67] bg-[#DDEFE8] px-3 py-1 rounded-full">
            {category}
          </span>
          <div className="flex items-center gap-1 text-xs text-[#1F2933]/60">
            <Clock className="w-3.5 h-3.5" />
            <span>{readTime}</span>
          </div>
        </div>

        <h3 className="text-lg font-bold font-serif text-[#1F2933] group-hover:text-[#176B67] transition-colors line-clamp-2">
          {title}
        </h3>

        <p className="text-sm text-[#1F2933]/70 line-clamp-3 leading-relaxed">
          {description}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#176B67]">
        <span>Read Guide</span>
        <BookOpen className="w-4 h-4 group-hover:scale-110 transition-transform" />
      </div>
    </Link>
  );
}
