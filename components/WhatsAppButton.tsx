
import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!dismissed) setShowNotification(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, [dismissed]);

  return (
    <div className="fixed bottom-8 right-8 z-[110] flex items-center">
      {(isHovered || (showNotification && !dismissed)) && (
        <div className="relative group bg-white px-6 py-4 rounded-[25px] shadow-2xl mr-4 animate-[slideLeft_0.3s_ease-out] border border-[#E8DED3]/30 min-w-[200px]">
          <button 
            onClick={() => {setShowNotification(false); setDismissed(true);}}
            className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#F6F1EB] transition-colors"
          >
            <X className="w-3 h-3" />
          </button>
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 bg-[#25D366]/20 rounded-full flex items-center justify-center text-xl">💬</div>
             <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#2F2F2F]/40">Online Expert</p>
                <p className="text-sm font-bold text-[#2F2F2F]">Real Support. No Bots. Just Care</p>
             </div>
          </div>
        </div>
      )}
      
      {/* <a 
        href="https://wa.me/91180054375683" 
        target="_blank" 
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl animate-breathe hover:scale-110 active:scale-90 transition-transform duration-300 relative group"
      >
        <MessageCircle className="w-8 h-8 fill-white" />
        {showNotification && !dismissed && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 border-2 border-white rounded-full animate-ping" />
        )}
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 border-2 border-white rounded-full flex items-center justify-center text-[10px] font-bold">1</span>
      </a> */}
      
      <style>{`
        @keyframes slideLeft {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};

export default WhatsAppButton;
