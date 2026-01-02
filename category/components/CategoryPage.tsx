
import React, { useState, useMemo } from 'react';
import { CATEGORIES, TEETHING_PRODUCTS, SECONDARY_PRODUCTS, REVIEWS } from '../constants';
import { Product } from '../types';
import { 
  Star, 
  ShoppingCart, 
  Eye, 
  Heart, 
  X, 
  Plus, 
  Minus, 
  ChevronRight,
  Sparkles,
  ChevronLeft,
  Quote,
  ShieldCheck,
  Leaf,
  Award,
  Zap
} from 'lucide-react';
import confetti from 'canvas-confetti';

const CategoryPage: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [toast, setToast] = useState<string | null>(null);
  const [activeFilters, setActiveFilters] = useState({
    age: 'All',
    material: 'All',
    texture: 'All',
    rating: 0
  });

  const filteredProducts = useMemo(() => {
    let list = TEETHING_PRODUCTS;
    if (activeFilters.age !== 'All') {
      // Logic for age filter would go here based on product tags
    }
    if (activeFilters.material !== 'All') {
      // Logic for material filter would go here
    }
    return list;
  }, [activeFilters]);

  const addToCart = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    setToast(`Added ${product.name} gently 💛`);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#FF6B6B', '#FFCFBC']
    });
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <div className="bg-[#FDF8F3] min-h-screen">
      {/* Category Intro Section */}
      <section className="relative bg-white pt-12 pb-20 px-6 lg:px-12 border-b border-[#FFCFBC]/20 overflow-hidden">
        <div className="blob-vibrant w-96 h-96 bg-[#FFCFBC] -top-20 -right-20" />
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12 relative z-10">
          <div>
            <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#332D2D]/30 mb-6">
              <span>Home</span> <ChevronRight size={10} /> <span>Shop</span> <ChevronRight size={10} /> <span className="text-[#FF6B6B]">Teething</span>
            </nav>
            <h1 className="text-4xl lg:text-6xl font-black font-nunito tracking-tight text-[#332D2D] mb-6 leading-tight">
              Teethers for Happy, <span className="text-[#FF6B6B]">Soothed Gums</span>
            </h1>
            <p className="text-xl text-[#332D2D]/60 font-medium leading-relaxed max-w-md">
              Gentle, safe, and chew-friendly teethers loved by parents for those delicate milestone moments.
            </p>
          </div>
          <div className="flex justify-end relative">
            <div className="relative w-full max-w-sm aspect-[4/3] squircle bg-[#FFE8E0] p-3 shadow-2xl float-cute border-4 border-white overflow-hidden">
              <img src="https://images.unsplash.com/photo-1555133539-7a355625ee3e?auto=format&fit=crop&w=600&h=800&q=80" className="w-full h-full object-cover squircle" alt="Baby with teether" />
              <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-[#FFCFBC] animate-bounce">
                <Heart size={20} className="text-[#FF6B6B] fill-[#FF6B6B]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teething Filters */}
      <section className="bg-white/50 backdrop-blur-sm sticky top-[80px] z-30 py-6 px-6 lg:px-12 border-b border-[#FFCFBC]/10">
        <div className="max-w-7xl mx-auto flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#332D2D]/40 mr-2">Filter By:</span>
            
            {/* Age Chips */}
            <div className="flex gap-2">
              {['All Ages', '3-6M', '6-12M', '12M+'].map(age => (
                <button 
                  key={age}
                  onClick={() => setActiveFilters(f => ({ ...f, age }))}
                  className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                    activeFilters.age === age ? 'bg-[#FF6B6B] text-white shadow-lg' : 'bg-white text-[#332D2D]/50 hover:bg-[#FFCFBC]/20'
                  }`}
                >
                  {age}
                </button>
              ))}
            </div>

            <div className="h-4 w-px bg-[#332D2D]/10 mx-2" />

            {/* Material Chips */}
            <div className="flex gap-2">
              {['All Materials', 'Silicone', 'Wood', 'Organic'].map(mat => (
                <button 
                  key={mat}
                  onClick={() => setActiveFilters(f => ({ ...f, material: mat }))}
                  className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                    activeFilters.material === mat ? 'bg-[#A7F3D0] text-[#065F46] shadow-lg' : 'bg-white text-[#332D2D]/50 hover:bg-[#A7F3D0]/20'
                  }`}
                >
                  {mat}
                </button>
              ))}
            </div>

            {/* Clear All */}
            {(activeFilters.age !== 'All' || activeFilters.material !== 'All') && (
              <button 
                onClick={() => setActiveFilters({ age: 'All', material: 'All', texture: 'All', rating: 0 })}
                className="text-[10px] font-black text-[#FF6B6B] uppercase tracking-widest ml-4 hover:underline"
              >
                Clear Filters
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Main Product Grid */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-12">
            {filteredProducts.map((p) => (
              <div 
                key={p.id} 
                className="group cursor-pointer flex flex-col"
                onClick={() => setSelectedProduct(p)}
              >
                <div className="relative aspect-[4/5] bg-white rounded-[40px] p-3 shadow-md hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border border-[#FFCFBC]/10 overflow-hidden">
                  <div className="absolute top-6 left-6 z-10 flex flex-col gap-2">
                    {p.isNew && <span className="bg-[#FF6B6B] text-white text-[8px] font-black px-4 py-2 rounded-full shadow-lg">NEW</span>}
                    <span className="bg-[#A7F3D0] text-[#065F46] text-[8px] font-black px-4 py-2 rounded-full shadow-lg">BESTSELLER</span>
                  </div>
                  <div className="relative w-full h-full rounded-[30px] overflow-hidden bg-[#FDF8F3]">
                    <img src={p.image} className="w-full h-full object-cover transition-opacity duration-500" alt={p.name} />
                    {/* Quick View Button */}
                    <div className="absolute inset-x-0 bottom-6 px-6 translate-y-24 group-hover:translate-y-0 transition-transform duration-500">
                      <button className="w-full bg-[#332D2D] py-4 rounded-3xl flex items-center justify-center gap-3 font-black text-[10px] uppercase tracking-widest text-white hover:bg-[#FF6B6B] shadow-2xl transition-all">
                        <Eye className="w-4 h-4" /> Quick Peek
                      </button>
                    </div>
                  </div>
                </div>
                <div className="mt-6 px-2">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[9px] font-black text-[#FF6B6B] uppercase tracking-widest">Teething Relief</span>
                    <div className="flex items-center gap-1 bg-[#FDF8F3] px-3 py-1 rounded-full">
                      <Star size={10} className="fill-[#FF6B6B] text-[#FF6B6B]" />
                      <span className="text-[9px] font-black">{p.rating}</span>
                    </div>
                  </div>
                  <h4 className="font-black text-[#332D2D] text-lg group-hover:text-[#FF6B6B] transition-colors leading-tight font-nunito mb-4">
                    {p.name}
                  </h4>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-black text-[#332D2D]">₹{p.price}</span>
                    <button 
                      onClick={(e) => addToCart(e, p)}
                      className="w-12 h-12 bg-[#FF6B6B] text-white rounded-2xl flex items-center justify-center shadow-lg hover:rotate-12 hover:scale-110 active:scale-90 transition-all"
                    >
                      <ShoppingCart size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Helpful Teething Guide */}
      <section className="py-24 bg-[#E0E7FF]/20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-black font-nunito text-[#332D2D]">Not Sure Which <span className="text-[#FF6B6B]">Teether</span> to Choose?</h2>
            <p className="text-[#332D2D]/40 font-bold uppercase tracking-widest text-[10px] mt-4">Expert tips for every stage of your baby's growth</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              { stage: 'Early Teething', age: '3-6M', text: 'Soft silicone, lightweight & easy to hold.', icon: '☁️', color: '#E8F4FF' },
              { stage: 'Active Chewers', age: '6-12M', text: 'Textured, multi-surface for better relief.', icon: '🍎', color: '#FFE8E0' },
              { stage: 'Strong Gums', age: '12M+', text: 'Durable, thicker designs for molars.', icon: '🥕', color: '#E2F2E7' }
            ].map((guide, idx) => (
              <div key={idx} className="bg-white rounded-[40px] p-10 shadow-xl border border-white hover:-translate-y-2 transition-transform duration-500 group">
                <div 
                  className="w-16 h-16 rounded-[22px] flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: guide.color }}
                >
                  {guide.icon}
                </div>
                <h3 className="text-xl font-black text-[#332D2D] mb-2">{guide.stage}</h3>
                <p className="text-[10px] font-black text-[#FF6B6B] uppercase tracking-[0.2em] mb-4">Ages {guide.age}</p>
                <p className="text-sm font-medium text-[#332D2D]/60 leading-relaxed mb-8">{guide.text}</p>
                <a href="#" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#FF6B6B] group-hover:gap-4 transition-all">
                  View Matching Teethers <ChevronRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parents Also Looked At */}
      <section className="py-24 px-6 lg:px-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-black font-nunito text-[#332D2D]">Parents <span className="text-[#FF6B6B]">Also Looked</span> At</h2>
            <div className="flex gap-4">
              <button className="w-12 h-12 rounded-full border border-[#F2EBE4] flex items-center justify-center text-[#332D2D] hover:bg-[#FF6B6B] hover:text-white transition-all shadow-md">
                <ChevronLeft size={20} />
              </button>
              <button className="w-12 h-12 rounded-full border border-[#F2EBE4] flex items-center justify-center text-[#332D2D] hover:bg-[#FF6B6B] hover:text-white transition-all shadow-md">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
          <div className="flex gap-8 overflow-x-auto hide-scrollbar pb-10">
            {SECONDARY_PRODUCTS.map((p) => (
              <div key={p.id} className="min-w-[220px] md:min-w-[280px] group cursor-pointer">
                <div className="aspect-[4/5] bg-[#FDF8F3] rounded-[40px] p-2 mb-6 group-hover:-translate-y-2 transition-all shadow-sm group-hover:shadow-xl border border-transparent group-hover:border-[#FFCFBC]/30">
                  <img src={p.image} className="w-full h-full object-cover rounded-[32px]" alt={p.name} />
                </div>
                <h4 className="font-black text-sm text-[#332D2D] group-hover:text-[#FF6B6B] transition-colors mb-2">{p.name}</h4>
                <p className="text-lg font-black text-[#FF6B6B]">₹{p.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Safety Strip */}
      <section className="bg-white py-12 border-y border-[#FFCFBC]/20">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between items-center gap-8">
          {[
            { icon: <ShieldCheck size={20} />, text: 'BPA-Free Materials', bg: '#FFE8E0', color: '#FF6B6B' },
            { icon: <Leaf size={20} />, text: 'Safe for Little Mouths', bg: '#A7F3D0', color: '#059669' },
            { icon: <Award size={20} />, text: 'Tested for Indian Babies', bg: '#E0E7FF', color: '#2563EB' },
            { icon: <Zap size={20} />, text: 'Easy to Clean & Boil', bg: '#FEF3C7', color: '#D97706' }
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 group cursor-default">
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center animate-pulse"
                style={{ backgroundColor: item.bg, color: item.color }}
              >
                {item.icon}
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-[#332D2D]/60 group-hover:text-[#332D2D] transition-colors">{item.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Category Specific Reviews */}
      <section className="py-24 bg-[#FDF8F3] px-6 lg:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-black font-nunito text-[#332D2D]">Parents Trust <span className="text-[#FF6B6B]">BabyKins</span> Teethers</h2>
            <div className="flex items-center justify-center gap-2 mt-4">
              <Star size={18} className="fill-[#FF6B6B] text-[#FF6B6B]" />
              <Star size={18} className="fill-[#FF6B6B] text-[#FF6B6B]" />
              <Star size={18} className="fill-[#FF6B6B] text-[#FF6B6B]" />
              <Star size={18} className="fill-[#FF6B6B] text-[#FF6B6B]" />
              <Star size={18} className="fill-[#FF6B6B] text-[#FF6B6B]" />
              <span className="ml-3 text-xs font-black text-[#332D2D]/60 uppercase tracking-widest">4.8/5 (920+ Reviews)</span>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {REVIEWS.slice(0, 2).map((review) => (
              <div key={review.id} className="bg-white p-10 rounded-[50px] shadow-xl relative group border-2 border-transparent hover:border-[#FFD6C9] transition-all duration-500">
                <Quote className="absolute top-8 right-10 w-16 h-16 text-[#FFD6C9]/20" />
                <div className="flex items-center gap-4 mb-8">
                  <img src={review.avatar} className="w-14 h-14 rounded-full border-2 border-[#FFD6C9]" alt={review.name} />
                  <div>
                    <h4 className="font-black text-lg text-[#332D2D]">{review.name}</h4>
                    <p className="text-[9px] font-black text-[#332D2D]/30 uppercase tracking-[0.2em]">{review.city}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-[#FF8F7A] text-[#FF8F7A]" />)}
                </div>
                <p className="text-lg text-[#332D2D]/70 font-bold italic leading-relaxed">
                  "This teething relief was exactly what we needed! The textures are so gentle and my baby can finally sleep through the gum soreness."
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick View Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-in fade-in zoom-in duration-300">
          <div className="absolute inset-0 modal-bg" onClick={() => setSelectedProduct(null)} />
          <div className="relative bg-white w-full max-w-4xl rounded-[60px] overflow-hidden shadow-2xl flex flex-col md:flex-row h-full max-h-[85vh]">
            <button onClick={() => setSelectedProduct(null)} className="absolute top-8 right-8 p-3 bg-white/90 backdrop-blur rounded-full z-10 shadow-lg hover:scale-110 transition-transform"><X className="w-6 h-6" /></button>
            <div className="w-full md:w-1/2 bg-[#FDF8F3] h-72 md:h-auto p-12">
              <div className="w-full h-full squircle shadow-2xl overflow-hidden border-8 border-white">
                <img src={selectedProduct.image} className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="w-full md:w-1/2 p-12 lg:p-16 flex flex-col overflow-y-auto">
              <span className="text-[10px] font-black text-[#FF6B6B] uppercase tracking-widest mb-6">{selectedProduct.category}</span>
              <h2 className="text-4xl font-black text-[#332D2D] mb-8 font-nunito tracking-tight">{selectedProduct.name}</h2>
              <div className="text-4xl font-black text-[#FF6B6B] mb-10">₹{selectedProduct.price}</div>
              
              <div className="grid grid-cols-2 gap-6 mb-12">
                <div className="bg-[#FDF8F3] p-4 rounded-2xl">
                  <p className="text-[8px] font-black uppercase text-[#332D2D]/40 mb-1">Material</p>
                  <p className="text-xs font-black text-[#332D2D]">BPA-Free Silicone</p>
                </div>
                <div className="bg-[#FDF8F3] p-4 rounded-2xl">
                  <p className="text-[8px] font-black uppercase text-[#332D2D]/40 mb-1">Suitable For</p>
                  <p className="text-xs font-black text-[#332D2D]">3-12 Months</p>
                </div>
              </div>

              <p className="text-[#332D2D]/60 font-bold leading-relaxed mb-12 text-lg">
                Dermatologically tested and freezer-safe. Designed to reach even the back molars for total teething relief.
              </p>
              
              <div className="space-y-8 mt-auto">
                <div className="flex items-center gap-8">
                  <div className="flex items-center gap-6 bg-[#FDF8F3] p-2 rounded-3xl">
                    <button className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center hover:scale-110 shadow-sm transition-transform"><Minus className="w-5 h-5" /></button>
                    <span className="font-black text-2xl">1</span>
                    <button className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center hover:scale-110 shadow-sm transition-transform"><Plus className="w-5 h-5" /></button>
                  </div>
                  <button 
                    onClick={(e) => { addToCart(e, selectedProduct); setSelectedProduct(null); }}
                    className="flex-1 bg-[#FF6B6B] text-white py-6 rounded-[35px] font-black text-lg shadow-2xl shadow-[#FF6B6B]/30 hover:-translate-y-1 active:scale-95 transition-all"
                  >
                    Add to Bag 🛍️
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Toast Notification */}
      {toast && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[120] bg-[#332D2D] text-white px-8 py-4 rounded-full font-black text-xs uppercase tracking-widest shadow-2xl flex items-center gap-3 toast-anim">
           <div className="w-6 h-6 bg-[#FF6B6B] rounded-full flex items-center justify-center text-xs">✓</div>
           {toast}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
