import React, { useState } from 'react';
import { Button } from '../components/Button';
import { Stepper } from '../components/Stepper';
interface BaselinePageProps {
  showFrame: (screen: string) => void;
}
export const BaselinePage: React.FC<BaselinePageProps> = ({
  showFrame
}) => {
  const [showNext, setShowNext] = useState(false);
  const [plots, setPlots] = useState<React.ReactNode[]>([]);
  // Actual Nyquist plot image
  const nyquistPlotUrl = "/nyquist.png";
  const steps = ['Baseline', 'Sampling', 'Transfer', 'Scan', 'Results'];
  const startScan = () => {
    const newPlots = [];
    for (let i = 0; i < 32; i++) {
      newPlots.push(<div key={i} className="bg-white rounded-lg shadow p-3 flex flex-col items-center">
          <img src={nyquistPlotUrl} alt="Nyquist Plot" className="w-24 h-24 object-contain" />
          <p className="text-blue-600 text-xs mt-2 font-medium">BS {i + 1}</p>
        </div>);
    }
    setPlots(newPlots);
    setShowNext(true);
  };
  return <div className="container mx-auto px-4 py-8 max-w-6xl">
      <Stepper currentStep={0} steps={steps} />
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">
          Baseline EIS Scan
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Insert pure PBS solution and dip biosensors.
          <br />
          Click to start baseline scan for calibration.
        </p>
      </div>
      <div className="flex justify-center mb-8">
        <Button text="Start Baseline Scan" icon="⚡" onClick={startScan} size="lg" />
      </div>
      {plots.length > 0 && <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 mb-8">
          {plots}
        </div>}
      <div className="flex justify-center space-x-4">
        {showNext && <Button text="Proceed to Air Sampling" icon="➡" onClick={() => showFrame('sampling')} />}
        <Button text="Back" icon="⬅" variant="secondary" onClick={() => showFrame('home')} />
      </div>
    </div>;
};