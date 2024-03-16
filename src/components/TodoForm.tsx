import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface Todo {
    title: string;
    description: string;
    date: Date | null;
    importance: string;
    labels: string[];
}

interface TodoFormProps {
    addTodo: (todo: Todo) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState<Date | null>(null);
    const [importance, setImportance] = useState('Low');
    const [labels, setLabels] = useState<string[]>([]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title.trim() || !date) return;
        addTodo({ title, description, date, importance, labels });
        setTitle('');
        setDescription('');
        setDate(null);
        setImportance('Low');
        setLabels([]);
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full mb-2 px-3 py-2 border border-gray-300 rounded-md"
            />
            <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full mb-2 px-3 py-2 border border-gray-300 rounded-md"
            />
            <DatePicker
                selected={date}
                onChange={(date) => setDate(date as Date)}
                className="w-full mb-2 px-3 py-2 border border-gray-300 rounded-md"
            />
            <select
                value={importance}
                onChange={(e) => setImportance(e.target.value)}
                className="w-full mb-2 px-3 py-2 border border-gray-300 rounded-md"
            >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
            </select>
            <input
                type="text"
                placeholder="Labels"
                value={labels.join(', ')}
                onChange={(e) => setLabels(e.target.value.split(',').map((label) => label.trim()))}
                className="w-full mb-2 px-3 py-2 border border-gray-300 rounded-md"
            />
            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
                Add Todo
            </button>
        </form>
    );
};

export default TodoForm;
