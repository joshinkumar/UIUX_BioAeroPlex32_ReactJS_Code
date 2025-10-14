import React, { useState } from 'react';
import { Button } from '../components/Button';
import { Stepper } from '../components/Stepper';
import { AnimationCanvas } from '../components/AnimationCanvas';
interface TransferPageProps {
  showFrame: (screen: string) => void;
}
export const TransferPage: React.FC<TransferPageProps> = ({
  showFrame
}) => {
  const [initiate, setInitiate] = useState(false);
  const [showNext, setShowNext] = useState(false);
  const steps = ['Baseline', 'Sampling', 'Transfer', 'Scan', 'Results'];
  const initiateTransfer = () => setInitiate(true);
  const handleAnimationFinished = () => {
    setShowNext(true);
    setInitiate(false);
  };
  return <div className="container mx-auto px-4 py-8 max-w-6xl">
      <Stepper currentStep={2} steps={steps} />
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">
          Solution Transfer Phase
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Transfer pathogen-dissolved PBS from Wet-Cyclone to Biosensor
          Chambers.
        </p>
      </div>
      <div className="flex flex-col items-center mb-8">
        <Button text="Initiate Transfer" icon="💧" onClick={initiateTransfer} size="lg" className="mb-8" />
        <div className="w-full max-w-3xl">
          <AnimationCanvas initiate={initiate} onAnimationFinished={handleAnimationFinished} />
        </div>
      </div>
      <div className="flex justify-center space-x-4">
        {showNext && <Button text="Proceed to Pathogen Scan" icon="➡" onClick={() => showFrame('scan')} />}
        <Button text="Back" icon="⬅" variant="secondary" onClick={() => showFrame('sampling')} />
      </div>
    </div>;
};