"use client";
import BookForm from '../../features/books/BookForm';
import BookList from '../../features/books/BookList';

export default function ReadingListPage() {
  return (
    <section>
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-extrabold text-blue-700 mb-2">My Reading List</h1>
        <p className="text-gray-500">Add books you want to read and track your progress!</p>
      </div>
      <div className="bg-white rounded-xl shadow p-6 mb-8">
        <BookForm />
      </div>
      <div className="bg-white rounded-xl shadow p-6">
        <BookList />
      </div>
    </section>
  );
}
