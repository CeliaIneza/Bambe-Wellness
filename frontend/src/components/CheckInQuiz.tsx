'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { Sparkles, CheckCircle2, ArrowRight, ArrowLeft, RotateCcw, AlertTriangle, Heart, Shield } from 'lucide-react';

interface Question {
  id: number;
  textEn: string;
  textRw: string;
  options: { labelEn: string; labelRw: string; score: number }[];
}

const quizQuestions: Question[] = [
  {
    id: 1,
    textEn: "Over the past two weeks, how often have you felt overwhelmed by your daily tasks or thoughts?",
    textRw: "Mu cyumweru gishize, inshuro zingahe wumvise imirimo cyangwa ibitekerezo byawe biremereye cyane?",
    options: [
      { labelEn: "Not at all", labelRw: "Nta na rimwe", score: 0 },
      { labelEn: "Several days", labelRw: "Iminsi imwe n'imwe", score: 1 },
      { labelEn: "More than half the days", labelRw: "Muri icyo gihe hafi cyose", score: 2 },
      { labelEn: "Nearly every single day", labelRw: "Buri munsi hafi ya wose", score: 3 },
    ],
  },
  {
    id: 2,
    textEn: "How would you describe your sleep quality and ease of resting lately?",
    textRw: "Ubwitegure n'ibitotsi byawe wabyifata ute mu minsi ishize?",
    options: [
      { labelEn: "Good and peaceful sleep", labelRw: "Nsinzira neza ntasakambye", score: 0 },
      { labelEn: "Trouble sleeping occasionally", labelRw: "Ngorwa no gusinzira rimwe na rimwe", score: 1 },
      { labelEn: "Frequent restlessness or overthinking", labelRw: "Ntasinzira kenshi kubera ibitekerezo", score: 2 },
      { labelEn: "Extremely difficult to sleep or rest", labelRw: "Bimfitiye ingorane zikomeye gusinzira", score: 3 },
    ],
  },
  {
    id: 3,
    textEn: "How connected do you feel to friends, family, or people around you?",
    textRw: "Wumva unyuzwe ute n'imibano yawe n'inshuti n'umuryango?",
    options: [
      { labelEn: "Well connected and supported", labelRw: "Mfitanye imibano myiza n'ubufasha", score: 0 },
      { labelEn: "A bit disconnected at times", labelRw: "Ngira urungu rimwe na rimwe", score: 1 },
      { labelEn: "Mostly isolated or alone", labelRw: "Ndumva ndi nka wedinyine kenshi", score: 2 },
      { labelEn: "Completely lonely and unassisted", labelRw: "Ndumva natagira n'umwe unyumva", score: 3 },
    ],
  },
  {
    id: 4,
    textEn: "How often do you feel exhausted or drained, even after resting?",
    textRw: "Inshuro zingahe wumva unaniwe mu mutwe, hatitawe ku rugero rwo kuruhuka?",
    options: [
      { labelEn: "Rarely or never", labelRw: "Gake cyane cyangwa ntanubwo", score: 0 },
      { labelEn: "Sometimes during busy days", labelRw: "Rimwe na rimwe mu minsi y'akazi", score: 1 },
      { labelEn: "Frequently during the week", labelRw: "Kenshi mu cyumweru", score: 2 },
      { labelEn: "Almost constantly exhausted", labelRw: "Nhorana umunaniro ukabije (Burnout)", score: 3 },
    ],
  },
  {
    id: 5,
    textEn: "How easy has it been to concentrate on your work, studies, or daily activities?",
    textRw: "Bikworohera ute gushyira igitekerezo ku masomo, akazi cyangwa ibikorwa bya buri munsi?",
    options: [
      { labelEn: "Easy to focus", labelRw: "Birashoboka cyane kwita ku bintu", score: 0 },
      { labelEn: "Slightly distracted sometimes", labelRw: "Nyandagara rimwe na rimwe", score: 1 },
      { labelEn: "Hard to focus or make decisions", labelRw: "Birangora gushyira igitekerezo ku kintu", score: 2 },
      { labelEn: "Extremely hard to function or stay present", labelRw: "Birangora cyane gukora icyo ari cyo cyose", score: 3 },
    ],
  },
];

export function CheckInQuiz() {
  const { lang, t } = useLanguage();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSelectOption = (questionId: number, score: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: score }));
  };

  const currentQ = quizQuestions[currentStep];
  const selectedScore = answers[currentQ?.id];

  const totalScore = Object.values(answers).reduce((sum, score) => sum + score, 0);

  const handleNext = () => {
    if (currentStep < quizQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const handleRestart = () => {
    setAnswers({});
    setCurrentStep(0);
    setIsSubmitted(false);
  };

  // Evaluation categories:
  let resultTitleEn = "";
  let resultTitleRw = "";
  let resultDescEn = "";
  let resultDescRw = "";
  let strainLevel: 'low' | 'moderate' | 'high' = 'low';

  if (totalScore <= 3) {
    strainLevel = 'low';
    resultTitleEn = "Mild or Balanced Emotional State";
    resultTitleRw = "Ubuzima Bwo Mu Mutwe Buri Mu Kipimo Gikwiriye";
    resultDescEn = "Your answers suggest you are currently managing daily stress fairly well. Continuing simple self-care routines, staying connected with loved ones, and taking regular breaks can help you maintain your wellbeing.";
    resultDescRw = "Ibisubizo byawe bigaragaza ko uri guhangana neza n'umuhangayiko w'ubuzima. Gukomeza kwita ku mubiri n'inshuti bizagufasha gukomeza kumera neza.";
  } else if (totalScore <= 8) {
    strainLevel = 'moderate';
    resultTitleEn = "Moderate Emotional Strain";
    resultTitleRw = "Urugero Ruringaniye Rwo Guhangayika";
    resultDescEn = "Your answers suggest you may be carrying some emotional weight or stress right now. Taking time to process what you're feeling and exploring our guided resources or talking to someone early can help prevent feeling burnt out.";
    resultDescRw = "Ibisubizo byawe bigaragaza ko uremerewe no guhangayika mu rugero ruringaniye. Gufata umwanya wo kuruhuka no gusoma inyandiko cyangwa kuvugana n'umuntu bizagufasha.";
  } else {
    strainLevel = 'high';
    resultTitleEn = "High Emotional Strain";
    resultTitleRw = "Urugero Ukabije Rwo Guhangayika n'Umunaniro";
    resultDescEn = "Your answers suggest you may be experiencing a higher level of emotional strain right now. Please remember that you don't have to carry this alone. Reaching out to a compassionate professional or supportive person can make a real difference.";
    resultDescRw = "Ibisubizo byawe bigaragaza ko uremerewe cyane mu bitekerezo n'umutima. Ibuka ko utagomba kubinyuramo wenyine. Kuvugana n'umuntu ubifitiye ubushobozi biragufasha cyane.";
  }

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E9DCCB] shadow-xl max-w-3xl mx-auto">
      
      {!isSubmitted ? (
        <div className="space-y-8">
          
          {/* Header Progress */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-[#176B67]">
              <span>Question {currentStep + 1} of {quizQuestions.length}</span>
              <span>{Math.round(((currentStep + 1) / quizQuestions.length) * 100)}% Completed</span>
            </div>
            <div className="w-full h-2 bg-[#DDEFE8] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#176B67] transition-all duration-300"
                style={{ width: `${((currentStep + 1) / quizQuestions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Question Text */}
          <div className="space-y-3">
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-[#1F2933]">
              {lang === 'en' ? currentQ.textEn : currentQ.textRw}
            </h3>
            <p className="text-xs text-[#1F2933]/60 italic">
              {t.checkIn.quizDisclaimer}
            </p>
          </div>

          {/* Options */}
          <div className="space-y-3">
            {currentQ.options.map((opt, idx) => {
              const isSelected = selectedScore === opt.score;
              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(currentQ.id, opt.score)}
                  className={`w-full text-left p-4 rounded-2xl border-2 transition-all flex items-center justify-between gap-4 font-medium text-sm ${
                    isSelected
                      ? 'border-[#176B67] bg-[#DDEFE8]/40 text-[#176B67] font-semibold shadow-xs'
                      : 'border-[#E9DCCB] hover:border-[#176B67]/50 hover:bg-[#FAF7F0] text-[#1F2933]'
                  }`}
                >
                  <span>{lang === 'en' ? opt.labelEn : opt.labelRw}</span>
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                      isSelected ? 'border-[#176B67] bg-[#176B67] text-white' : 'border-gray-300'
                    }`}
                  >
                    {isSelected && <CheckCircle2 className="w-4 h-4" />}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Nav buttons */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <button
              onClick={handlePrev}
              disabled={currentStep === 0}
              className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-bold text-sm transition-colors ${
                currentStep === 0
                  ? 'opacity-40 cursor-not-allowed text-gray-400'
                  : 'text-[#1F2933] hover:bg-[#E9DCCB]/30'
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{t.checkIn.prevBtn}</span>
            </button>

            {currentStep < quizQuestions.length - 1 ? (
              <button
                onClick={handleNext}
                disabled={selectedScore === undefined}
                className={`inline-flex items-center gap-1.5 bg-[#176B67] hover:bg-[#125552] text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow-md transition-all ${
                  selectedScore === undefined ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <span>{t.checkIn.nextBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={selectedScore === undefined}
                className={`inline-flex items-center gap-1.5 bg-[#176B67] hover:bg-[#125552] text-white px-7 py-3 rounded-xl font-bold text-sm shadow-md transition-all ${
                  selectedScore === undefined ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <span>{t.checkIn.submitBtn}</span>
                <CheckCircle2 className="w-4 h-4" />
              </button>
            )}
          </div>

        </div>
      ) : (
        /* Results View */
        <div className="space-y-8 text-center sm:text-left">
          
          <div className="inline-flex items-center gap-2 bg-[#DDEFE8] text-[#176B67] px-4 py-1.5 rounded-full text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Your Personal Reflection Summary</span>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#1F2933]">
              {lang === 'en' ? resultTitleEn : resultTitleRw}
            </h3>
            <p className="text-base text-[#1F2933]/80 leading-relaxed">
              {lang === 'en' ? resultDescEn : resultDescRw}
            </p>
          </div>

          {/* Strain banner */}
          <div
            className={`p-6 rounded-2xl border ${
              strainLevel === 'high'
                ? 'bg-red-50 border-red-200 text-red-900'
                : strainLevel === 'moderate'
                ? 'bg-amber-50 border-amber-200 text-amber-900'
                : 'bg-emerald-50 border-emerald-200 text-emerald-900'
            }`}
          >
            <div className="flex items-start gap-3">
              {strainLevel === 'high' ? (
                <AlertTriangle className="w-6 h-6 shrink-0 text-red-600 mt-0.5" />
              ) : (
                <Heart className="w-6 h-6 shrink-0 text-[#176B67] mt-0.5" />
              )}
              <div className="space-y-1 text-sm text-left">
                <p className="font-bold">
                  {strainLevel === 'high'
                    ? "Recommended Next Step:"
                    : strainLevel === 'moderate'
                    ? "Helpful Next Step:"
                    : "Maintenance Tip:"}
                </p>
                <p className="leading-relaxed">
                  {strainLevel === 'high'
                    ? "Connecting with a supportive person or healthcare professional can help you navigate this period safely. You don't need a diagnosis to talk to someone."
                    : "Exploring our guided articles on overthinking and stress management can give you practical tools to unwind."}
                </p>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <Link
              href="/support/talk-to-someone"
              className="inline-flex items-center justify-center gap-2 bg-[#176B67] hover:bg-[#125552] text-white px-6 py-3.5 rounded-xl font-bold text-sm shadow-md transition-all"
            >
              <span>Talk to Someone Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/resources"
              className="inline-flex items-center justify-center gap-2 bg-[#DDEFE8] hover:bg-[#176B67] text-[#176B67] hover:text-white px-6 py-3.5 rounded-xl font-bold text-sm transition-all"
            >
              <span>Explore Self-Care Resources</span>
            </Link>
          </div>

          {/* Restart */}
          <div className="pt-4 border-t border-gray-100 flex items-center justify-center sm:justify-start">
            <button
              onClick={handleRestart}
              className="inline-flex items-center gap-2 text-xs font-bold text-[#1F2933]/70 hover:text-[#176B67]"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{t.checkIn.restartBtn}</span>
            </button>
          </div>

        </div>
      )}

    </div>
  );
}
