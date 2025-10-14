import React from 'react';
interface PathogenTileProps {
  name: string;
  concentration: string;
  status: 'Detected' | 'Not Detected';
  onHover?: () => void;
}
export const PathogenTile: React.FC<PathogenTileProps> = ({
  name,
  concentration,
  status,
  onHover
}) => {
  const statusColor = status === 'Detected' ? 'text-red-600' : 'text-green-600';
  return <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col items-center shadow hover:shadow-lg transition-all duration-300 hover:scale-105" onMouseEnter={onHover}>
      <p className="font-bold text-gray-800">{name}</p>
      <p className="text-sm text-gray-500 my-1">{concentration}</p>
      <p className={`text-sm font-semibold ${statusColor}`}>{status}</p>
    </div>;
};