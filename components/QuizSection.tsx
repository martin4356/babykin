
import React from 'react';

const QuizSection: React.FC = () => {
  const options = [
    { title: "Newborn Explorer", desc: "0-6 months old", emoji: "🐣" },
    { title: "Curious Crawler", desc: "6-12 months old", emoji: "👣" },
    { title: "Tiny Toddler", desc: "12-24 months old", emoji: "👶" },
    { title: "Playful Preschooler", desc: "2-4 years old", emoji: "🎨" },
  ];

  return (
    <section className="py-24 bg-[#DCEEFF]/30">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold font-nunito mb-4">Which Baby Are You Shopping For?</h2>
        <p className="text-[#3A3A3A]/60 mb-12">Tap to find the perfect curated bundle for your little one.</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {options.map((opt, idx) => (
            <div 
              key={idx} 
              className="group perspective-1000 cursor-pointer"
            >
              <div className="relative w-full h-64 transition-transform duration-700 preserve-3d group-hover:rotate-y-180">
                {/* Front */}
                <div className="absolute inset-0 bg-white rounded-[40px] shadow-xl flex flex-col items-center justify-center p-8 backface-hidden border-2 border-transparent group-hover:border-[#FFD6C9]">
                  <span className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-500">{opt.emoji}</span>
                  <h3 className="text-xl font-bold font-nunito">{opt.title}</h3>
                  <p className="text-sm text-[#3A3A3A]/50">{opt.desc}</p>
                </div>
                {/* Back */}
                <div className="absolute inset-0 bg-[#FFD6C9] rounded-[40px] flex flex-col items-center justify-center p-8 rotate-y-180 backface-hidden shadow-2xl">
                  <span className="text-white font-bold text-center mb-4">We've found 12 items your baby will love!</span>
                  <button className="bg-white text-[#FF8F7A] px-6 py-2 rounded-full font-bold text-sm shadow-lg hover:scale-105 transition-transform">
                    Show Bundle
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}</style>
    </section>
  );
};

export default QuizSection;
