import React from 'react';
import useTodos from '../hooks/useTodos';

const TodoInput = () => {
  const { addTodo } = useTodos();
  const [inputValue, setInputValue] = React.useState('');

  const handleAddTodo = () => {
    addTodo(inputValue);
    setInputValue('');
  };

  return (
    <div className="todo-input-container">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default TodoInput;