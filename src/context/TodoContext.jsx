import React, { createContext, useState, useEffect } from 'react';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
      const id = Date.now(); // Generate a unique ID
    if (text.trim()) {
      setTodos([...todos, { id, text, completed: false }]); // Include ID
    } else {
      alert("Todo cannot be empty!");
    }
  };

  const toggleTodo = (id) => {
    const newTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  const clearCompleted = () => {
    const newTodos = todos.filter(todo => !todo.completed);
    setTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleTodo, clearCompleted, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};