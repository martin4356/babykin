
import React from 'react';
import { PRODUCTS } from '../constants';
import { Star, ShoppingCart, Eye } from 'lucide-react';

const LatestProducts: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold font-nunito mb-2">Our Latest Arrivals</h2>
            <p className="text-[#3A3A3A]/60">Freshly picked essentials for your bundle of joy.</p>
          </div>
          <button className="text-[#FF8F7A] font-bold border-b-2 border-[#FF8F7A] hover:text-[#3A3A3A] hover:border-[#3A3A3A] transition-all">
            View All Shop
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative aspect-[3/4] rounded-[30px] overflow-hidden bg-[#F6F1EB] mb-6 border border-transparent transition-all duration-300 hover:border-[#FFD6C9] hover:shadow-2xl hover:shadow-peach-100">
                {/* Image Crossfade */}
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                />
                <img 
                  src={product.hoverImage} 
                  alt={product.name} 
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />

                {/* Badges */}
                {product.isNew && (
                  <span className="absolute top-4 left-4 bg-[#CFE7D6] text-[#3A3A3A] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest z-10">
                    New
                  </span>
                )}

                {/* Quick Action Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-black/20 to-transparent">
                  <button className="w-full bg-white/90 backdrop-blur py-3 rounded-2xl flex items-center justify-center gap-2 font-bold text-sm text-[#3A3A3A] hover:bg-white transition-colors">
                    <Eye className="w-4 h-4" /> Quick View
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] uppercase tracking-widest text-[#3A3A3A]/40 font-bold">{product.category}</span>
                  <div className="flex items-center gap-0.5">
                    <Star className="w-3 h-3 fill-[#FF8F7A] text-[#FF8F7A]" />
                    <span className="text-[10px] font-bold">{product.rating}</span>
                  </div>
                </div>
                <h3 className="font-bold text-lg leading-tight group-hover:text-[#FF8F7A] transition-colors">{product.name}</h3>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-xl font-extrabold text-[#3A3A3A]">₹{product.price}</span>
                  <button className="relative p-3 bg-[#FFD6C9] rounded-2xl hover:bg-[#FF8F7A] hover:text-white transition-all duration-300 group/cart hover:scale-110 active:scale-90">
                    <ShoppingCart className="w-5 h-5" />
                    <span className="absolute -top-2 -right-2 text-xl opacity-0 group-hover/cart:opacity-100 transition-opacity pointer-events-none">
                      ✋
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestProducts;
