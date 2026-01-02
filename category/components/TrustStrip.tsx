
import React from 'react';
import { ShieldCheck, Leaf, Heart, MapPin, Award } from 'lucide-react';

const TrustStrip: React.FC = () => {
  const trustSignals = [
    { icon: <ShieldCheck className="w-6 h-6" />, text: "Pediatrician Approved", color: "#FF6B6B", bg: "#FFCFBC" },
    { icon: <Leaf className="w-6 h-6" />, text: "BPA-Free Organic", color: "#059669", bg: "#A7F3D0" },
    { icon: <MapPin className="w-6 h-6" />, text: "Made for India", color: "#2563EB", bg: "#E0E7FF" },
    { icon: <Heart className="w-6 h-6" />, text: "50k+ Happy Parents", color: "#DB2777", bg: "#FCE7F3" },
    { icon: <Award className="w-6 h-6" />, text: "Skin-Safe Tested", color: "#D97706", bg: "#FEF3C7" },
  ];

  return (
    <section className="bg-white py-12 border-y border-[#FFCFBC]/20">
      <div className="max-w-7xl mx-auto px-6 overflow-x-auto hide-scrollbar">
        <div className="flex justify-between items-center gap-6 min-w-max">
          {trustSignals.map((signal, idx) => (
            <div 
              key={idx} 
              className="flex items-center gap-4 px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-shadow group cursor-default"
              style={{ backgroundColor: `${signal.bg}30` }}
            >
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center transition-transform group-hover:rotate-12"
                style={{ backgroundColor: signal.bg, color: signal.color }}
              >
                {signal.icon}
              </div>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#332D2D]/80">
                {signal.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
