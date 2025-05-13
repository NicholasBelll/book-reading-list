"use client";
import { useParams } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import { useState } from 'react';
import { updateBookDetails, updateBookRating } from '../../../features/books/booksSlice';

function BookDetailsPage() {
  const params = useParams();
  const dispatch = useDispatch();
  const books = useSelector(function(state) { return state.books });
  let foundBook = null;
  for (let i = 0; i < books.length; i++) {
    if (books[i].id === params.id) {
      foundBook = books[i];
      break;
    }
  }
  const [details, setDetails] = useState(foundBook ? foundBook.details : '');
  const [rating, setRating] = useState(foundBook ? foundBook.rating : 0);
  const [saved, setSaved] = useState(false);

  if (!foundBook) {
    return <div>Book not found.</div>;
  }

  function handleSave(e) {
    e.preventDefault();
    dispatch(updateBookDetails({ id: params.id, details: details }));
    dispatch(updateBookRating({ id: params.id, rating: rating }));
    setSaved(true);
    setTimeout(function() { setSaved(false); }, 1200);
  }

  function handleRatingClick(num) {
    setRating(num);
  }

  return (
    <div style={{ maxWidth: '400px', margin: '40px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '10px' }}>
      <h2>{foundBook.title}</h2>
      <div>by {foundBook.author}</div>
      <div style={{ margin: '10px 0' }}>
        <span style={{ background: foundBook.isRead ? 'green' : '#eee', color: foundBook.isRead ? 'white' : '#333', padding: '4px 10px', borderRadius: '8px' }}>
          {foundBook.isRead ? 'Read' : 'Unread'}
        </span>
      </div>
      <form onSubmit={handleSave}>
        <div>
          <label>Details/Notes</label>
          <br />
          <textarea
            style={{ width: '100%', minHeight: '60px' }}
            value={details}
            onChange={function(e) { setDetails(e.target.value); }}
            placeholder="Add notes..."
          />
        </div>
        <div style={{ margin: '10px 0' }}>
          <label>Rating</label>
          <div>
            <button type="button" onClick={function() { handleRatingClick(1); }} style={{ color: rating >= 1 ? 'gold' : '#ccc', fontSize: '20px', background: 'none', border: 'none' }}>★</button>
            <button type="button" onClick={function() { handleRatingClick(2); }} style={{ color: rating >= 2 ? 'gold' : '#ccc', fontSize: '20px', background: 'none', border: 'none' }}>★</button>
            <button type="button" onClick={function() { handleRatingClick(3); }} style={{ color: rating >= 3 ? 'gold' : '#ccc', fontSize: '20px', background: 'none', border: 'none' }}>★</button>
            <button type="button" onClick={function() { handleRatingClick(4); }} style={{ color: rating >= 4 ? 'gold' : '#ccc', fontSize: '20px', background: 'none', border: 'none' }}>★</button>
            <button type="button" onClick={function() { handleRatingClick(5); }} style={{ color: rating >= 5 ? 'gold' : '#ccc', fontSize: '20px', background: 'none', border: 'none' }}>★</button>
          </div>
        </div>
        <button type="submit" style={{ background: '#1976d2', color: 'white', padding: '8px 20px', border: 'none', borderRadius: '5px', marginTop: '10px' }}>
          Save
        </button>
        {saved ? <span style={{ marginLeft: '10px', color: 'green' }}>Saved!</span> : null}
      </form>
      {foundBook.details ? (
        <div style={{ marginTop: '15px' }}>
          <div><b>Your Notes:</b></div>
          <div style={{ background: '#f9f9f9', border: '1px solid #eee', borderRadius: '5px', padding: '8px' }}>{foundBook.details}</div>
        </div>
      ) : null}
      {foundBook.rating > 0 ? (
        <div style={{ marginTop: '10px' }}>
          <span><b>Your Rating:</b></span>
          <span style={{ color: 'gold', fontSize: '18px', marginLeft: '5px' }}>{'★'.repeat(foundBook.rating)}{'☆'.repeat(5-foundBook.rating)}</span>
        </div>
      ) : null}
      <div style={{ marginTop: '20px' }}>
        <Link href="/reading-list">&larr; Back to list</Link>
      </div>
    </div>
  );
}

export default BookDetailsPage;
