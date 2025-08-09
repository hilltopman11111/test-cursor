import React from 'react';
import { Header } from './components/Header';
import { TodoInput } from './components/TodoInput';
import { FilterTabs } from './components/FilterTabs';
import { TodoList } from './components/TodoList';
import { Footer } from './components/Footer';
import { useTodos } from './hooks/useTodos';

function App() {
  const {
    todos,
    filter,
    stats,
    addTodo,
    toggleTodo,
    deleteTodo,
    clearCompleted,
    setFilter,
  } = useTodos();

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <Header />
        
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8">
          <TodoInput onAddTodo={addTodo} />
          
          {stats.total > 0 && (
            <>
              <FilterTabs
                currentFilter={filter}
                onFilterChange={setFilter}
                stats={stats}
              />
              
              <TodoList
                todos={todos}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
              />
              
              <Footer
                completedCount={stats.completed}
                onClearCompleted={clearCompleted}
              />
            </>
          )}
        </div>
        
        {stats.total === 0 && (
          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              Your todos will appear here once you add them
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;