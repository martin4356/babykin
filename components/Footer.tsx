
import React from 'react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-beige-200">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        {/* Brand Column */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center">
                <img src="src/logo.png" alt="Babykins Logo" className="" />
            </div>
          </div>
          <p className="text-[#3A3A3A]/60 text-sm leading-relaxed">
            Nurturing the next generation with products as gentle as a parent's touch. Built with love in India, for parents everywhere.
          </p>
          <div className="flex gap-4">
            {[Facebook, Instagram, Youtube].map((Icon, idx) => (
              <a 
                key={idx} 
                href="#" 
                className="w-10 h-10 rounded-full bg-[#F6F1EB] flex items-center justify-center transition-all duration-300 hover:bg-[#FFD6C9] hover:text-[#FF8F7A] hover:-translate-y-1 active:scale-90"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-[#3A3A3A] mb-6">Safety & Trust</h4>
          <ul className="space-y-4 text-sm text-[#3A3A3A]/60">
            <li><a href="#" className="hover:text-[#FF8F7A] transition-colors">ISOFIX Safety Standards</a></li>
            <li><a href="#" className="hover:text-[#FF8F7A] transition-colors">Rearward vs Forward Facing Guide</a></li>
            <li><a href="#" className="hover:text-[#FF8F7A] transition-colors">Feeding Safety (Food-Grade Silicone)</a></li>
            <li><a href="#" className="hover:text-[#FF8F7A] transition-colors">Why Babykins?</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-bold text-[#3A3A3A] mb-6">Support</h4>
          <ul className="space-y-4 text-sm text-[#3A3A3A]/60">
            <li><a href="#" className="hover:text-[#FF8F7A] transition-colors">Installation Help</a></li>
            <li><li><a href="#" className="hover:text-[#FF8F7A] transition-colors">FAQs</a></li></li>
            <li><a href="#" className="hover:text-[#FF8F7A] transition-colors">Returns & Warranty</a></li>
            <li><a href="#" className="hover:text-[#FF8F7A] transition-colors">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-bold text-[#3A3A3A] mb-6">Get in Touch</h4>
          <div className="space-y-4 text-sm text-[#3A3A3A]/60">
            <p className="flex items-center gap-2">📞 +91 79725 04903</p>
            <p className="flex items-center gap-2">✉️ info@Babykins.in</p>
            <p className="flex items-center gap-2">📍 1045, Pune, Maharashtra, India</p>
            <div className="mt-6 pt-6 border-t border-beige-100">
               <span className="text-[10px] font-bold uppercase tracking-widest block mb-2">Accepted Payments</span>
               <div className="flex gap-2 opacity-50">
                  <span className="text-xl">💳</span>
                  <span className="text-xl">🏛️</span>
                  <span className="text-xl">📱</span>
               </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-beige-100 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[10px] text-[#3A3A3A]/40 font-bold uppercase tracking-widest">© 2024 Babykins India. All rights reserved.</p>
        <div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest text-[#3A3A3A]/40">
          <a href="#" className="hover:text-[#3A3A3A]">Terms</a>
          <a href="#" className="hover:text-[#3A3A3A]">Privacy</a>
          <a href="#" className="hover:text-[#3A3A3A]">Security</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
