
import React, { useState } from 'react';
import { ChevronRight, ArrowLeft, CheckCircle } from 'lucide-react';
import { PRODUCTS } from '../constants';
import confetti from 'canvas-confetti';

const QuizSection: React.FC = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      q: "How old is your little miracle?",
      options: ["Newborn (0-6M)", "Infant (6-12M)", "Toddler (1-2Y)", "Preschooler (2Y+)"]
    },
    {
      q: "What's your biggest need right now?",
      options: ["Gentle Bathing", "Better Sleep", "Smooth Feeding", "Play & Grow"]
    }
  ];

  const handleSelect = (option: string) => {
    const newAnswers = { ...answers, [step]: option };
    setAnswers(newAnswers);
    
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setShowResult(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FF8F7A', '#FFD6C9']
      });
    }
  };

  return (
    <section className="py-24 bg-[#DCEEFF]/30">
      <div className="max-w-4xl mx-auto px-6">
        {!showResult ? (
          <div className="bg-white rounded-[50px] p-12 lg:p-20 shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-2 bg-[#F6F1EB]">
                <div 
                  className="h-full bg-[#FF8F7A] transition-all duration-700"
                  style={{ width: `${((step + 1) / questions.length) * 100}%` }}
                />
             </div>

             <div className="flex justify-between items-center mb-12">
                <button 
                  onClick={() => step > 0 && setStep(step - 1)}
                  className={`text-[#2F2F2F]/40 flex items-center gap-2 font-bold text-xs uppercase tracking-widest hover:text-[#2F2F2F] transition-colors ${step === 0 ? 'opacity-0 pointer-events-none' : ''}`}
                >
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
                <span className="text-xs font-bold text-[#FF8F7A] uppercase tracking-[0.2em]">Question {step + 1} of 2</span>
             </div>

             <h2 className="text-3xl lg:text-5xl font-extrabold text-[#2F2F2F] mb-12 font-nunito text-center leading-tight">
                {questions[step].q}
             </h2>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {questions[step].options.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => handleSelect(opt)}
                    className="group relative bg-[#F6F1EB]/50 border-2 border-transparent hover:border-[#FFD6C9] hover:bg-white p-8 rounded-[30px] transition-all duration-300 flex items-center justify-between text-left shadow-sm hover:shadow-xl"
                  >
                    <span className="text-lg font-extrabold text-[#2F2F2F]">{opt}</span>
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center transition-all group-hover:bg-[#FF8F7A] group-hover:text-white group-hover:rotate-[-45deg]">
                       <ChevronRight className="w-5 h-5" />
                    </div>
                  </button>
                ))}
             </div>
          </div>
        ) : (
          <div className="bg-white rounded-[50px] p-12 lg:p-20 shadow-2xl text-center animate-[fadeIn_0.5s_ease-out]">
            <div className="w-24 h-24 bg-[#CFE7D6] rounded-full flex items-center justify-center mx-auto mb-8">
               <CheckCircle className="w-12 h-12 text-[#2F2F2F]" />
            </div>
            <h2 className="text-4xl font-extrabold mb-4 font-nunito">Your Personalized Bundle</h2>
            <p className="text-[#2F2F2F]/60 mb-12 max-w-lg mx-auto font-medium">
              Based on your baby being a <span className="text-[#FF8F7A] font-bold">{answers[0]}</span> with <span className="text-[#FF8F7A] font-bold">{answers[2]}</span>, we've curated these perfect essentials:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
               {PRODUCTS.slice(0, 3).map(prod => (
                  <div key={prod.id} className="group cursor-pointer">
                    <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-[#F6F1EB] mb-4 shadow-inner">
                      <img src={prod.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <h4 className="font-bold text-sm mb-1">{prod.name}</h4>
                    <p className="text-lg font-extrabold text-[#FF8F7A]">₹{prod.price}</p>
                  </div>
               ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#FF8F7A] text-white px-12 py-5 rounded-full font-bold shadow-2xl shadow-[#FF8F7A]/30 hover:scale-105 transition-all">Add Bundle to Cart (Save 10%)</button>
              <button onClick={() => {setShowResult(false); setStep(0); setAnswers({});}} className="bg-[#F6F1EB] text-[#2F2F2F] px-12 py-5 rounded-full font-bold hover:bg-[#FFD6C9] transition-all">Retake Quiz</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default QuizSection;
