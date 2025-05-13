"use client";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from './booksSlice';
import { addNotification } from '../notifications/notificationsSlice';

export default function BookForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
  const [error, setError] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!title.trim() || !author.trim()) {
      setError('Both title and author are required.');
      return;
    }
    setError('');
    dispatch(addBook({ title, author }));
    dispatch(addNotification(`${title} by ${author} added!`, 'success'));
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3 items-center">
      <input
        className="border border-gray-300 rounded px-3 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-200"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Book Title"
      />
      <input
        className="border border-gray-300 rounded px-3 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-200"
        value={author}
        onChange={e => setAuthor(e.target.value)}
        placeholder="Author"
      />
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded shadow transition" type="submit">
        Add Book
      </button>
      {error && <div className="text-red-500 text-sm mt-2 md:mt-0 md:ml-4">{error}</div>}
    </form>
  );
}
