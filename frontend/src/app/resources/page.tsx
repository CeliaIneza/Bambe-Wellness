'use client';

import React, { useState } from 'react';
import { ResourceCard } from '@/components/ResourceCard';
import { Search, BookOpen, Filter } from 'lucide-react';

const allArticles = [
  {
    slug: 'what-does-burnout-actually-feel-like',
    category: 'Burnout & Work',
    title: 'What does burnout actually feel like?',
    description: 'Recognizing the subtle warning signs of emotional exhaustion before your body forces you to stop.',
    readTime: '4 min read',
  },
  {
    slug: 'how-to-deal-with-constant-overthinking',
    category: 'Anxiety',
    title: 'How to deal with constant overthinking',
    description: 'Practical evidence-informed grounding techniques to calm a racing mind during stressful periods.',
    readTime: '5 min read',
  },
  {
    slug: 'when-should-i-talk-to-someone',
    category: 'Support Guide',
    title: 'When should I talk to someone?',
    description: 'Understanding when taking the first step to speak with a supportive professional can help.',
    readTime: '3 min read',
  },
  {
    slug: 'how-to-support-a-friend-who-is-struggling',
    category: 'Supporting Others',
    title: 'How to support a friend who is struggling',
    description: 'Clear advice on how to start compassionate conversations without making things awkward or stressful.',
    readTime: '6 min read',
  },
  {
    slug: 'navigating-exam-stress-and-academic-pressure',
    category: 'Students',
    title: 'Navigating exam stress and academic pressure',
    description: 'Proven study-rest balance strategies for Rwandan secondary and university students.',
    readTime: '5 min read',
  },
  {
    slug: 'understanding-grief-and-loss-in-everyday-life',
    category: 'Grief',
    title: 'Understanding grief and loss in everyday life',
    description: 'How to honor your emotions and allow yourself to heal at your own pace without pressure.',
    readTime: '7 min read',
  },
];

const categories = ['All', 'Stress', 'Anxiety', 'Burnout & Work', 'Students', 'Grief', 'Supporting Others', 'Support Guide'];

export default function ResourcesHubPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredArticles = allArticles.filter((art) => {
    const matchesCategory = selectedCategory === 'All' || art.category === selectedCategory;
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12">
      
      {/* Hero Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="w-14 h-14 bg-[#DDEFE8] text-[#176B67] rounded-2xl flex items-center justify-center mx-auto">
          <BookOpen className="w-8 h-8" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold font-serif text-[#1F2933]">
          A place to learn, reflect and grow.
        </h1>
        <p className="text-lg text-[#1F2933]/80 leading-relaxed">
          Explore evidence-informed articles, self-care exercises, and practical guides written with Rwanda in mind.
        </p>
      </div>

      {/* Search Bar */}
      <div className="max-w-2xl mx-auto relative">
        <Search className="w-5 h-5 text-[#1F2933]/40 absolute left-4 top-1/2 transform -translate-y-1/2" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="What would you like to learn about? (e.g. exam stress, anxiety, sleep...)"
          className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-[#E9DCCB] focus:border-[#176B67] bg-white text-base shadow-sm outline-hidden"
        />
      </div>

      {/* Category Filters */}
      <div className="flex items-center justify-center flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              selectedCategory === cat
                ? 'bg-[#176B67] text-white shadow-xs'
                : 'bg-[#DDEFE8]/60 text-[#176B67] hover:bg-[#DDEFE8]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Articles Grid */}
      {filteredArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((art) => (
            <ResourceCard
              key={art.slug}
              slug={art.slug}
              category={art.category}
              title={art.title}
              description={art.description}
              readTime={art.readTime}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 space-y-4 bg-white rounded-3xl border border-[#E9DCCB]">
          <p className="text-lg text-[#1F2933]/70 font-serif">
            No resources found matching your search.
          </p>
          <button
            onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
            className="text-xs font-bold text-[#176B67] underline"
          >
            Reset Search Filters
          </button>
        </div>
      )}

    </div>
  );
}
