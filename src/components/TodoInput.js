'use client';

import React from 'react';
import { useTodos } from '@hooks/useTodos';

const TodoInput: React.FC = () => {
  const { addTodo } = useTodos();
  const [inputValue, setInputValue] = React.useState<string>('');

  const handleAddTodo = (): void => {
    if (inputValue.trim()) {
      addTodo(inputValue);
      setInputValue('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  };

  return (
    <div className="w-full my-2 mx-0">
      <input
        type="text"
        value={inputValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Add a new todo"
        aria-label="New todo input"
        aria-describedby="todo-input-description" />

      <span id="todo-input-description" className="sr-only">
        Enter a new todo item and press the Add Todo button or Enter key
      </span>

      <button
        onClick={handleAddTodo}
        aria-label="Add new todo"
        disabled={!inputValue.trim()}>

        Add Todo
      </button>
    </div>);

};

export default TodoInput;