import { configureStore } from '@reduxjs/toolkit';
import booksReducer from '../features/books/booksSlice';
import notificationsReducer from '../features/notifications/notificationsSlice';

const store = configureStore({
  reducer: {
    books: booksReducer,
    notifications: notificationsReducer,
  },
});

store.subscribe(() => {
  console.log('Books state:', store.getState().books);
  console.log('Notifications state:', store.getState().notifications);
});

export default store;
