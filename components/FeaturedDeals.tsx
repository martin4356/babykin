
import React from 'react';

const FeaturedDeals: React.FC = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Deal 1 */}
        <div className="group relative rounded-[30px] overflow-hidden bg-gradient-to-br from-[#FFD6C9] to-[#FF8F7A]/20 p-8 h-[320px] cursor-pointer flex items-center transition-all duration-500 hover:shadow-2xl hover:shadow-[#FFD6C9]/40 hover:-translate-y-1">
          <div className="relative z-10 w-1/2">
            <span className="text-[#3A3A3A] font-bold uppercase tracking-wider text-xs mb-2 block">Premium Collection</span>
            <h3 className="text-3xl font-bold font-nunito mb-4 text-[#3A3A3A]">Up to 40% Off Nutrition</h3>
            <button className="bg-[#3A3A3A] text-white px-6 py-2.5 rounded-full text-sm font-bold group-hover:bg-[#FF8F7A] transition-all duration-300 shadow-lg shadow-[#3A3A3A]/10 group-hover:shadow-[#FF8F7A]/20">
              Shop Now
            </button>
          </div>
          <div className="absolute right-[-20px] bottom-[-20px] w-2/3 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-x-4">
            <img src="https://picsum.photos/seed/babyfood/600/600" alt="Product" className="rounded-2xl shadow-xl transform rotate-3" />
          </div>
        </div>

        {/* Deal 2 */}
        <div className="group relative rounded-[30px] overflow-hidden bg-gradient-to-br from-[#DCEEFF] to-[#CFE7D6]/30 p-8 h-[320px] cursor-pointer flex items-center transition-all duration-500 hover:shadow-2xl hover:shadow-[#DCEEFF]/40 hover:-translate-y-1">
          <div className="relative z-10 w-1/2">
            <span className="text-[#3A3A3A] font-bold uppercase tracking-wider text-xs mb-2 block">Gift Bundles</span>
            <h3 className="text-3xl font-bold font-nunito mb-4 text-[#3A3A3A]">Safe Play Toys Starting ₹299</h3>
            <button className="bg-[#3A3A3A] text-white px-6 py-2.5 rounded-full text-sm font-bold group-hover:bg-[#FF8F7A] transition-all duration-300 shadow-lg shadow-[#3A3A3A]/10 group-hover:shadow-[#FF8F7A]/20">
              Browse Sets
            </button>
          </div>
          <div className="absolute right-[-20px] bottom-[-20px] w-2/3 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-x-4">
            <img src="https://picsum.photos/seed/babytoys/600/600" alt="Product" className="rounded-2xl shadow-xl transform -rotate-3" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDeals;
