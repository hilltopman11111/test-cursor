import React from 'react';
import { Trash2, Calendar } from 'lucide-react';
import { Todo } from '../types/todo';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  return (
    <div className="todo-item group animate-slide-in">
      <div className="flex items-center gap-4">
        <button
          onClick={() => onToggle(todo.id)}
          className="relative flex items-center justify-center"
        >
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
            className="todo-checkbox"
          />
          {todo.completed && (
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          )}
        </button>
        
        <div className="flex-1 min-w-0">
          <p className={`todo-text ${todo.completed ? 'completed' : ''} text-lg`}>
            {todo.text}
          </p>
          <div className="flex items-center gap-1 text-sm text-gray-400 mt-1">
            <Calendar className="w-3 h-3" />
            <span>{formatDate(todo.createdAt)}</span>
          </div>
        </div>
        
        <button
          onClick={() => onDelete(todo.id)}
          className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all duration-200 opacity-0 group-hover:opacity-100"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};