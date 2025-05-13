"use client";
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeNotification } from './notificationsSlice';

const NotificationBanner = () => {
  const notifications = useSelector(state => state.notifications.notifications);
  const dispatch = useDispatch();

  if (!notifications.length) return null;

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 space-y-2">
      {notifications.map(n => (
        <div
          key={n.id}
          className={`px-4 py-2 rounded shadow text-white transition-all
            ${n.type === 'error' ? 'bg-red-500' : n.type === 'success' ? 'bg-green-500' : 'bg-blue-500'}`}
        >
          <span>{n.message}</span>
          <button
            className="ml-4 text-sm underline"
            onClick={() => dispatch(removeNotification(n.id))}
          >
            Dismiss
          </button>
        </div>
      ))}
    </div>
  );
};

export default NotificationBanner;
