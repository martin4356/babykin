
import React from 'react';
import { Heart } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[600px] flex overflow-hidden">
      {/* Left: Image Side */}
      <div className="w-full md:w-1/2 h-full relative overflow-hidden">
        <img 
          src="https://picsum.photos/seed/indianbaby/1200/800" 
          alt="Gentle Baby Care" 
          className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-[20s] ease-linear"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent md:hidden" />
      </div>

      {/* Right: Text Side */}
      <div className="absolute inset-0 md:relative md:w-1/2 h-full bg-[#FFD6C9]/40 flex items-center justify-center px-8 lg:px-20">
        <div className="max-w-xl text-center md:text-left">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 text-[#FF8F7A] text-sm font-semibold mb-6 animate-pulse">
            New Arrival: 100% Organic Cotton Wear
          </span>
          <h1 className="text-4xl lg:text-6xl font-extrabold text-[#3A3A3A] leading-tight mb-6 font-nunito">
            Gentle care for your <span className="text-[#FF8F7A] relative inline-block">little miracle <span className="absolute -bottom-1 left-0 w-full h-2 bg-[#CFE7D6]/50 -z-10 rounded-full"></span></span>
          </h1>
          <p className="text-lg text-[#3A3A3A]/80 mb-10 font-medium">
            Thoughtfully made baby essentials, loved by Indian parents. Safe, soft, and sustainable for the planet your baby will inherit.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="group relative bg-[#FF8F7A] text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-[#FF8F7A]/20 transition-all duration-300 hover:scale-105 hover:-translate-y-1 overflow-hidden">
              <span className="relative z-10">Shop Baby Essentials</span>
              <div className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 opacity-20"></div>
              <Heart className="absolute -top-6 left-1/2 -translate-x-1/2 w-4 h-4 text-white opacity-0 group-hover:opacity-100 group-hover:-top-2 transition-all duration-500" />
            </button>
            <button className="bg-white text-[#3A3A3A] px-8 py-4 rounded-full font-bold border-2 border-transparent hover:border-[#FFD6C9] transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              Track Baby Milestones
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
