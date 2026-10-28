'use client';

import { useSyncExternalStore } from 'react';

const MINUTE = 60_000;

export type DemoEvent = {
  id: string;
  title: string;
  calendarName: string;
  calendarColor: string;
  startOffset: number;
  duration: number;
  call?: { service: string; host: string };
};

// Offsets are in minutes from the moment the visitor opened the page
export const demoEvents: DemoEvent[] = [
  {
    id: 'standup',
    title: 'Daily standup',
    calendarName: 'Work',
    calendarColor: '#3b82f6',
    startOffset: -6,
    duration: 15,
    call: { service: 'Google Meet', host: 'meet.google.com' },
  },
  {
    id: 'review',
    title: 'Design review',
    calendarName: 'Work',
    calendarColor: '#3b82f6',
    startOffset: 14,
    duration: 45,
    call: { service: 'Zoom', host: 'zoom.us' },
  },
  {
    id: 'one-on-one',
    title: '1:1 with Anna',
    calendarName: 'Personal',
    calendarColor: '#22c55e',
    startOffset: 150,
    duration: 30,
  },
];

let demoStart: number | null = null;

const subscribeToSeconds = (onChange: () => void) => {
  const id = setInterval(onChange, 1000);

  return () => clearInterval(id);
};

const subscribeToNothing = () => () => {};

const getNow = () => Math.floor(Date.now() / 1000) * 1000;
const getDemoStart = () => (demoStart ??= Math.floor(Date.now() / MINUTE) * MINUTE);
const getServerSnapshot = () => null;

// Returns null during SSR so the visitor's local time never causes a hydration mismatch
export function useDemoClock() {
  const now = useSyncExternalStore(subscribeToSeconds, getNow, getServerSnapshot);
  const start = useSyncExternalStore(subscribeToNothing, getDemoStart, getServerSnapshot);

  return now === null || start === null ? null : { now, start };
}

export function getEventTimes(event: DemoEvent, start: number) {
  const startsAt = start + event.startOffset * MINUTE;

  return { startsAt, endsAt: startsAt + event.duration * MINUTE };
}

export function formatTime(timestamp: number) {
  return new Date(timestamp).toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });
}

export function formatMenuBarDate(timestamp: number) {
  const date = new Date(timestamp);
  const day = date.toLocaleDateString(undefined, { weekday: 'short', day: 'numeric', month: 'short' });

  return `${day} ${formatTime(timestamp)}`;
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

export function formatMinutes(milliseconds: number) {
  const totalMinutes = Math.max(1, Math.ceil(milliseconds / MINUTE));
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  if (hours === 0) {
    return `${minutes} min`;
  }

  return minutes === 0 ? `${hours} h` : `${hours} h ${minutes} min`;
}
