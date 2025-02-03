import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa'; // Import an icon for adding tasks

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  return (
    <div>
      <h1>My To-Do List</h1>
      {/* Add task input and button here */}
      <ul>
        {todos.map((todo) => (
          <li key={todo}> {todo} </li> // Display each todo
        ))}
      </ul>
    </div>
  );
}