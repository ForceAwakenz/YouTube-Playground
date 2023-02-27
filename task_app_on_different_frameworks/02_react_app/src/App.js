import React from 'react';
import Task from './components/Task';

function App() {
  return (
    <>
      <input type='text' name='addTask' id='taskInput' />
      <button>Add</button>
      <Task text='hi' />
      <Task text='hi' />
    </>
  );
}

export default App;
