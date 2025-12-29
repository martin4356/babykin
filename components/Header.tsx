
import React, { useState } from 'react';
import { Search, User, Heart, ShoppingBag, X } from 'lucide-react';
import { CATEGORIES } from '../constants';

const Header: React.FC = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header className="sticky top-0 left-0 right-0 z-50 h-[80px] bg-white/80 backdrop-blur-xl border-b border-[#FFCFBC]/20 flex items-center px-6 lg:px-12">
      <div className="flex w-full items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-3 group cursor-pointer hover:scale-105 transition-transform duration-300">
          <div className="flex items-center justify-center transition-transform">
            <img src="src/logo.png" alt="Babykins Logo" className="" />
          </div>
          
        </div>

        {/* Search Bar - Vibrant Style */}
        <div className="hidden md:flex flex-1 max-w-md mx-12 relative group">
          <input
            type="text"
            onFocus={() => setShowSearch(true)}
            placeholder="Search for little smiles..."
            className="w-full py-3.5 px-12 rounded-2xl bg-[#FFCFBC]/10 border-2 border-transparent focus:bg-white focus:border-[#FF6B6B] focus:ring-4 focus:ring-[#FF6B6B]/10 outline-none transition-all duration-300 text-sm font-bold placeholder-[#332D2D]/30"
          />
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#FF6B6B]" />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all hover:bg-[#E0E7FF]/50 hover:scale-110 active:scale-95 group">
            <User className="w-6 h-6 text-[#332D2D] group-hover:text-[#2563EB]" />
          </button>
          <button className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all hover:bg-[#FCE7F3]/50 hover:scale-110 active:scale-95 group">
            <Heart className="w-6 h-6 text-[#332D2D] group-hover:text-[#DB2777]" />
          </button>
          <button className="relative w-12 h-12 rounded-2xl bg-[#FF6B6B] flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-lg shadow-[#FF6B6B]/20">
            <ShoppingBag className="w-5 h-5 text-white" />
            <span className="absolute -top-1 -right-1 bg-white text-[#FF6B6B] text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-black border-2 border-[#FF6B6B]">
              2
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
