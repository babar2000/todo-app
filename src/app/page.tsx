"use client"
import React, { useState } from 'react';
import TodoForm from '@/components/TodoForm';
import TodoList from '@/components/TodoList';

const Home: React.FC = () => {
  const [todos, setTodos] = useState<any[]>([]);

  const addTodo = (todo: any) => {
    setTodos((prevTodos) => [...prevTodos, { ...todo, id: Date.now() }]);
  };

  return (
    <div className="container mx-auto mt-4 p-4">
      <h1 className="text-3xl font-semibold mb-4">Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
};

export default Home;
