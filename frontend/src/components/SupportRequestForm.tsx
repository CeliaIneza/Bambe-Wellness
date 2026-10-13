
'use client';

import React, { useState } from 'react';
import { PhoneCall, CheckCircle2, Heart, Shield } from 'lucide-react';

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || 'https://celia.pythonanywhere.com';

const availableTopics = [
  'Stress',
  'Anxiety',
  'Relationships',
  'School Pressure',
  'Workplace Burnout',
  'Grief & Loss',
  'Family Issues',
  'Loneliness',
  'Life Transitions',
  'Something else',
];

const connectionMethods = [
  {
    id: 'in_person',
    label: 'In Person (Kigali)',
    desc: 'Meet in a comfortable, private physical space',
  },
  {
    id: 'phone',
    label: 'Phone Call',
    desc: 'Direct confidential telephone call',
  },
  {
    id: 'video',
    label: 'Video Call',
    desc: 'Online video conversation',
  },
  {
    id: 'chat',
    label: 'Text Chat',
    desc: 'Private messaging conversation',
  },
];

export function SupportRequestForm() {
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [method, setMethod] = useState('phone');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const toggleTopic = (topic: string) => {
    setSelectedTopics((previous) =>
      previous.includes(topic)
        ? previous.filter((item) => item !== topic)
        : [...previous, topic]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    const payload = {
      name,
      email,
      phone,
      preferred_contact: method,
      topics: selectedTopics,
      message: notes,
    };

    try {
      const response = await fetch(
        `${API_BASE_URL}/api/support-requests/`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        let message =
          'We could not submit your request. Please check your details and try again.';

        try {
          const data = await response.json();

          if (data && typeof data === 'object' && !Array.isArray(data)) {
            const detail = data.detail;
            if (typeof detail === 'string') {
              message = detail;
            }
          }
        } catch {
          // Use the default message if the response is not JSON.
        }

        setErrorMessage(message);
        return;
      }

      setSubmitted(true);
    } catch {
      setErrorMessage(
        'Unable to connect to our server. Please check your internet connection and try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E9DCCB] shadow-xl max-w-3xl mx-auto">
      {submitted ? (
        <div className="text-center space-y-5 py-10">
          <div className="w-20 h-20 bg-[#DDEFE8] text-[#176B67] rounded-full flex items-center justify-center mx-auto shadow-inner">
            <Heart className="w-10 h-10 fill-current" />
          </div>

          <h3 className="text-3xl font-bold font-serif text-[#1F2933]">
            Request Received
          </h3>

          <p className="text-[#1F2933]/80 text-base max-w-lg mx-auto leading-relaxed">
            Thank you for reaching out. You have taken a courageous first
            step. A member of the Bambe Center support team will reach out
            to you discreetly via your preferred contact method ({method}).
          </p>

          <div className="pt-4 p-5 bg-[#FAF7F0] rounded-2xl border border-[#E9DCCB] max-w-md mx-auto text-xs text-[#1F2933]/70 space-y-1">
            <p className="font-bold text-[#176B67]">What happens next?</p>
            <p>
              We review every request with strict confidentiality and
              respect. You will receive a warm, non-judgmental introduction
              message.
            </p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Step 1: Topics */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold font-serif text-[#1F2933] flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#176B67] text-white text-xs flex items-center justify-center">
                1
              </span>
              <span>What topics are on your mind? (Select any that apply)</span>
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
              {availableTopics.map((topic) => {
                const isSelected = selectedTopics.includes(topic);

                return (
                  <button
                    type="button"
                    key={topic}
                    onClick={() => toggleTopic(topic)}
                    aria-pressed={isSelected}
                    className={`px-3.5 py-2.5 rounded-xl border text-xs font-semibold text-left transition-all flex items-center justify-between gap-1.5 ${
                      isSelected
                        ? 'border-[#176B67] bg-[#DDEFE8] text-[#176B67]'
                        : 'border-[#E9DCCB] bg-[#FAF7F0] text-[#1F2933] hover:border-[#176B67]/40'
                    }`}
                  >
                    <span>{topic}</span>
                    {isSelected && (
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-[#176B67]" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Preferred Connection Method */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold font-serif text-[#1F2933] flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#176B67] text-white text-xs flex items-center justify-center">
                2
              </span>
              <span>How would you prefer to connect?</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {connectionMethods.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => setMethod(item.id)}
                  aria-pressed={method === item.id}
                  className={`p-4 rounded-2xl border-2 text-left transition-all space-y-1 ${
                    method === item.id
                      ? 'border-[#176B67] bg-[#DDEFE8]/40 text-[#176B67]'
                      : 'border-[#E9DCCB] hover:border-[#176B67]/50 text-[#1F2933]'
                  }`}
                >
                  <p className="font-bold text-sm">{item.label}</p>
                  <p className="text-xs text-[#1F2933]/70">{item.desc}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold font-serif text-[#1F2933] flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#176B67] text-white text-xs flex items-center justify-center">
                3
              </span>
              <span>Your Details</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label
                  htmlFor="support-name"
                  className="text-xs font-bold uppercase text-[#1F2933]/70"
                >
                  Name or Preferred Alias *
                </label>

                <input
                  id="support-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="How should we address you?"
                  className="w-full px-4 py-3 rounded-xl border border-[#E9DCCB] text-sm focus:border-[#176B67] outline-hidden"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="support-email"
                  className="text-xs font-bold uppercase text-[#1F2933]/70"
                >
                  Email Address *
                </label>

                <input
                  id="support-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-[#E9DCCB] text-sm focus:border-[#176B67] outline-hidden"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="support-phone"
                className="text-xs font-bold uppercase text-[#1F2933]/70"
              >
                Phone Number (Optional)
              </label>

              <input
                id="support-phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+250 78X XXX XXX"
                className="w-full px-4 py-3 rounded-xl border border-[#E9DCCB] text-sm focus:border-[#176B67] outline-hidden"
              />
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="support-notes"
                className="text-xs font-bold uppercase text-[#1F2933]/70"
              >
                Anything else you&apos;d like to share? (Optional)
              </label>

              <textarea
                id="support-notes"
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Share a brief note if you wish..."
                className="w-full px-4 py-3 rounded-xl border border-[#E9DCCB] text-sm focus:border-[#176B67] outline-hidden"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#176B67] font-semibold">
            <Shield className="w-4 h-4 shrink-0" />
            <span>
              Your information is handled with care and should be accessed
              only by authorized support staff.
            </span>
          </div>

          {errorMessage && (
            <div
              role="alert"
              className="p-4 rounded-xl bg-red-50 border border-red-200 text-sm text-red-800"
            >
              {errorMessage}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center gap-2 bg-[#176B67] hover:bg-[#125552] disabled:opacity-60 disabled:cursor-not-allowed text-white py-4 rounded-xl font-bold text-base shadow-md transition-all"
          >
            <PhoneCall className="w-5 h-5" />
            <span>
              {loading ? 'Submitting Request...' : 'Submit Support Request'}
            </span>
          </button>
        </form>
      )}
    </div>
  );
}
