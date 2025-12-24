
import React from 'react';
import { Heart } from 'lucide-react';

const InstagramStrip: React.FC = () => {
  const images = [
    'https://picsum.photos/seed/babyinsta1/400/400',
    'https://picsum.photos/seed/babyinsta2/400/400',
    'https://picsum.photos/seed/babyinsta3/400/400',
    'https://picsum.photos/seed/babyinsta4/400/400',
    'https://picsum.photos/seed/babyinsta5/400/400',
    'https://picsum.photos/seed/babyinsta6/400/400',
  ];

  return (
    <section className="py-12 bg-white">
      <div className="px-6 mb-8 text-center">
        <h3 className="text-2xl font-bold font-nunito mb-2">Join Our Little Community</h3>
        <p className="text-sm text-[#3A3A3A]/50">Share your moments with #BabyKinsFamily</p>
      </div>
      <div className="flex overflow-hidden">
        {images.map((img, idx) => (
          <div key={idx} className="relative group flex-1 min-w-[200px] aspect-square overflow-hidden cursor-pointer">
            <img src={img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125" />
            <div className="absolute inset-0 bg-[#FF8F7A]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="bg-white p-3 rounded-full scale-50 group-hover:scale-100 transition-transform duration-500">
                <Heart className="w-6 h-6 text-[#FF8F7A] fill-[#FF8F7A]" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InstagramStrip;
