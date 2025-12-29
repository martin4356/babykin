
import React from 'react';
import { Heart, Instagram } from 'lucide-react';

const InstagramStrip: React.FC = () => {
  const images = [
    { url: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=400&h=400&q=80', rotate: '-3deg' },
    { url: 'https://images.unsplash.com/photo-1544126592-807daa2b567b?auto=format&fit=crop&w=400&h=400&q=80', rotate: '2deg' },
    { url: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=400&h=400&q=80', rotate: '-2deg' },
    { url: 'https://images.unsplash.com/photo-1522771935876-2497116a7a9e?auto=format&fit=crop&w=400&h=400&q=80', rotate: '4deg' },
    { url: 'https://images.unsplash.com/photo-1555133539-7a355625ee3e?auto=format&fit=crop&w=400&h=400&q=80', rotate: '-4deg' },
  ];

  return (
    <section className="py-10 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h3 className="text-3xl lg:text-4xl font-black font-nunito text-[#332D2D] tracking-tight">Join Our Little <span className="text-[#FF6B6B]">Community</span></h3>
          <p className="text-[#332D2D]/50 font-black text-[11px] uppercase tracking-widest mt-2 flex items-center justify-center md:justify-start gap-2">
            <Instagram className="w-4 h-4 text-[#FF6B6B]" /> Share your moments with #BabykinsFamily
          </p>
        </div>
        <button className="bg-[#332D2D] text-white px-8 py-4 rounded-full font-black text-xs uppercase tracking-widest hover:bg-[#FF6B6B] transition-all shadow-xl">
          Follow @BabykinsIndia
        </button>
      </div>

      <div className="flex justify-center gap-4 lg:gap-10 px-6 overflow-x-auto hide-scrollbar pb-10">
        {images.map((img, idx) => (
          <div 
            key={idx} 
            className="relative flex-none w-[200px] sm:w-[240px] p-3 bg-white shadow-2xl rounded-2xl cursor-pointer group hover:z-20 transition-all duration-500 hover:scale-110"
            style={{ transform: `rotate(${img.rotate})` }}
          >
            <div className="aspect-square overflow-hidden rounded-xl bg-[#FDF8F3] relative">
              <img src={img.url} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125" />
              <div className="absolute inset-0 bg-[#FF6B6B]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Heart className="w-12 h-12 text-white fill-white animate-pulse" />
              </div>
            </div>
            <div className="mt-4 flex justify-between items-center px-1">
               <div className="flex -space-x-1">
                 {[1,2,3].map(i => <div key={i} className="w-5 h-5 rounded-full border border-white bg-[#FFCFBC]" />)}
               </div>
               <span className="text-[10px] font-black text-[#332D2D]/20 uppercase tracking-tighter">Loved by Parents</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InstagramStrip;
