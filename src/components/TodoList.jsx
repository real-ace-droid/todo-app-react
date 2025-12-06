import React from 'react';
import useTodos from '../hooks/useTodos';
import TodoItem from './TodoItem';

const TodoList = () => {
  const { todos, toggleTodo, deleteTodo } = useTodos();

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={() => toggleTodo(todo.id)}
          onDelete={() => deleteTodo(todo.id)}
        />
      ))}
    </ul>
  );
};

export default TodoList;