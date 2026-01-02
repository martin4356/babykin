
import React, { useState } from 'react';
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
import CategoryPage from './components/CategoryPage';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'category'>('category');

  return (
    <div className="min-h-screen selection:bg-[#FFCFBC] selection:text-[#332D2D] bg-[#FDF8F3]">
      <UtilityBar />
      <div onClick={() => setView(view === 'home' ? 'category' : 'home')} className="cursor-pointer">
        <Header />
      </div>
      
      <main>
        {view === 'home' ? (
          <>
            <Hero />
            <CategoryGrid />
            <TrustStrip />
            <LatestProducts />
            <MilestoneTracker />
            <QuizSection />
            <Reviews />
            <InstagramStrip />
            <Newsletter />
          </>
        ) : (
          <CategoryPage />
        )}
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
