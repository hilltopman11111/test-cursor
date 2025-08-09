# Modern Todo App

A beautiful, modern todo application built with React, TypeScript, and Tailwind CSS. Features a clean design with smooth animations, local storage persistence, and responsive layout.

## ✨ Features

- **Beautiful UI**: Modern design with gradient backgrounds and smooth animations
- **Responsive**: Works perfectly on desktop and mobile devices
- **Persistent Storage**: Your todos are saved to localStorage automatically
- **Filter Options**: View all, active, or completed todos
- **Real-time Stats**: See counts for different todo states
- **Smooth Animations**: Delightful micro-interactions and transitions
- **TypeScript**: Fully typed for better development experience
- **Modern Stack**: Built with React 18, Vite, and Tailwind CSS

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🛠️ Technology Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type safety and better developer experience
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons
- **Local Storage** - Persistent data storage

## 📱 Usage

1. **Add a Todo**: Type in the input field and press Enter or click "Add"
2. **Complete a Todo**: Click the circular checkbox to mark as complete
3. **Delete a Todo**: Hover over a todo and click the trash icon
4. **Filter Todos**: Use the filter tabs to view all, active, or completed todos
5. **Clear Completed**: Click "Clear completed" to remove all finished todos

## 🎨 Design Features

- **Gradient Backgrounds**: Beautiful blue-to-purple gradients
- **Glass Morphism**: Semi-transparent containers with backdrop blur
- **Hover Effects**: Interactive elements with smooth transitions
- **Responsive Design**: Optimized for all screen sizes
- **Custom Animations**: Fade-in, slide-in, and bounce effects

## 📂 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # App header with title
│   ├── TodoInput.tsx   # Input form for new todos
│   ├── TodoItem.tsx    # Individual todo item
│   ├── TodoList.tsx    # List of todos with empty state
│   ├── FilterTabs.tsx  # Filter navigation tabs
│   └── Footer.tsx      # Footer with clear completed
├── hooks/              # Custom React hooks
│   └── useTodos.ts     # Todo state management
├── types/              # TypeScript type definitions
│   └── todo.ts         # Todo and filter types
├── App.tsx             # Main app component
├── main.tsx           # React entry point
└── index.css          # Global styles and Tailwind
```

## 🤝 Contributing

Feel free to open issues and pull requests to improve the app!

## 📄 License

This project is open source and available under the MIT License.