import React from 'react';

interface Todo {
  id: number;
  title: string;
  description: string;
  date: Date;
  importance: string;
  labels: string[];
}

interface TodoListProps {
  todos: Todo[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <div className="mb-4">
      {todos.map((todo) => (
        <div key={todo.id} className="mb-2 p-2 border rounded-md">
          <h3 className="font-semibold">{todo.title}</h3>
          <p>{todo.description}</p>
          <p>Due Date: {todo.date.toDateString()}</p>
          <p>Importance: {todo.importance}</p>
          <p>Labels: {todo.labels.join(', ')}</p>
          <button className="bg-green-500 text-white px-3 py-1 rounded-md mr-2">
            Mark Complete
          </button>
          <button className="bg-red-500 text-white px-3 py-1 rounded-md">Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
