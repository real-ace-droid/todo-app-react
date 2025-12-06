'use client';

import React from 'react';
import { useTodos } from '@hooks/useTodos';

const TodoActions: React.FC = (): JSX.Element => {
  const { clearCompleted } = useTodos();

  const handleClearCompleted = (): void => {
    clearCompleted();
  };

  return (
    <div>
      <button
        onClick={handleClearCompleted}
        aria-label="Clear all completed todos">

        Clear Completed
      </button>
    </div>);

};

export default TodoActions;