import React from 'react';

const TodoItem = ({ todo, onToggle, onDelete }) => {
    return (
        <div className="todo-container">
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={onToggle}
            />
            <span className={todo.completed ? 'completed' : ''}>{todo.text}</span>
            <button onClick={onDelete}>Delete</button>
        </div>
    );
};

export default TodoItem;