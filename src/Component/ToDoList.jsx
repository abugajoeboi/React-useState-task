import React, { useState } from 'react';

const TodoList = () => {
  // Step 3: Initialize state with an empty array to manage todo items
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Function to handle adding a new todo item
  const addTodo = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setTodos([...todos, { id: todos.length + 1, text: inputValue }]);
      setInputValue(''); // Clear the input field
    }
  };

  return (
    <div>
      <h2>Todo List</h2>
      
      {/* Form to add new todo items */}
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new todo"
        />
        <button type="submit">Add Todo</button>
      </form>

      {/* Display the list of todos */}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
