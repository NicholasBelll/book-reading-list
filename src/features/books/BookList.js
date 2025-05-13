"use client";
import React from 'react';
import { useSelector } from 'react-redux';
import BookItem from './BookItem';

export default function BookList() {
  const books = useSelector(state => state.books);
  if (!books.length) return <div className="text-gray-400 text-center py-8">No books yet. Add your first book above!</div>;
  return (
    <ul className="space-y-4">
      {books.map(book => (
        <BookItem key={book.id} book={book} />
      ))}
    </ul>
  );
}
