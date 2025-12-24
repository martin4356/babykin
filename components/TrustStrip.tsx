
import React from 'react';
import { ShieldCheck, Leaf, Heart, MapPin, Award } from 'lucide-react';

const TrustStrip: React.FC = () => {
  const trustSignals = [
    { icon: <ShieldCheck className="w-8 h-8" />, text: "Pediatrician Approved" },
    { icon: <Leaf className="w-8 h-8" />, text: "BPA Free & Organic" },
    { icon: <MapPin className="w-8 h-8" />, text: "Made for Indian Babies" },
    { icon: <Heart className="w-8 h-8" />, text: "10,000+ Happy Parents" },
    { icon: <Award className="w-8 h-8" />, text: "Safe & Tested" },
  ];

  return (
    <section className="bg-[#CFE7D6] py-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-12">
          {trustSignals.map((signal, idx) => (
            <div 
              key={idx} 
              className="flex flex-col items-center text-center gap-3 group"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <div className="text-[#3A3A3A]/70 group-hover:text-[#FF8F7A] transition-colors duration-500 animate-pulse">
                {signal.icon}
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#3A3A3A]/80">
                {signal.text}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* Shine Sweep animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] animate-[shimmer_5s_infinite]" style={{ animationName: 'shimmer' }} />
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-12deg); }
          50% { transform: translateX(200%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
      `}</style>
    </section>
  );
};

export default TrustStrip;
