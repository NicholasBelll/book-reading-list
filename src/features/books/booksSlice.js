import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

var booksSlice = createSlice({
  name: 'books',
  initialState: [],
  reducers: {
    addBook: {
      reducer: function(state, action) {
        state.push(action.payload);
      },
      prepare: function(book) {
        return {
          payload: {
            id: nanoid(),
            title: book.title,
            author: book.author,
            isRead: false,
            details: '',
            rating: 0,
            notesCount: 0
          }
        };
      }
    },
    toggleReadStatus: function(state, action) {
      for (var i = 0; i < state.length; i++) {
        if (state[i].id === action.payload) {
          state[i].isRead = !state[i].isRead;
        }
      }
    },
    removeBook: function(state, action) {
      var newState = [];
      for (var i = 0; i < state.length; i++) {
        if (state[i].id !== action.payload) {
          newState.push(state[i]);
        }
      }
      return newState;
    },
    updateBookDetails: function(state, action) {
      var id = action.payload.id;
      var details = action.payload.details;
      for (var i = 0; i < state.length; i++) {
        if (state[i].id === id) {
          if (details && details !== state[i].details) {
            if (!state[i].notesCount) {
              state[i].notesCount = 0;
            }
            state[i].notesCount = state[i].notesCount + 1;
          }
          state[i].details = details;
        }
      }
    },
    updateBookRating: function(state, action) {
      var id = action.payload.id;
      var rating = action.payload.rating;
      for (var i = 0; i < state.length; i++) {
        if (state[i].id === id) {
          state[i].rating = rating;
        }
      }
    }
  }
});

export var addBook = booksSlice.actions.addBook;
export var toggleReadStatus = booksSlice.actions.toggleReadStatus;
export var removeBook = booksSlice.actions.removeBook;
export var updateBookDetails = booksSlice.actions.updateBookDetails;
export var updateBookRating = booksSlice.actions.updateBookRating;
export default booksSlice.reducer;
