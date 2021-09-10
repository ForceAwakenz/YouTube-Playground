import React from 'react';
import TodoList from './Todo/TodoList';

function App() {
  const todos = [
    { id: 1, completed: false, title: 'To buy a bread' },
    { id: 2, completed: false, title: 'To buy a butter' },
    { id: 3, completed: false, title: 'To buy milk' },
  ];

  function toggleTodo(id) {
    console.log('todo id', id);
  }

  return (
    <div className='wrapper'>
      <h1>React tutorial</h1>
      <TodoList todos={todos} onToggle={toggleTodo} />
    </div>
  );
}

export default App;
