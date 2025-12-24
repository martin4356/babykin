
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryGrid from './components/CategoryGrid';
import FeaturedDeals from './components/FeaturedDeals';
import TrustStrip from './components/TrustStrip';
import LatestProducts from './components/LatestProducts';
import MilestoneTracker from './components/MilestoneTracker';
import Reviews from './components/Reviews';
import QuizSection from './components/QuizSection';
import InstagramStrip from './components/InstagramStrip';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-[#FFD6C9] selection:text-[#3A3A3A]">
      <Header />
      
      {/* Spacer for sticky header */}
      <div className="h-[90px]" />

      <main>
        <Hero />
        <CategoryGrid />
        <FeaturedDeals />
        <TrustStrip />
        <LatestProducts />
        <MilestoneTracker />
        <Reviews />
        <QuizSection />
        <InstagramStrip />
        <Newsletter />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
