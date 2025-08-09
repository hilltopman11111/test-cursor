import React from 'react';
import { TodoItem } from './TodoItem';
import { Todo } from '../types/todo';
import { ListTodo, Sparkles } from 'lucide-react';

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onDelete }) => {
  if (todos.length === 0) {
    return (
      <div className="text-center py-16 animate-fade-in">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full mb-6">
          <ListTodo className="w-10 h-10 text-blue-500" />
        </div>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">No todos yet</h3>
        <p className="text-gray-500 max-w-sm mx-auto">
          Start your productive day by adding your first todo above
        </p>
        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-400">
          <Sparkles className="w-4 h-4" />
          <span>Stay organized, stay focused</span>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {todos.map((todo, index) => (
        <div
          key={todo.id}
          style={{
            animationDelay: `${index * 0.1}s`,
          }}
        >
          <TodoItem
            todo={todo}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        </div>
      ))}
    </div>
  );
};