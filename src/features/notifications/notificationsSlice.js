import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  notifications: [], // { id, message, type }
};

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    addNotification: {
      reducer: (state, action) => {
        state.notifications.push(action.payload);
      },
      prepare: (message, type = 'info') => ({
        payload: {
          id: nanoid(),
          message,
          type,
        },
      }),
    },
    removeNotification: (state, action) => {
      state.notifications = state.notifications.filter(n => n.id !== action.payload);
    },
    clearNotifications: (state) => {
      state.notifications = [];
    },
  },
});

export const { addNotification, removeNotification, clearNotifications } = notificationsSlice.actions;
export default notificationsSlice.reducer;
