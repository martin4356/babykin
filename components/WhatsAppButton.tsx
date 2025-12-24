
import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-[60] flex items-center">
      <div 
        className={`bg-white px-4 py-2 rounded-full shadow-xl mr-3 text-sm font-bold text-[#3A3A3A] transition-all duration-300 transform origin-right ${
          isHovered ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        }`}
      >
        Need help? Talk to a BabyKins expert 💬
      </div>
      <button 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl animate-breathe hover:scale-110 active:scale-90 transition-transform duration-300"
      >
        <MessageCircle className="w-8 h-8 fill-white" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 border-2 border-white rounded-full" />
      </button>
    </div>
  );
};

export default WhatsAppButton;
