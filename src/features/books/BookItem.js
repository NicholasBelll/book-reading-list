"use client";
import { useDispatch } from 'react-redux';
import { toggleReadStatus, removeBook } from './booksSlice';
import { addNotification } from '../notifications/notificationsSlice';
import Link from 'next/link';

export default function BookItem({ book }) {
  const dispatch = useDispatch();
  return (
    <li className={`flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 rounded-xl shadow border transition bg-white hover:shadow-lg ${book.isRead ? 'opacity-80' : ''}`}>
      <div className="flex-1 flex flex-col gap-1 md:flex-row md:items-center md:gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-lg font-semibold text-gray-800">{book.title}</span>
            <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${book.isRead ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-700'}`}>{book.isRead ? 'Read' : 'Unread'}</span>
          </div>
          <div className="text-gray-500 text-sm">by {book.author}</div>
        </div>
        <div className="flex gap-2 items-center md:ml-4 mt-2 md:mt-0">
          {/* Notes Added Counter */}
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-gray-100 text-xs text-gray-600 border border-gray-200">
            📝 {book.notesCount || 0} Notes
          </span>
          {/* Show rating if present */}
          {book.rating > 0 && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-yellow-100 text-xs text-yellow-700 border border-yellow-200">
              {'★'.repeat(book.rating)}{'☆'.repeat(5-book.rating)}
            </span>
          )}
        </div>
      </div>
      <div className="flex gap-2 md:flex-col md:gap-2 items-end md:items-center">
        <button
          className="px-3 py-1 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold rounded transition"
          onClick={() => dispatch(toggleReadStatus(book.id))}
        >
          {book.isRead ? 'Mark Unread' : 'Mark Read'}
        </button>
        <button
          className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white font-semibold rounded transition"
          onClick={() => {
            dispatch(removeBook(book.id));
            dispatch(addNotification(`${book.title} by ${book.author} removed.`, 'error'));
          }}
        >
          Delete
        </button>
        <Link
          className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded transition text-center"
          href={`/book/${book.id}`}
        >
          Details
        </Link>
      </div>
    </li>
  );
}
