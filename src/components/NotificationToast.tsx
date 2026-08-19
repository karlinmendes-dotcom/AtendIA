'use client';

import { api } from '@convex/_generated/api';
import { useMutation, useQuery } from 'convex/react';
import { CheckCircle, Info, X, XCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

type Notification = {
  _id: string;
  title: string;
  message: string;
  type: 'success' | 'error' | 'info';
  read?: boolean;
  createdAt: number;
};

const iconMap = {
  success: CheckCircle,
  error: XCircle,
  info: Info,
};

const colorMap = {
  success: 'border-green-500 bg-green-50 text-green-800',
  error: 'border-red-500 bg-red-50 text-red-800',
  info: 'border-blue-500 bg-blue-50 text-blue-800',
};

const iconColorMap = {
  success: 'text-green-500',
  error: 'text-red-500',
  info: 'text-blue-500',
};

function Toast({ notification, onDismiss }: { notification: Notification; onDismiss: () => void }) {
  const markAsRead = useMutation(api.notifications.markAsRead);
  const Icon = iconMap[notification.type];

  useEffect(() => {
    const timer = setTimeout(() => {
      void markAsRead({ id: notification._id as any });
      onDismiss();
    }, 6000);
    return () => clearTimeout(timer);
  }, [notification._id, markAsRead, onDismiss]);

  return (
    <div className={`
      flex animate-in items-start gap-3 rounded-lg border-l-4 p-4 shadow-lg
      slide-in-from-right-full
      ${colorMap[notification.type]}
    `}
    >
      <Icon className={`
        mt-0.5 size-5 shrink-0
        ${iconColorMap[notification.type]}
      `}
      />
      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold">{notification.title}</p>
        <p className="mt-0.5 text-xs opacity-80">{notification.message}</p>
      </div>
      <button
        onClick={() => {
          void markAsRead({ id: notification._id as any });
          onDismiss();
        }}
        className="
          shrink-0 rounded-md p-1 opacity-60 transition-opacity
          hover:opacity-100
        "
      >
        <X className="size-4" />
      </button>
    </div>
  );
}

export function NotificationToast() {
  const notifications = useQuery(api.notifications.getUnread);
  const [dismissed, setDismissed] = useState<Set<string>>(new Set());

  const visible = notifications?.filter(n => !dismissed.has(n._id)) ?? [];

  if (visible.length === 0) {
    return null;
  }

  return (
    <div className="
      fixed top-4 right-4 z-50 flex w-full max-w-sm flex-col gap-2
    "
    >
      {visible.map(n => (
        <Toast
          key={n._id}
          notification={n as Notification}
          onDismiss={() => setDismissed(prev => new Set(prev).add(n._id))}
        />
      ))}
    </div>
  );
}
