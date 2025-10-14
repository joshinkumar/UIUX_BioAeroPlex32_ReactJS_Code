import React from 'react';
import { Button } from '../components/Button';
interface HomePageProps {
  showFrame: (screen: string) => void;
}
export const HomePage: React.FC<HomePageProps> = ({
  showFrame
}) => {
  return <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-gray-50 to-blue-50">
      <div className="w-full max-w-md text-center space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-blue-600">BioAeroPlex32</h1>
          <h2 className="text-1xl font-bold text-blue-600">Shield Against Airborne Threats</h2>
          <div className="flex justify-center space-x-2 text-xl text-gray-500">
            <span>💨</span>
            <span>🦠</span>
            <span>🧫</span>
            <span>🍄</span>
            <span>🤧</span>
          </div>
          <p className="text-green-600 text-lg mt-4">
            System Ready | Last Calibration: 2025-10-10
          </p>
        </div>
        <div className="space-y-4 mt-8">
          <Button text="Start New Test" icon="▶" onClick={() => showFrame('baseline')} fullWidth />
          <Button text="View History" icon="📜" variant="secondary" onClick={() => console.log('Viewing History')} fullWidth />
          <Button text="Settings" icon="⚙" variant="secondary" onClick={() => console.log('Opening Settings')} fullWidth />
          <Button text="Help" icon="❓" variant="secondary" onClick={() => console.log('Help Menu')} fullWidth />
        </div>
        <div className="flex items-center justify-center mt-6">
          <label className="flex items-center cursor-pointer text-blue-600">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-500" />
            <span className="ml-2">Engage Test Mode</span>
          </label>
        </div>
      </div>
    </div>;
};