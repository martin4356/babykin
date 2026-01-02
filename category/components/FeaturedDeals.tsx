
import React, { useState } from 'react';

const FeaturedDeals: React.FC = () => {
  const [offsets, setOffsets] = useState({ card1: { x: 0, y: 0 }, card2: { x: 0, y: 0 } });

  const handleMouseMove = (e: React.MouseEvent, card: 'card1' | 'card2') => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setOffsets(prev => ({ ...prev, [card]: { x: x * 20, y: y * 20 } }));
  };

  const handleMouseLeave = (card: 'card1' | 'card2') => {
    setOffsets(prev => ({ ...prev, [card]: { x: 0, y: 0 } }));
  };

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Deal 1 */}
        <div 
          className="group relative rounded-[40px] overflow-hidden bg-gradient-to-br from-[#FFD6C9] to-[#FF8F7A]/20 p-12 min-h-[400px] cursor-pointer flex flex-col justify-center transition-all duration-500 hover:shadow-2xl hover:shadow-[#FFD6C9]/40"
          onMouseMove={(e) => handleMouseMove(e, 'card1')}
          onMouseLeave={() => handleMouseLeave('card1')}
        >
          <div className="relative z-10 w-full md:w-3/5">
            <span className="bg-white/60 text-[#2F2F2F] font-bold uppercase tracking-widest text-[10px] px-4 py-1.5 rounded-full mb-6 inline-block">Bundle & Save</span>
            <h3 className="text-4xl lg:text-5xl font-extrabold font-nunito mb-6 text-[#2F2F2F] leading-tight">Up to 40% Off Nutrition</h3>
            <p className="text-[#2F2F2F]/60 mb-8 font-medium">Build a personalized health box for your growing star.</p>
            <button className="bg-[#2F2F2F] text-white px-8 py-4 rounded-full text-sm font-bold group-hover:bg-[#FF8F7A] transition-all duration-300 shadow-xl group-hover:-translate-y-1">
              Shop Bundles
            </button>
          </div>
          <div 
            className="absolute right-[-40px] bottom-[-40px] w-3/4 pointer-events-none transition-transform duration-300 ease-out"
            style={{ transform: `translate(${-offsets.card1.x}px, ${-offsets.card1.y}px)` }}
          >
            <img src="https://picsum.photos/seed/babyfoodset/800/800" alt="Product" className="rounded-3xl shadow-2xl transform rotate-6 border-[12px] border-white/50" />
          </div>
        </div>

        {/* Deal 2 */}
        <div 
          className="group relative rounded-[40px] overflow-hidden bg-gradient-to-br from-[#DCEEFF] to-[#CFE7D6]/30 p-12 min-h-[400px] cursor-pointer flex flex-col justify-center transition-all duration-500 hover:shadow-2xl hover:shadow-[#DCEEFF]/40"
          onMouseMove={(e) => handleMouseMove(e, 'card2')}
          onMouseLeave={() => handleMouseLeave('card2')}
        >
          <div className="relative z-10 w-full md:w-3/5">
            <span className="bg-white/60 text-[#2F2F2F] font-bold uppercase tracking-widest text-[10px] px-4 py-1.5 rounded-full mb-6 inline-block">This Week's Top Picks</span>
            <h3 className="text-4xl lg:text-5xl font-extrabold font-nunito mb-6 text-[#2F2F2F] leading-tight">Safe Play Toys Starting ₹299</h3>
            <p className="text-[#2F2F2F]/60 mb-8 font-medium">Eco-friendly wooden toys designed for sensory growth.</p>
            <button className="bg-[#2F2F2F] text-white px-8 py-4 rounded-full text-sm font-bold group-hover:bg-[#FF8F7A] transition-all duration-300 shadow-xl group-hover:-translate-y-1">
              Browse Picks
            </button>
          </div>
          <div 
            className="absolute right-[-40px] bottom-[-40px] w-3/4 pointer-events-none transition-transform duration-300 ease-out"
            style={{ transform: `translate(${-offsets.card2.x}px, ${-offsets.card2.y}px)` }}
          >
            <img src="https://picsum.photos/seed/babytoyset/800/800" alt="Product" className="rounded-3xl shadow-2xl transform -rotate-6 border-[12px] border-white/50" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDeals;
