
import React from 'react';
import { ChevronDown, PhoneCall } from 'lucide-react';

const UtilityBar: React.FC = () => {
  return (
    <div className="h-[38px] bg-[#2F2F2F] text-white/90 text-[11px] font-bold uppercase tracking-widest px-6 lg:px-12 flex items-center justify-between z-[60] relative overflow-hidden">
      <div className="flex items-center gap-4">
        <span>Free delivery above ₹799 | COD Available</span>
        <div className="hidden md:flex h-3 w-px bg-white/20" />
        <span className="hidden md:inline hover:text-[#FF8F7A] cursor-pointer transition-colors flex items-center gap-1">
          <PhoneCall className="w-3 h-3" /> +91 1800-KIDS-LOVE
        </span>
      </div>
      
      <div className="flex items-center gap-6">
        <div className="group relative cursor-pointer flex items-center gap-1 hover:text-[#FF8F7A] transition-colors">
          English <ChevronDown className="w-3 h-3" />
          <div className="absolute top-full right-0 mt-0 w-32 bg-white text-[#2F2F2F] shadow-xl rounded-b-xl opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-[70] p-2">
            <div className="p-2 hover:bg-[#F6F1EB] rounded-lg">Hindi</div>
            <div className="p-2 hover:bg-[#F6F1EB] rounded-lg">Marathi</div>
          </div>
        </div>
        <div className="group relative cursor-pointer flex items-center gap-1 hover:text-[#FF8F7A] transition-colors">
          INR (₹) <ChevronDown className="w-3 h-3" />
          <div className="absolute top-full right-0 mt-0 w-32 bg-white text-[#2F2F2F] shadow-xl rounded-b-xl opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-[70] p-2">
            <div className="p-2 hover:bg-[#F6F1EB] rounded-lg">USD ($)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UtilityBar;
