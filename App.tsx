
import React from 'react';
import UtilityBar from './components/UtilityBar';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryGrid from './components/CategoryGrid';
import LatestProducts from './components/LatestProducts';
import MilestoneTracker from './components/MilestoneTracker';
import TrustStrip from './components/TrustStrip';
import Reviews from './components/Reviews';
import QuizSection from './components/QuizSection';
import InstagramStrip from './components/InstagramStrip';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-[#FFCFBC] selection:text-[#332D2D] bg-[#FDF8F3]">
      <UtilityBar />
      <Header />
      
      <main>
        {/* Visual Hook & Brand Story */}
        <Hero />
        
        {/* Core Product Entry Points (Exactly 4 Categories) */}
        <CategoryGrid />
        
        {/* Trust & Safety Reinforcement */}
        <TrustStrip />
        
        {/* Curated Product Showcase (Exactly 4 Image Layers/Products) */}
        <LatestProducts />
        
        {/* Interactive Value Add (Redesigned Growth Path) */}
        <MilestoneTracker />
        
        {/* Personalization Funnel */}
        <QuizSection />
        
        {/* Emotional Social Proof */}
        <Reviews />
        
        {/* Community Engagement (Asymmetric Polaroid Row) */}
        <InstagramStrip />
        
        {/* Retention & Marketing */}
        <Newsletter />
      </main>

      <Footer />
      
      {/* Dynamic Support Access */}
      <WhatsAppButton />
    </div>
  );
};

export default App;
