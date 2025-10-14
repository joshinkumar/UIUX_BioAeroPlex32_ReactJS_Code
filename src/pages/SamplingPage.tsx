import React, { useEffect, useState, useRef } from 'react';
import { Button } from '../components/Button';
import { Stepper } from '../components/Stepper';
interface SamplingPageProps {
  showFrame: (screen: string) => void;
}
export const SamplingPage: React.FC<SamplingPageProps> = ({
  showFrame
}) => {
  const [status, setStatus] = useState('Ready to sample air at 1000 LPM for 5 minutes.');
  const [progress, setProgress] = useState(0);
  const [showNext, setShowNext] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  // Actual wet cyclone image
  const wetCycloneUrl = "/wet_cyclone.png";
  const steps = ['Baseline', 'Sampling', 'Transfer', 'Scan', 'Results'];
  const initiateSampling = () => {
    setProgress(0);
    let time = 0;
    timerRef.current = setInterval(() => {
      time += 1;
      setProgress(time);
      if (time >= 300) {
        if (timerRef.current) clearInterval(timerRef.current);
        setStatus('Air Sampling Completed Successfully!');
        setShowNext(true);
        return;
      }
      const minutes = Math.floor(time / 60);
      const seconds = time % 60;
      const airVolume = time / 300 * 5000;
      setStatus(`Sampling in Progress: ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} | Volume Sampled: ${airVolume.toFixed(1)} L`);
    }, 10); // Fast for demo
  };
  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);
  return <div className="container mx-auto px-4 py-8 max-w-6xl">
      <Stepper currentStep={1} steps={steps} />
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">
          Air Sampling Phase
        </h2>
      </div>
      <div className="flex flex-col items-center mb-8">
        <img src={wetCycloneUrl} alt="Wet Cyclone" className="w-48 h-48 object-contain mb-6" />
        <p className="text-gray-600 mb-6 text-lg">{status}</p>
        <Button text="Initiate Sampling" icon="🌬" onClick={initiateSampling} size="lg" className="mb-6" />
        <div className="w-full max-w-xl h-3 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-green-500 transition-all duration-300" style={{
          width: `${progress / 300 * 100}%`
        }}></div>
        </div>
      </div>
      <div className="flex justify-center space-x-4">
        {showNext && <Button text="Proceed to Solution Transfer" icon="➡" onClick={() => showFrame('transfer')} />}
        <Button text="Back" icon="⬅" variant="secondary" onClick={() => showFrame('baseline')} />
      </div>
    </div>;
};