
import React, { useState, useEffect } from 'react';
import { Heart, ArrowRight, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

const SLIDES = [
  {
    tag: "Cloud Soft Comfort",
    title: "Safety That Clicks. Comfort That Cushions",
    subtitle: "ISOFIX installation for a secure, error-free fit—paired with extra cushioning for superior comfort on every ride",
    img: "https://images.unsplash.com/photo-1544126592-807daa2b567b?auto=format&fit=crop&w=1000&q=80",
    theme: "from-[#FFCFBC] to-[#FF6B6B]",
    icon: "☁️"
  },
  {
    tag: "Smart Playtime",
    title: "Unlock Their Little Magic",
    subtitle: "Crafted from food-grade, BPA-free silicone for safe chewing and effortless cleaning.",
    img: "https://images.unsplash.com/photo-1555133539-7a355625ee3e?auto=format&fit=crop&w=1000&q=80",
    theme: "from-[#A7F3D0] to-[#10B981]",
    icon: "🎨"
  },
  {
    tag: "Pure Nutrition",
    title: "Every Bite, Just Right",
    subtitle: "Our color-changing spoon indicates hot food, while the suction base keeps every meal mess-free.",
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

      <div className="relative w-full h-full max-w-7xl mx-auto px-6 lg:px-12 flex items-center z-10">
        <div className="grid md:grid-cols-2 gap-40 items-center w-full">
          {/* Text Content */}
          <div className="text-center md:text-left ml-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 shadow-sm border border-[#FF6B6B]/20 mb-6 bouncy-pop">
              <span className="text-xl">{SLIDES[current].icon}</span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF6B6B]">{SLIDES[current].tag}</span>
              <Sparkles className="w-3 h-3 text-[#FF6B6B]" />
            </div>
            
            <h1 className="text-3xl lg:text-5xl font-extrabold text-[#332D2D] leading-[1.1] mb-5 font-nunito tracking-tight">
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

          {/* Image Content */}
          <div className="hidden md:block relative h-[400px]">
            <div className="w-full h-full squircle bg-white p-4 shadow-2xl relative z-10">
               <img 
                src={SLIDES[current].img} 
                alt="Cute Baby" 
                className="w-full h-full object-cover squircle transition-opacity duration-1000"
              />
            </div>
            {/* Floating Accents */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#FFCFBC] rounded-full flex items-center justify-center text-4xl animate-bounce shadow-xl border-4 border-white">
              🧸
            </div>
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-[#A7F3D0] rounded-full flex items-center justify-center text-3xl float-cute shadow-xl border-4 border-white">
              ⭐
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
