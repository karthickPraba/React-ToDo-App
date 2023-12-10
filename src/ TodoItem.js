import React from 'react';

const TodoItem = ({ todo, removeTodo, toggleTodo }) => {
  return (
    <li className='con'>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={toggleTodo}
        className='but'
      />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <button onClick={removeTodo} className='button'>Remove</button>
    </li>
  );
};

export default TodoItem;
