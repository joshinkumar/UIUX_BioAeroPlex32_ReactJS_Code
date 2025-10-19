import React from 'react';
import { Button } from '../components/Button';
import { Stepper } from '../components/Stepper';
import { PathogenTile } from '../components/PatientTile';
interface ResultsPageProps {
  showFrame: (screen: string) => void;
}
export const ResultsPage: React.FC<ResultsPageProps> = ({
  showFrame
}) => {
  const steps = ['Baseline', 'Sampling', 'Transfer', 'Scan', 'Results'];
  const pathogenTypes = [{
    name: 'Viruses',
    start: 0,
    end: 8,
    color: 'text-blue-600'
  }, {
    name: 'Bacteria',
    start: 8,
    end: 16,
    color: 'text-green-600'
  }, {
    name: 'Fungi',
    start: 16,
    end: 24,
    color: 'text-yellow-600'
  }, {
    name: 'Allergens',
    start: 24,
    end: 32,
    color: 'text-red-600'
  }];
  const pathogens = Array.from({
    length: 32
  }, (_, i) => `Pathogen ${i + 1}`);
  const concentrations = pathogens.map((_, i) => i % 6 === 0 ? '0.05 mg/m³' : '0.00 mg/m³');
  const statuses = concentrations.map(conc => conc !== '0.00 mg/m³' ? 'Detected' : 'Not Detected');
  return <div className="container mx-auto px-4 py-8 max-w-6xl">
      <Stepper currentStep={4} steps={steps} />
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-blue-600 mb-2">
          Pathogen Detection Results
        </h2>
        <p className="text-xl text-gray-600">Detected Pathogens: 6/32<br />[ Virus: 2 | Bacteria: 1 | Fungi: 1 | Allergen: 2 ]</p>
      </div>
      {pathogenTypes.map(type => <div key={type.name} className="mb-8">
          <h3 className={`text-xl font-bold ${type.color} mb-4`}>
            {type.name}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {pathogens.slice(type.start, type.end).map((path, localIdx) => {
          const idx = type.start + localIdx;
          return <PathogenTile key={idx} name={path} concentration={concentrations[idx]} status={statuses[idx] as 'Detected' | 'Not Detected'} />;
        })}
          </div>
        </div>)}
      <div className="flex justify-center space-x-4 mt-8">
        <Button text="Export Results" icon="📤" onClick={() => console.log('Exporting Results')} />
        <Button text="Return to Home" icon="🏠" variant="secondary" onClick={() => showFrame('home')} />
      </div>
    </div>;
};