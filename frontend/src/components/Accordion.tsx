'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItem {
  id: string;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export function Accordion({ items }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-4">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className="bg-white rounded-2xl border border-[#E9DCCB] shadow-xs overflow-hidden transition-all"
          >
            <button
              onClick={() => toggle(item.id)}
              className="w-full text-left p-6 flex items-center justify-between gap-4 font-serif font-bold text-lg text-[#1F2933] hover:text-[#176B67] transition-colors focus:outline-hidden"
            >
              <span>{item.question}</span>
              <ChevronDown
                className={`w-5 h-5 shrink-0 text-[#176B67] transition-transform duration-200 ${
                  isOpen ? 'transform rotate-180' : ''
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-6 pb-6 pt-0 text-sm text-[#1F2933]/80 leading-relaxed border-t border-gray-100/60 mt-2">
                <p className="pt-3">{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
