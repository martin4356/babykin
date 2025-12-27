
import React, { useState, useEffect } from 'react';
import { PRODUCTS } from '../constants';
import { Star, ShoppingCart, Eye, Heart, Plus, Minus, Sparkles, X } from 'lucide-react';
import { Product } from '../types';

const LatestProducts: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    let interval: any;
    if (hoveredId) {
      interval = setInterval(() => {
        setCarouselIndex(prev => (prev === 0 ? 1 : 0));
      }, 900);
    } else {
      setCarouselIndex(0);
    }
    return () => clearInterval(interval);
  }, [hoveredId]);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-4">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-[#FF6B6B] font-bold text-xs uppercase tracking-widest mb-3">
              <Sparkles className="w-4 h-4" /> Bestselling Treats
            </div>
            <h2 className="text-4xl lg:text-5xl font-black font-nunito tracking-tight text-[#332D2D]">
              Our <span className="text-[#FF6B6B]">Candy</span> Picks
            </h2>
          </div>
          <button className="bg-[#FF6B6B] text-white px-10 py-4 rounded-full font-black text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-[#FF6B6B]/20">
            See All Magic →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {PRODUCTS.slice(0, 4).map((product) => (
            <div 
              key={product.id} 
              className="group cursor-pointer flex flex-col"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Product Card Container */}
              <div className="relative aspect-[4/5] bg-[#FDF8F3] rounded-[50px] p-4 shadow-sm hover:shadow-[0_40px_70px_-15px_rgba(255,107,107,0.2)] transition-all duration-500 hover:-translate-y-4 group border-2 border-transparent hover:border-[#FFCFBC]/30 overflow-hidden">
                <div className="absolute top-8 left-8 z-10 flex flex-col gap-2">
                   {product.isNew && (
                    <span className="bg-[#FF6B6B] text-white text-[9px] font-black px-4 py-2 rounded-full shadow-lg">NEW</span>
                   )}
                   <span className="bg-[#A7F3D0] text-[#065F46] text-[9px] font-black px-4 py-2 rounded-full shadow-lg">SAFE</span>
                </div>

                <div className="relative w-full h-full rounded-[40px] overflow-hidden bg-white shadow-inner">
                  <img 
                    src={carouselIndex === 0 ? product.image : product.hoverImage} 
                    alt={product.name} 
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 scale-105 group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Quick View Button */}
                  <div className="absolute inset-x-0 bottom-6 px-6 translate-y-24 group-hover:translate-y-0 transition-transform duration-500">
                    <button 
                      onClick={(e) => { e.stopPropagation(); setSelectedProduct(product); }}
                      className="w-full bg-[#332D2D] py-4 rounded-3xl flex items-center justify-center gap-3 font-black text-[10px] uppercase tracking-widest text-white hover:bg-[#FF6B6B] shadow-2xl transition-all"
                    >
                      <Eye className="w-4 h-4" /> Quick Peek
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Meta */}
              <div className="mt-8 px-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] font-black text-[#FF6B6B] uppercase tracking-widest">{product.category}</span>
                  <div className="flex items-center gap-1 bg-[#FDF8F3] px-3 py-1 rounded-full">
                    <Star className="w-3 h-3 fill-[#FF6B6B] text-[#FF6B6B]" />
                    <span className="text-[10px] font-black">{product.rating}</span>
                  </div>
                </div>
                <h3 className="font-black text-xl text-[#332D2D] mb-4 group-hover:text-[#FF6B6B] transition-colors font-nunito leading-tight">
                  {product.name}
                </h3>
                <div className="flex justify-between items-center">
                  <span className="text-3xl font-black text-[#332D2D]">₹{product.price}</span>
                  <button className="w-14 h-14 bg-[#FF6B6B] text-white rounded-[22px] flex items-center justify-center shadow-2xl hover:rotate-12 hover:scale-110 active:scale-90 transition-all">
                    <ShoppingCart className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modern Modal Wrapper */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-in fade-in zoom-in duration-300">
          <div className="absolute inset-0 modal-bg" onClick={() => setSelectedProduct(null)} />
          <div className="relative bg-white w-full max-w-4xl rounded-[60px] overflow-hidden shadow-2xl flex flex-col md:flex-row h-full max-h-[85vh]">
            <button onClick={() => setSelectedProduct(null)} className="absolute top-8 right-8 p-3 bg-white/90 backdrop-blur rounded-full z-10 shadow-lg hover:scale-110 transition-transform"><X className="w-6 h-6" /></button>
            <div className="w-full md:w-1/2 bg-[#FDF8F3] h-72 md:h-auto p-12 flex items-center justify-center">
              <div className="w-full h-full squircle shadow-2xl overflow-hidden border-8 border-white">
                <img src={selectedProduct.image} className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="w-full md:w-1/2 p-12 lg:p-16 flex flex-col overflow-y-auto">
              <span className="text-[10px] font-black text-[#FF6B6B] uppercase tracking-widest mb-6">{selectedProduct.category}</span>
              <h2 className="text-4xl font-black text-[#332D2D] mb-8 font-nunito tracking-tight">{selectedProduct.name}</h2>
              <div className="text-5xl font-black text-[#FF6B6B] mb-10">₹{selectedProduct.price}</div>
              <p className="text-[#332D2D]/60 font-bold leading-relaxed mb-12 text-lg">
                Crafted for delicate skin. Our {selectedProduct.name} uses 100% natural materials for total safety and comfort.
              </p>
              
              <div className="space-y-8 mt-auto">
                <div className="flex items-center gap-8">
                  <div className="flex items-center gap-6 bg-[#FDF8F3] p-2 rounded-3xl">
                    <button className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center hover:scale-110 shadow-sm transition-transform"><Minus className="w-5 h-5" /></button>
                    <span className="font-black text-2xl">1</span>
                    <button className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center hover:scale-110 shadow-sm transition-transform"><Plus className="w-5 h-5" /></button>
                  </div>
                  <button className="flex-1 bg-[#FF6B6B] text-white py-6 rounded-[35px] font-black text-lg shadow-2xl shadow-[#FF6B6B]/30 hover:-translate-y-1 active:scale-95 transition-all">Add to Bag 🛍️</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default LatestProducts;
