
import React, { useState, useEffect } from 'react';
import { Heart, ArrowRight, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

const SLIDES = [
  {
    tag: "Cloud Soft Comfort",
    title: "Gentle Hugs For Tiny Ones",
    subtitle: "Premium organic cotton essentials that feel as light as air. Loved by 50k+ Indian moms.",
    img: "https://images.unsplash.com/photo-1544126592-807daa2b567b?auto=format&fit=crop&w=1000&q=80",
    theme: "from-[#FFCFBC] to-[#FF6B6B]",
    icon: "☁️"
  },
  {
    tag: "Smart Playtime",
    title: "Unlock Their Little Magic",
    subtitle: "Eco-toys designed for small hands and big imaginations. Safe, colorful, and non-toxic.",
    img: "https://images.unsplash.com/photo-1555133539-7a355625ee3e?auto=format&fit=crop&w=1000&q=80",
    theme: "from-[#A7F3D0] to-[#10B981]",
    icon: "🎨"
  },
  {
    tag: "Pure Nutrition",
    title: "Yummy Bites, Pure Love",
    subtitle: "Fresh organic meals sourced from Indian farms. No preservatives, just real food goodness.",
    img: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=1000&q=80",
    theme: "from-[#FEF3C7] to-[#F59E0B]",
    icon: "🍼"
  }
];

const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[500px] bg-[#FDF8F3] overflow-hidden">
      {/* Animated Vibrant Backgrounds */}
      {SLIDES.map((slide, idx) => (
        <div 
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ${idx === current ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className={`blob-vibrant w-[600px] h-[600px] top-[-100px] right-[-100px] bg-gradient-to-br ${slide.theme}`} />
          <div className={`blob-vibrant w-[400px] h-[400px] bottom-[-100px] left-[-100px] bg-gradient-to-tr ${slide.theme} opacity-30`} />
        </div>
      ))}

      {/* Decorative Baby Illustrations (Doodles) */}
      <div className="absolute top-10 left-10 opacity-30 hidden lg:block float-cute">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <circle cx="30" cy="30" r="20" stroke="#FF6B6B" strokeWidth="2" strokeDasharray="4 4" />
          <path d="M25 25 L35 35 M35 25 L25 35" stroke="#FF6B6B" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>

      <div className="relative w-full h-full max-w-7xl mx-auto px-6 lg:px-12 flex items-center z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center w-full">
          {/* Text Content */}
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 shadow-sm border border-[#FF6B6B]/20 mb-6 bouncy-pop">
              <span className="text-xl">{SLIDES[current].icon}</span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF6B6B]">{SLIDES[current].tag}</span>
              <Sparkles className="w-3 h-3 text-[#FF6B6B]" />
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-extrabold text-[#332D2D] leading-[1.1] mb-6 font-nunito tracking-tight">
              {SLIDES[current].title.split(' ').map((word, i) => (
                <span key={i} className={i % 2 !== 0 ? 'text-[#FF6B6B]' : ''}>
                  {word}{' '}
                </span>
              ))}
            </h1>
            
            <p className="text-lg text-[#332D2D]/70 mb-8 font-medium max-w-md leading-relaxed mx-auto md:mx-0">
              {SLIDES[current].subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="group relative bg-[#FF6B6B] text-white px-10 py-4 rounded-full font-bold shadow-xl shadow-[#FF6B6B]/20 transition-all duration-300 hover:scale-105 hover:-translate-y-1 overflow-hidden flex items-center justify-center gap-2">
                <span className="relative z-10">Shop Bestsellers</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white text-[#332D2D] px-10 py-4 rounded-full font-bold border-2 border-[#FFCFBC] hover:bg-[#FFCFBC]/10 transition-all duration-300">
                Baby Milestones
              </button>
            </div>
          </div>

          {/* Image Content - Teddy Removed, Replaced with Sticker Style Illustration */}
          <div className="hidden md:block relative h-[400px]">
            <div className="w-full h-full squircle bg-white p-4 shadow-2xl relative z-10 overflow-hidden group">
               <img 
                src={SLIDES[current].img} 
                alt="Gentle Baby Care" 
                className="w-full h-full object-cover squircle transition-transform duration-1000 group-hover:scale-105"
              />
               {/* New Sticker Illustration instead of Teddy */}
               <div className="absolute top-6 right-6 w-20 h-20 bg-[#FEF3C7] rounded-[24px] flex flex-col items-center justify-center shadow-lg border-2 border-white rotate-12 bouncy-pop">
                  <span className="text-2xl">🍯</span>
                  <span className="text-[8px] font-black uppercase text-[#D97706]">Sweet!</span>
               </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-[#A7F3D0] rounded-full flex items-center justify-center text-3xl float-cute shadow-xl border-4 border-white z-20">
              ⭐
            </div>
            
            {/* Added decorative background doodles */}
            <div className="absolute -right-10 bottom-10 opacity-20">
              <svg width="120" height="120" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="50" stroke="#FF6B6B" strokeWidth="2" strokeDasharray="10 5" />
                <path d="M40,60 Q60,40 80,60" stroke="#FF6B6B" strokeWidth="4" fill="none" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Controls */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-8">
        <button onClick={() => setCurrent(p => (p - 1 + SLIDES.length) % SLIDES.length)} className="p-2 rounded-full hover:bg-white/50 transition-colors">
          <ChevronLeft className="w-6 h-6 text-[#FF6B6B]" />
        </button>
        <div className="flex gap-2">
          {SLIDES.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} className={`h-2 rounded-full transition-all duration-500 ${current === i ? 'w-10 bg-[#FF6B6B]' : 'w-2 bg-[#FF6B6B]/20'}`} />
          ))}
        </div>
        <button onClick={() => setCurrent(p => (p + 1) % SLIDES.length)} className="p-2 rounded-full hover:bg-white/50 transition-colors">
          <ChevronRight className="w-6 h-6 text-[#FF6B6B]" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
