
import React from 'react';
import { REVIEWS } from '../constants';
import { Quote, Star } from 'lucide-react';

const Reviews: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-nunito mb-2">Loved by 10,000+ Happy Parents</h2>
          <div className="flex justify-center gap-1 mb-4">
             {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-[#FFD6C9] text-[#FFD6C9]" />)}
          </div>
        </div>

        <div className="flex gap-8 overflow-x-auto pb-12 snap-x hide-scrollbar">
          {REVIEWS.map((review) => (
            <div 
              key={review.id} 
              className="min-w-[350px] bg-[#F6F1EB]/50 p-8 rounded-[40px] relative group snap-center border-2 border-transparent transition-all duration-500 hover:bg-white hover:border-[#FFD6C9] hover:shadow-2xl hover:-translate-y-2"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-[#FFD6C9]/30 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex items-center gap-4 mb-6">
                <img src={review.avatar} alt={review.name} className="w-16 h-16 rounded-full border-4 border-white shadow-md group-hover:scale-110 transition-transform" />
                <div>
                  <h4 className="font-bold text-lg">{review.name}</h4>
                  <p className="text-xs text-[#3A3A3A]/40 font-bold uppercase tracking-widest">{review.city}, India</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                 {[...Array(review.rating)].map((_, i) => (
                   <div key={i} className="relative">
                     <Star className="w-4 h-4 fill-[#FF8F7A] text-[#FF8F7A]" />
                     <span className="absolute -top-2 -right-1 text-xs opacity-0 group-hover:opacity-100 transition-all duration-700">❤️</span>
                   </div>
                 ))}
              </div>

              <p className="text-[#3A3A3A]/80 leading-relaxed italic">
                "{review.comment}"
              </p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default Reviews;
