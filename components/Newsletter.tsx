
import React from 'react';
import { Send } from 'lucide-react';

const Newsletter: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto rounded-[50px] bg-gradient-to-br from-[#FFD6C9] via-[#F6F1EB] to-[#DCEEFF] p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl">
        {/* Decorative background bubbles */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/40 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-[#FF8F7A]/20 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-2xl mx-auto">
          <span className="text-5xl mb-6 block animate-bounce">💌</span>
          <h2 className="text-4xl font-extrabold font-nunito mb-6 text-[#3A3A3A]">
            Join the BabyKins family and get gentle surprises 💛
          </h2>
          <p className="text-lg text-[#3A3A3A]/70 mb-10">
            Expert parenting tips, early access to new collections, and sweet member-only treats delivered to your inbox.
          </p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 py-4 px-8 rounded-full border-2 border-transparent bg-white focus:border-[#FF8F7A] focus:ring-4 focus:ring-[#FF8F7A]/10 outline-none transition-all duration-300 shadow-lg text-sm"
            />
            <button className="group bg-[#FF8F7A] text-white py-4 px-10 rounded-full font-bold shadow-xl shadow-[#FF8F7A]/20 hover:scale-105 transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 overflow-hidden relative">
              <span className="relative z-10">Join Now</span>
              <Send className="w-4 h-4 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              {/* Heart burst placeholder */}
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
            </button>
          </form>
          <p className="mt-6 text-xs text-[#3A3A3A]/40 font-medium">We promise to only send things that make you smile. No spam, ever.</p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
