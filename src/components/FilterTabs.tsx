import React from 'react';
import { FilterType } from '../types/todo';

interface FilterTabsProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  stats: {
    total: number;
    active: number;
    completed: number;
  };
}

export const FilterTabs: React.FC<FilterTabsProps> = ({ currentFilter, onFilterChange, stats }) => {
  const filters: { key: FilterType; label: string; count: number }[] = [
    { key: 'all', label: 'All', count: stats.total },
    { key: 'active', label: 'Active', count: stats.active },
    { key: 'completed', label: 'Completed', count: stats.completed },
  ];

  return (
    <div className="flex justify-center mb-6 animate-fade-in">
      <div className="flex bg-gray-100 rounded-xl p-1 shadow-inner">
        {filters.map((filter) => (
          <button
            key={filter.key}
            onClick={() => onFilterChange(filter.key)}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 ${
              currentFilter === filter.key
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg transform scale-105'
                : 'text-gray-600 hover:text-gray-800 hover:bg-white hover:shadow-sm'
            }`}
          >
            <span>{filter.label}</span>
            <span className={`text-xs px-2 py-1 rounded-full ${
              currentFilter === filter.key
                ? 'bg-white/20 text-white'
                : 'bg-gray-200 text-gray-500'
            }`}>
              {filter.count}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};