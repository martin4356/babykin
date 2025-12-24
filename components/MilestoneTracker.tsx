
import React, { useState } from 'react';
import { MILESTONES } from '../constants';
import { Milestone, Product } from '../types';
import { Star, ShoppingCart } from 'lucide-react';

const MilestoneTracker: React.FC = () => {
  const [activeId, setActiveId] = useState(MILESTONES[0].id);
  const activeMilestone = MILESTONES.find(m => m.id === activeId) || MILESTONES[0];

  return (
    <section className="py-24 bg-[#F6F1EB]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-nunito mb-4">Track Your Baby's Beautiful Journey</h2>
          <p className="text-[#3A3A3A]/70">Select your baby's age to see recommendations for their stage.</p>
        </div>

        {/* Tracker UI */}
        <div className="relative mb-20">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-[#DCEEFF] -translate-y-1/2 rounded-full overflow-hidden">
             <div 
              className="h-full bg-[#FF8F7A] transition-all duration-1000 ease-out"
              style={{ width: `${(MILESTONES.indexOf(activeMilestone) / (MILESTONES.length - 1)) * 100}%` }}
             />
          </div>
          
          <div className="relative flex justify-between items-center">
            {MILESTONES.map((m) => (
              <button
                key={m.id}
                onClick={() => setActiveId(m.id)}
                className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 border-4 ${
                  activeId === m.id ? 'bg-[#FF8F7A] border-[#FF8F7A] scale-125 shadow-xl' : 'bg-white border-[#DCEEFF] hover:border-[#FFD6C9]'
                }`}
              >
                <span className="text-2xl">{m.icon}</span>
                <span className={`absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm font-bold ${
                  activeId === m.id ? 'text-[#FF8F7A]' : 'text-[#3A3A3A]/40'
                }`}>
                  {m.age}
                </span>
                {activeId === m.id && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 animate-bounce">
                    ✨
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Milestone Detail Card */}
        <div className="bg-white rounded-[40px] p-10 shadow-2xl shadow-beige-300 grid md:grid-cols-2 gap-12 items-center transition-all duration-700">
          <div className="animate-[fadeIn_0.5s_ease-out]">
            <span className="text-[#FF8F7A] font-bold text-lg mb-2 block">{activeMilestone.age} Milestone</span>
            <h3 className="text-3xl font-bold font-nunito mb-4">{activeMilestone.title}</h3>
            <p className="text-[#3A3A3A]/70 leading-relaxed text-lg mb-8">
              {activeMilestone.description}
            </p>
            <div className="flex items-center gap-4 p-4 bg-[#CFE7D6]/20 rounded-2xl border border-[#CFE7D6]/50">
              <span className="text-2xl">🎉</span>
              <p className="text-sm font-medium">Keep track of every little move! Your baby is doing great.</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-[#3A3A3A] mb-6 flex items-center gap-2">
              <Star className="w-4 h-4 text-[#FF8F7A] fill-[#FF8F7A]" />
              Perfect for this stage
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {activeMilestone.recommendations.map((prod) => (
                <div key={prod.id} className="group cursor-pointer">
                   <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-[#F6F1EB] relative mb-3">
                      <img src={prod.image} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                      <button className="absolute bottom-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                        <ShoppingCart className="w-4 h-4 text-[#FF8F7A]" />
                      </button>
                   </div>
                   <h5 className="text-xs font-bold line-clamp-1">{prod.name}</h5>
                   <p className="text-xs text-[#FF8F7A] font-bold">₹{prod.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default MilestoneTracker;
