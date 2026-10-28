'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { FaVideo } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';
import { demoEvents, formatCountdown, formatTime, useDemoClock } from './demo-clock';

type MeetbellReminderProps = {
  onClose: () => void;
};

const reminderEvent = demoEvents.find((event) => event.id === 'review') ?? demoEvents[0];

// Matches the "1 min before" lead time shown in the settings preview
const REMINDER_LEAD = 60_000;

export function MeetbellReminder({ onClose }: MeetbellReminderProps) {
  const clock = useDemoClock();
  // The reminder mounts on every open, so the countdown starts over each time
  const [openedAt] = useState(() => Math.floor(Date.now() / 1000) * 1000);
  const dialogRef = useRef<HTMLDivElement>(null);
  const dismissRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = 'hidden';
    dismissRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }

      // Keep keyboard focus inside the reminder while it covers the page
      if (event.key === 'Tab' && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>('button');
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, [onClose]);

  const startsAt = openedAt + REMINDER_LEAD;
  const endsAt = startsAt + reminderEvent.duration * 60_000;
  const timeLeft = clock ? startsAt - clock.now : REMINDER_LEAD;

  // Rendered into body so the page's stacking contexts (header, isolated sections) never cover it
  return createPortal(
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="meetbell-reminder-title"
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-[#262626]/90 px-4 py-10 backdrop-blur-2xl motion-safe:animate-in motion-safe:fade-in motion-safe:duration-300"
    >
      <div className="relative flex w-full max-w-xl flex-col items-center text-center motion-safe:animate-in motion-safe:zoom-in-95 motion-safe:duration-300">
        <Image
          src="/meetbell/meetbell.png"
          width={64}
          height={64}
          alt=""
          className="app-icon"
        />

        <p className="mt-10 text-xs font-semibold tracking-[0.2em] text-white/60 uppercase">
          {timeLeft > 0 ? 'Starts in' : 'Starting now'}
        </p>

        <p className="mt-2 text-7xl font-semibold text-white tabular-nums md:text-8xl">{formatCountdown(timeLeft)}</p>

        <div className="mt-10 flex w-full flex-col items-center gap-2 rounded-3xl border border-white/10 bg-white/[0.04] px-6 py-8">
          <span className="inline-flex items-center gap-1.5 text-xs text-white/70">
            <span
              className="size-2 rounded-full"
              style={{ backgroundColor: reminderEvent.calendarColor }}
            />
            {reminderEvent.calendarName}
          </span>

          <h2
            id="meetbell-reminder-title"
            className="text-3xl font-bold tracking-tight text-white"
          >
            {reminderEvent.title}
          </h2>

          <p className="text-base text-white/60 tabular-nums">{`${formatTime(startsAt)} – ${formatTime(endsAt)}`}</p>
        </div>

        <div className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4">
          <button
            ref={dismissRef}
            type="button"
            onClick={onClose}
            className="inline-flex cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/15 px-14 py-2 text-sm font-medium text-white transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Close
          </button>

          <button
            type="button"
            onClick={onClose}
            className="inline-flex cursor-pointer items-center justify-center gap-3 rounded-full bg-white/10 py-2 pr-3 pl-5 text-sm font-medium text-white transition-colors hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Snooze
            <span className="h-4 w-px bg-white/25" />
            <FiChevronDown size={14} />
          </button>

          {reminderEvent.call && (
            <button
              type="button"
              onClick={onClose}
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#0a84ff] px-11 py-2 text-sm font-medium text-white transition-colors hover:bg-[#3399ff] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <FaVideo size={14} />
              Join {reminderEvent.call.service}
            </button>
          )}
        </div>

        <p className="mt-10 text-sm text-white/35">
          This is a preview. In the app, the join button opens the call link from your calendar event.
        </p>
      </div>
    </div>,
    document.body
  );
}
