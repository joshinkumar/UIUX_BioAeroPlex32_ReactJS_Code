import React, { useState } from 'react';
import { HomePage } from './pages/HomePage';
import { BaselinePage } from './pages/BaselinePage';
import { SamplingPage } from './pages/SamplingPage';
import { TransferPage } from './pages/TransferPage';
import { ScanPage } from './pages/ScanPage';
import { ResultsPage } from './pages/ResultsPage';
export function App() {
  const [currentScreen, setCurrentScreen] = useState('home');
  const showFrame = screen => setCurrentScreen(screen);
  return <div className="min-h-screen bg-gray-50 w-full font-sans">
      {currentScreen === 'home' && <HomePage showFrame={showFrame} />}
      {currentScreen === 'baseline' && <BaselinePage showFrame={showFrame} />}
      {currentScreen === 'sampling' && <SamplingPage showFrame={showFrame} />}
      {currentScreen === 'transfer' && <TransferPage showFrame={showFrame} />}
      {currentScreen === 'scan' && <ScanPage showFrame={showFrame} />}
      {currentScreen === 'results' && <ResultsPage showFrame={showFrame} />}
    </div>;
}