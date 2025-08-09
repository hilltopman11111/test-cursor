import React from 'react';
import { Trash2 } from 'lucide-react';

interface FooterProps {
  completedCount: number;
  onClearCompleted: () => void;
}

export const Footer: React.FC<FooterProps> = ({ completedCount, onClearCompleted }) => {
  if (completedCount === 0) return null;

  return (
    <div className="mt-8 flex justify-center animate-fade-in">
      <button
        onClick={onClearCompleted}
        className="flex items-center gap-2 px-4 py-2 text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all duration-200 text-sm font-medium"
      >
        <Trash2 className="w-4 h-4" />
        Clear {completedCount} completed {completedCount === 1 ? 'item' : 'items'}
      </button>
    </div>
  );
};