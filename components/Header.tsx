
import React, { useState } from 'react';
import { Search, User, Heart, ShoppingBag } from 'lucide-react';

const Header: React.FC = () => {
  const [cartCount] = useState(2);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[90px] bg-white/95 backdrop-blur-md border-b border-beige-100 flex items-center shadow-sm px-6 lg:px-12">
      <div className="flex w-full items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer transition-transform hover:scale-105 active:scale-95 duration-300">
          <div className="w-12 h-12 bg-[#FFD6C9] rounded-full flex items-center justify-center animate-[bounce_1s_ease-in-out]">
             <span className="text-2xl">🧸</span>
          </div>
          <h1 className="text-2xl font-bold font-nunito tracking-tight text-[#3A3A3A]">
            Baby<span className="text-[#FF8F7A]">Kins</span>
          </h1>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full group">
            <input
              type="text"
              placeholder="Search something gentle for your baby..."
              className="w-full py-3 px-6 rounded-full bg-[#F6F1EB] border-transparent focus:bg-white focus:border-[#FFD6C9] focus:ring-4 focus:ring-[#FFD6C9]/20 outline-none transition-all duration-300 text-sm"
            />
            <Search className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-[#FF8F7A] transition-colors" />
          </div>
        </div>

        {/* Action Icons */}
        <div className="flex items-center gap-6">
          <button className="flex flex-col items-center group">
            <div className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-[#DCEEFF] group-hover:scale-110">
              <User className="w-6 h-6 text-[#3A3A3A] group-hover:text-[#3A3A3A]" />
            </div>
          </button>
          <button className="flex flex-col items-center group">
            <div className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-[#FFD6C9] group-hover:scale-110">
              <Heart className="w-6 h-6 text-[#3A3A3A] group-hover:text-[#FF8F7A]" />
            </div>
          </button>
          <button className="relative flex flex-col items-center group">
            <div className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-[#CFE7D6] group-hover:scale-110 group-hover:rotate-12">
              <ShoppingBag className="w-6 h-6 text-[#3A3A3A]" />
            </div>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#FF8F7A] text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold border-2 border-white">
                👶
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
