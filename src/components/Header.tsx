import React from 'react';
import { CheckSquare } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="text-center mb-8 animate-fade-in">
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg">
          <CheckSquare className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
          Modern Todo
        </h1>
      </div>
      <p className="text-gray-600 text-lg">
        Stay organized and productive with your beautiful todo list
      </p>
    </header>
  );
};