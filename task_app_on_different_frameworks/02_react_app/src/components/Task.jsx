import React from 'react';

export default function Task(props) {
  function closeTask(e) {
    e.target.parentElement.remove();
  }
  return (
    <div className='taskItem'>
      <span>{props.text}</span>
      <button onClick={closeTask}>Close</button>
    </div>
  );
}
