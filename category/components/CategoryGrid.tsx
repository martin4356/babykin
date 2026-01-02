
import React from 'react';
import { CATEGORIES } from '../constants';

const CategoryGrid: React.FC = () => {
  return (
    <section className="py-20 bg-[#FDF8F3] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-black font-nunito tracking-tight text-[#332D2D]">
            Shop By <span className="text-[#FF6B6B]">Happiness</span>
          </h2>
          <p className="text-[#332D2D]/50 font-bold uppercase tracking-widest text-[10px] mt-2">Curated for your little miracle's daily joy</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {CATEGORIES.map((cat) => (
            <div key={cat.id} className="group flex flex-col items-center cursor-pointer relative">
              <div 
                className="relative w-28 h-28 rounded-[40px] flex items-center justify-center transition-all duration-500 bg-white shadow-xl group-hover:-translate-y-4 group-hover:rotate-6 group-hover:shadow-[0_30px_50px_-10px_rgba(255,107,107,0.2)] overflow-hidden border border-white"
              >
                {/* Vibrant Background Circle on Hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                  style={{ backgroundColor: cat.color }}
                />
                <div className="text-5xl transform transition-all duration-500 group-hover:scale-125 z-10">
                  {cat.icon}
                </div>
                {/* Glossy Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent" />
              </div>
              
              <h3 className="mt-6 font-black text-sm text-[#332D2D] uppercase tracking-widest group-hover:text-[#FF6B6B] transition-colors">
                {cat.name}
              </h3>
              
              {/* Highlight Dot */}
              <div 
                className="mt-3 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: cat.color }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
