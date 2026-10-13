
'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || 'https://celia.pythonanywhere.com';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    reason: 'general',
    message: '',
  });

  const [status, setStatus] = useState<
    'idle' | 'submitting' | 'success' | 'error'
  >('idle');

  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch(`${API_BASE_URL}/api/contact/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        let message =
          'We could not send your message. Please check your details and try again.';

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
        setStatus('error');
        return;
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        reason: 'general',
        message: '',
      });
    } catch {
      setErrorMessage(
        'Unable to connect to our server. Please check your internet connection and try again.'
      );
      setStatus('error');
    }
  };

  return (
    <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E9DCCB] shadow-xl max-w-2xl mx-auto">
      {status === 'success' ? (
        <div className="text-center space-y-4 py-8">
          <div className="w-16 h-16 bg-[#DDEFE8] text-[#176B67] rounded-full flex items-center justify-center mx-auto shadow-inner">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <h3 className="text-2xl font-bold font-serif text-[#1F2933]">
            Thank you for reaching out
          </h3>

          <p className="text-[#1F2933]/80 text-sm max-w-md mx-auto leading-relaxed">
            We have received your message. Our team at Bambe Center will
            review your inquiry and get back to you as soon as possible.
          </p>

          <button
            type="button"
            onClick={() => {
              setStatus('idle');
              setErrorMessage('');
            }}
            className="mt-4 inline-flex items-center gap-2 bg-[#176B67] text-white px-6 py-2.5 rounded-xl font-bold text-sm"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label
                htmlFor="contact-name"
                className="block text-xs font-bold uppercase tracking-wider text-[#1F2933]/80"
              >
                Your Full Name <span className="text-[#C83C3C]">*</span>
              </label>

              <input
                id="contact-name"
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Mugisha Jean"
                className="w-full px-4 py-3 rounded-xl border border-[#E9DCCB] focus:border-[#176B67] focus:ring-2 focus:ring-[#176B67]/20 outline-hidden text-sm"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="contact-email"
                className="block text-xs font-bold uppercase tracking-wider text-[#1F2933]/80"
              >
                Email Address <span className="text-[#C83C3C]">*</span>
              </label>

              <input
                id="contact-email"
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                className="w-full px-4 py-3 rounded-xl border border-[#E9DCCB] focus:border-[#176B67] focus:ring-2 focus:ring-[#176B67]/20 outline-hidden text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label
                htmlFor="contact-phone"
                className="block text-xs font-bold uppercase tracking-wider text-[#1F2933]/80"
              >
                Phone Number (Optional)
              </label>

              <input
                id="contact-phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+250 78X XXX XXX"
                className="w-full px-4 py-3 rounded-xl border border-[#E9DCCB] focus:border-[#176B67] focus:ring-2 focus:ring-[#176B67]/20 outline-hidden text-sm"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="contact-reason"
                className="block text-xs font-bold uppercase tracking-wider text-[#1F2933]/80"
              >
                Reason for Contacting{' '}
                <span className="text-[#C83C3C]">*</span>
              </label>

              <select
                id="contact-reason"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-[#E9DCCB] focus:border-[#176B67] focus:ring-2 focus:ring-[#176B67]/20 outline-hidden text-sm bg-white"
              >
                <option value="general">General Questions</option>
                <option value="support">Mental Wellbeing Support</option>
                <option value="partnerships">Partnerships & Outreach</option>
                <option value="professional">Professional Enquiries</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="contact-message"
              className="block text-xs font-bold uppercase tracking-wider text-[#1F2933]/80"
            >
              Your Message <span className="text-[#C83C3C]">*</span>
            </label>

            <textarea
              id="contact-message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="How can we assist you?"
              className="w-full px-4 py-3 rounded-xl border border-[#E9DCCB] focus:border-[#176B67] focus:ring-2 focus:ring-[#176B67]/20 outline-hidden text-sm"
            />
          </div>

          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-amber-700" />

            <span>
              <strong>Important Notice:</strong> Please do not use this
              general contact form for medical emergencies or immediate
              safety crisis situations. For emergency help in Rwanda, call
              112 or 114.
            </span>
          </div>

          {status === 'error' && (
            <div
              role="alert"
              className="p-4 rounded-xl bg-red-50 border border-red-200 text-sm text-red-800"
            >
              {errorMessage}
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full inline-flex items-center justify-center gap-2 bg-[#176B67] hover:bg-[#125552] disabled:opacity-60 disabled:cursor-not-allowed text-white py-4 rounded-xl font-bold text-base shadow-md transition-all"
          >
            <Send className="w-5 h-5" />
            <span>
              {status === 'submitting' ? 'Sending Message...' : 'Send Message'}
            </span>
          </button>
        </form>
      )}
    </div>
  );
}
