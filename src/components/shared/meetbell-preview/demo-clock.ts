'use client';

import { useSyncExternalStore } from 'react';

export type DemoEvent = {
  id: string;
  title: string;
  calendarName: string;
  calendarColor: string;
  duration: number;
  call?: { service: string; host: string };
};

// The meetings the demo shows; durations are in minutes
export const demoEvents: DemoEvent[] = [
  {
    id: 'standup',
    title: 'Daily standup',
    calendarName: 'Work',
    calendarColor: '#3b82f6',
    duration: 15,
    call: { service: 'Google Meet', host: 'meet.google.com' },
  },
  {
    id: 'review',
    title: 'Design review',
    calendarName: 'Work',
    calendarColor: '#3b82f6',
    duration: 45,
    call: { service: 'Zoom', host: 'zoom.us' },
  },
  {
    id: 'one-on-one',
    title: '1:1 with Anna',
    calendarName: 'Personal',
    calendarColor: '#22c55e',
    duration: 30,
  },
];

const subscribeToSeconds = (onChange: () => void) => {
  const id = setInterval(onChange, 1000);

  return () => clearInterval(id);
};

const getNow = () => Math.floor(Date.now() / 1000) * 1000;
const getServerSnapshot = () => null;

// Returns null during SSR so the visitor's local time never causes a hydration mismatch
export function useDemoClock() {
  const now = useSyncExternalStore(subscribeToSeconds, getNow, getServerSnapshot);

  return now === null ? null : { now };
}

export function formatTime(timestamp: number) {
  return new Date(timestamp).toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });
}

export function formatCountdown(milliseconds: number) {
  const totalSeconds = Math.max(0, Math.floor(milliseconds / 1000));
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  if (hours > 0) {
    return `${hours}h ${minutes}m`;
  }

  return `${minutes}:${String(seconds).padStart(2, '0')}`;
}
