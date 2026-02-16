import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Showcase from './components/Showcase';
import History from './components/History';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div 
      className="bg-[#FDF8F0] text-[#483434] min-h-screen"
    >
      <Header />
      <main>
        <Hero />
        <Showcase />
        <History />
      </main>
      <Footer />
    </div>
  );
};

export default App;
