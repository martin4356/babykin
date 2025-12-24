
import React from 'react';
import { CATEGORIES } from '../constants';

const CategoryGrid: React.FC = () => {
  return (
    <section className="py-20 bg-[#F6F1EB]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 font-nunito">Shop by Category</h2>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8">
          {CATEGORIES.map((cat) => (
            <div key={cat.id} className="group flex flex-col items-center cursor-pointer">
              <div 
                className="relative w-24 h-24 rounded-full flex items-center justify-center transition-all duration-500 bg-white shadow-md group-hover:-translate-y-4"
                style={{ backgroundColor: `${cat.color}30` }}
              >
                <div className="text-4xl transform transition-transform duration-500 group-hover:scale-125 group-hover:rotate-6">
                  {cat.icon}
                </div>
                {/* Decorative Pastel Ring on Hover */}
                <div className="absolute inset-0 border-2 border-dashed border-[#FF8F7A]/0 group-hover:border-[#FF8F7A]/40 rounded-full group-hover:rotate-180 transition-all duration-1000 scale-110" />
                {/* Giggles/Sparkles Placeholder (Simple dots) */}
                <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  ✨
                </div>
              </div>
              <span className="mt-6 font-semibold text-sm text-[#3A3A3A] group-hover:text-[#FF8F7A] transition-colors">
                {cat.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
