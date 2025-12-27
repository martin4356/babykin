
import React, { useState, useEffect } from 'react';
import { MILESTONES } from '../constants';
import { Milestone, Product } from '../types';
import { Star, ShoppingCart, CheckCircle2, TrendingUp, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

const MilestoneTracker: React.FC = () => {
  const [activeId, setActiveId] = useState(MILESTONES[0].id);
  const [achieved, setAchieved] = useState<number[]>([]);
  
  const activeMilestone = MILESTONES.find(m => m.id === activeId) || MILESTONES[0];

  useEffect(() => {
    const saved = localStorage.getItem('baby_milestones');
    if (saved) setAchieved(JSON.parse(saved));
  }, []);

  const toggleAchieved = (id: number) => {
    let newAchieved = [...achieved];
    if (newAchieved.includes(id)) {
      newAchieved = newAchieved.filter(i => i !== id);
    } else {
      newAchieved.push(id);
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FF6B6B', '#FFCFBC', '#A7F3D0', '#E0E7FF']
      });
    }
    setAchieved(newAchieved);
    localStorage.setItem('baby_milestones', JSON.stringify(newAchieved));
  };

  return (
    <section className="py-28 bg-[#FDF8F3] relative overflow-hidden">
      {/* Decorative Blobs */}
      <div className="blob-vibrant w-96 h-96 bg-[#FFCFBC] opacity-20 -top-20 -left-20" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white rounded-full shadow-sm border border-[#FF6B6B]/20 mb-6 bouncy-pop">
            <Sparkles className="w-4 h-4 text-[#FF6B6B]" />
            <span className="text-[10px] font-black uppercase tracking-widest text-[#FF6B6B]">Milestone Journey</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black font-nunito tracking-tight text-[#332D2D] leading-tight">
            Watch Them <span className="text-[#FF6B6B]">Grow</span>
          </h2>
          <p className="text-[#332D2D]/60 font-bold max-w-xl mx-auto mt-4">Follow your baby's unique development path and find the perfect tools for every new discovery.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Vertical Stepper / Growth Path */}
          <div className="w-full lg:w-1/3 flex flex-col gap-6 relative">
            <div className="absolute left-10 top-0 bottom-0 w-2 bg-white rounded-full hidden md:block" />
            
            {MILESTONES.map((m) => (
              <button
                key={m.id}
                onClick={() => setActiveId(m.id)}
                className={`group relative flex items-center gap-6 p-6 rounded-[35px] transition-all duration-500 text-left border-4 ${
                  activeId === m.id ? 'bg-white border-[#FF6B6B] shadow-2xl -translate-y-1 scale-105' : 'bg-white/40 border-transparent hover:bg-white/80'
                }`}
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl transition-all duration-500 shadow-lg ${
                  activeId === m.id ? 'bg-[#FF6B6B] text-white scale-110 rotate-12' : 'bg-white text-[#332D2D]'
                }`}>
                  {m.icon}
                </div>
                <div>
                  <h4 className={`text-sm font-black uppercase tracking-widest ${activeId === m.id ? 'text-[#FF6B6B]' : 'text-[#332D2D]/40'}`}>
                    {m.age}
                  </h4>
                  <p className="font-black text-[#332D2D]">{m.title}</p>
                </div>
                {achieved.includes(m.id) && (
                  <CheckCircle2 className="absolute top-4 right-4 w-6 h-6 text-[#10B981] animate-bounce" />
                )}
              </button>
            ))}
          </div>

          {/* Active Milestone Card */}
          <div className="flex-1 w-full bg-white rounded-[60px] p-10 md:p-16 shadow-2xl relative overflow-hidden group">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#FFCFBC]/30 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            
            <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <span className="bg-[#FF6B6B] text-white font-black text-[10px] px-4 py-2 rounded-full uppercase tracking-widest shadow-lg">Stage: {activeMilestone.age}</span>
                  <button 
                    onClick={() => toggleAchieved(activeMilestone.id)}
                    className={`p-3 rounded-2xl transition-all duration-300 ${
                      achieved.includes(activeMilestone.id) ? 'bg-[#10B981] text-white shadow-lg' : 'bg-[#FDF8F3] text-[#332D2D]/20 hover:text-[#FF6B6B]'
                    }`}
                  >
                    <CheckCircle2 className="w-6 h-6" />
                  </button>
                </div>
                
                <h3 className="text-4xl lg:text-5xl font-black font-nunito text-[#332D2D] mb-8 leading-tight">{activeMilestone.title}</h3>
                <p className="text-xl text-[#332D2D]/60 font-bold leading-relaxed mb-12 italic">
                  "{activeMilestone.description}"
                </p>
                
                <div className="flex items-center gap-6 p-6 bg-[#A7F3D0]/20 rounded-3xl border-2 border-[#A7F3D0]/40">
                  <span className="text-3xl">💡</span>
                  <p className="text-sm font-black text-[#065F46] leading-snug">
                    <span className="block uppercase text-[10px] opacity-60 mb-1">Parenting Pro Tip</span>
                    Soothe gums. Nap safely.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {activeMilestone.recommendations.map((prod) => (
                  <div key={prod.id} className="group/prod cursor-pointer">
                    <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden bg-[#FDF8F3] shadow-inner mb-6 transition-all duration-500 group-hover/prod:shadow-2xl">
                       <img src={prod.image} className="w-full h-full object-cover group-hover/prod:scale-110 transition-transform duration-700" />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover/prod:opacity-100 transition-opacity" />
                    </div>
                    <h5 className="font-black text-sm text-[#332D2D] mb-2 leading-tight group-hover/prod:text-[#FF6B6B] transition-colors">{prod.name}</h5>
                    <p className="text-lg font-black text-[#FF6B6B]">₹{prod.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MilestoneTracker;
