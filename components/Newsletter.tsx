
import React from 'react';
import { Send } from 'lucide-react';

const Newsletter: React.FC = () => {
  return (
    <section className="py-10 px-6 bg-white relative">
      <div className="max-w-5xl mx-auto rounded-[60px] bg-gradient-to-br from-[#FFE8E0] via-[#FDFBF7] to-[#E8F4FF] p-10 lg:p-14 text-center relative overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.05)] border-4 border-white">
        {/* Decorative background bubbles */}
        <div className="absolute -top-10 -left-10 w-64 h-64 bg-white/60 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-[#FF8F7A]/30 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-2xl mx-auto">
          <span className="text-6xl mb-8 block animate-bounce">🎁</span>
          <h2 className="text-3xl lg:text-4xl font-extrabold font-nunito mb-8 text-[#3A3A3A] tracking-tight">
            Join the Babykins family and get <span className="text-[#FF8F7A]">gentle surprises</span> 💛
          </h2>
          <p className="text-xl text-[#3A3A3A]/70 mb-12 font-medium">
            Expert parenting tips, early access to new collections, and a sweet <span className="text-[#FF8F7A] font-bold">10% Off</span> your first order.
          </p>

          <form className="flex flex-col sm:flex-row gap-5 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 py-5 px-10 rounded-full border-2 border-white bg-white/90 backdrop-blur focus:border-[#FF8F7A] focus:ring-4 focus:ring-[#FF8F7A]/10 outline-none transition-all duration-300 shadow-xl text-sm font-bold"
            />
            <button className="group bg-[#FF8F7A] text-white py-5 px-12 rounded-full font-bold shadow-2xl shadow-[#FF8F7A]/30 hover:scale-105 transition-all duration-300 active:scale-95 flex items-center justify-center gap-3 overflow-hidden relative">
              <span className="relative z-10">Join Us</span>
              <Send className="w-5 h-5 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
          <p className="mt-8 text-xs text-[#3A3A3A]/50 font-bold uppercase tracking-widest">Only sweet news, we promise! 🧸</p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
