import React from 'react';
import useTodos from '../hooks/useTodos';

const TodoActions = () => {
  const { clearCompleted } = useTodos();

  return (
    <div>
      <button onClick={clearCompleted}>Clear Completed</button>
    </div>
  );
};

export default TodoActions;