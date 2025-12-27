
import React, { useState } from 'react';
import { REVIEWS } from '../constants';
import { Quote, Star, ChevronRight, ChevronLeft } from 'lucide-react';

const Reviews: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section className="py-24 bg-[#F6F1EB]/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold font-nunito mb-4 tracking-tight">Parents Who Gave Us 5 Stars</h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="flex gap-1">
               {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-[#FFD6C9] text-[#FFD6C9]" />)}
            </div>
            <span className="text-lg font-bold text-[#2F2F2F]">4.9/5 from 12,842 verified parents</span>
          </div>
        </div>

        <div className="relative">
          <div className="flex gap-8 overflow-x-auto pb-12 pt-4 px-4 snap-x hide-scrollbar scroll-smooth">
            {REVIEWS.map((review) => (
              <div 
                key={review.id} 
                className={`min-w-[320px] md:min-w-[400px] bg-white p-10 rounded-[40px] relative group snap-center border-2 border-transparent transition-all duration-500 hover:border-[#FFD6C9] hover:shadow-2xl hover:-translate-y-2 flex flex-col h-fit ${expandedId === review.id ? 'z-10 scale-105 shadow-2xl' : ''}`}
              >
                <Quote className="absolute top-8 right-10 w-16 h-16 text-[#FFD6C9]/30 transition-transform duration-700 group-hover:scale-125 group-hover:rotate-12" />
                
                <div className="flex items-center gap-5 mb-8">
                  <div className="relative">
                    <img src={review.avatar} alt={review.name} className="w-16 h-16 rounded-full border-4 border-[#F6F1EB] shadow-md group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute -bottom-1 -right-1 bg-[#CFE7D6] rounded-full p-1 border-2 border-white">
                       <Star className="w-3 h-3 fill-[#2F2F2F] text-[#2F2F2F]" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl leading-tight">{review.name}</h4>
                    <p className="text-[10px] text-[#2F2F2F]/40 font-bold uppercase tracking-[0.2em]">{review.city}, India</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-6">
                   {[...Array(review.rating)].map((_, i) => (
                     <div key={i} className="relative">
                       <Star className="w-4 h-4 fill-[#FF8F7A] text-[#FF8F7A]" />
                       <span className="absolute -top-3 -right-2 text-xs opacity-0 group-hover:opacity-100 transition-all duration-700 scale-0 group-hover:scale-100">❤️</span>
                     </div>
                   ))}
                </div>

                <div className={`overflow-hidden transition-all duration-500 ${expandedId === review.id ? 'max-h-[500px]' : 'max-h-[80px]'}`}>
                  <p className="text-[#2F2F2F]/80 leading-relaxed font-medium text-lg italic mb-6">
                    "{review.comment} I was skeptical at first about switching brands, but BabyKins has proven to be the most gentle and effective solution for my little one's diaper rash and daily bath needs."
                  </p>
                </div>
                
                <button 
                  onClick={() => setExpandedId(expandedId === review.id ? null : review.id)}
                  className="mt-2 text-xs font-bold uppercase tracking-widest text-[#FF8F7A] hover:text-[#2F2F2F] transition-colors self-start"
                >
                  {expandedId === review.id ? 'Read Less ↑' : 'Read Full Story →'}
                </button>

                <div className="mt-8 pt-6 border-t border-[#E8DED3]/30 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-[#2F2F2F]/40 uppercase tracking-widest">Purchased: Bamboo Set</span>
                  <div className="text-xs font-bold text-[#CFE7D6] bg-[#CFE7D6]/10 px-3 py-1 rounded-full">✓ Verified Parent</div>
                </div>
              </div>
            ))}
          </div>

          <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 -left-6 -right-6 justify-between pointer-events-none">
             <button className="w-14 h-14 rounded-full bg-white shadow-xl flex items-center justify-center pointer-events-auto hover:bg-[#FF8F7A] hover:text-white transition-all active:scale-90 border border-[#E8DED3]/20">
               <ChevronLeft className="w-6 h-6" />
             </button>
             <button className="w-14 h-14 rounded-full bg-white shadow-xl flex items-center justify-center pointer-events-auto hover:bg-[#FF8F7A] hover:text-white transition-all active:scale-90 border border-[#E8DED3]/20">
               <ChevronRight className="w-6 h-6" />
             </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
