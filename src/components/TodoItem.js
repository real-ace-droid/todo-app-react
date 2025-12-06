'use client';

import React from 'react';

interface Todo {
  id: string | number;
  text: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: Todo;
  onToggle: () => void;
  onDelete: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
  return (
    <div className="hover:bg-[#ff1a1a]">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={onToggle}
        aria-label={`Mark "${todo.text}" as ${todo.completed ? 'incomplete' : 'complete'}`} />


      <span className={todo.completed ? 'completed' : ''}>
        {todo.text}
      </span>
      
      <button
        onClick={onDelete}
        aria-label={`Delete "${todo.text}"`}>

        Delete
      </button>
    </div>);

};

export default TodoItem;