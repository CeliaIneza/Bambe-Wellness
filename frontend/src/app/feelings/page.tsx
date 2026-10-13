'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { FeelingCard } from '@/components/FeelingCard';
import {
  CloudRain,
  Zap,
  Moon,
  BatteryLow,
  UserX,
  HeartHandshake,
  GraduationCap,
  Users,
  HelpCircle,
  Flame,
  BrainCircuit,
  Bed,
  Briefcase,
  Home,
  Frown,
} from 'lucide-react';

export default function FeelingsDirectoryPage() {
  const { t } = useLanguage();

  const feelings = [
    { slug: 'overwhelmed', title: "Overwhelmed", desc: "When everything feels like too much to carry at once.", icon: <CloudRain className="w-6 h-6" /> },
    { slug: 'anxious', title: "Anxious", desc: "When your mind won't slow down or let you rest.", icon: <Zap className="w-6 h-6" /> },
    { slug: 'stressed', title: "Stressed", desc: "Tension and pressure from life, school, or work demands.", icon: <Flame className="w-6 h-6" /> },
    { slug: 'burnt-out', title: "Burnt Out", desc: "Exhausted in mind and body, even when you get rest.", icon: <BatteryLow className="w-6 h-6" /> },
    { slug: 'sad-low', title: "Sad / Low", desc: "Feeling down, empty, or unmotivated lately.", icon: <Frown className="w-6 h-6" /> },
    { slug: 'lonely', title: "Lonely", desc: "Feeling disconnected from family, friends, or community.", icon: <UserX className="w-6 h-6" /> },
    { slug: 'grieving', title: "Grieving", desc: "Struggling with pain after losing a person, relationship, or role.", icon: <HeartHandshake className="w-6 h-6" /> },
    { slug: 'overthinking', title: "Overthinking", desc: "Replaying past scenarios or worrying constantly about the future.", icon: <BrainCircuit className="w-6 h-6" /> },
    { slug: 'sleep-problems', title: "Can't Sleep", desc: "Difficulty falling asleep, staying asleep, or waking up exhausted.", icon: <Bed className="w-6 h-6" /> },
    { slug: 'relationship-problems', title: "Relationship Problems", desc: "Tension, miscommunication, or conflict with someone close.", icon: <Users className="w-6 h-6" /> },
    { slug: 'school-pressure', title: "School Pressure", desc: "Exam stress, grades, assignments, and academic anxiety.", icon: <GraduationCap className="w-6 h-6" /> },
    { slug: 'work-pressure', title: "Work Pressure", desc: "Heavy workload, job insecurity, or toxic work environment.", icon: <Briefcase className="w-6 h-6" /> },
    { slug: 'family-problems', title: "Family Problems", desc: "Family expectations, conflict, or generational pressure.", icon: <Home className="w-6 h-6" /> },
    { slug: 'dont-know', title: "I Don't Know", desc: "Just knowing that something inside doesn't feel right.", icon: <HelpCircle className="w-6 h-6" /> },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12">
      
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold font-serif text-[#1F2933]">
          Start with what you're feeling.
        </h1>
        <p className="text-lg text-[#1F2933]/80 leading-relaxed">
          You don't need a medical diagnosis. You don't even need to know the exact right words. Choose what feels closest to your experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {feelings.map((item) => (
          <FeelingCard
            key={item.slug}
            slug={item.slug}
            title={item.title}
            description={item.desc}
            icon={item.icon}
          />
        ))}
      </div>

    </div>
  );
}
