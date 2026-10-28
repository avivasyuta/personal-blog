'use client';

import type { ReactNode } from 'react';
import { FaApple, FaVideo } from 'react-icons/fa';
import { FiBattery, FiChevronRight, FiWifi } from 'react-icons/fi';
import { cn } from '@/src/lib/utils';
import {
  type DemoEvent,
  demoEvents,
  formatMenuBarDate,
  formatMinutes,
  formatTime,
  getEventTimes,
  useDemoClock,
} from './demo-clock';

type MeetbellMenuBarProps = {
  isOpen: boolean;
  onToggle?: () => void;
  className?: string;
};

type EventRowProps = {
  event: DemoEvent;
  details: ReactNode;
};

type MenuItemProps = {
  label: string;
  shortcut?: string;
  hasSubmenu?: boolean;
};

function MenuBarIcon() {
  return (
    <span
      aria-hidden
      className="size-3.5 bg-current [mask:url(/meetbell/menu-bar-icon.svg)_center/contain_no-repeat]"
    />
  );
}

function EventRow({ event, details }: EventRowProps) {
  return (
    <li className="flex items-center gap-2.5 px-2 py-1">
      <span
        className="h-9 w-[3px] shrink-0 rounded-full"
        style={{ backgroundColor: event.calendarColor }}
      />

      <span className="flex min-w-0 flex-1 flex-col">
        <span className="truncate text-[13px] font-semibold text-white">{event.title}</span>
        <span className="truncate text-[11px] text-white/60 tabular-nums">{details}</span>
      </span>

      {event.call && (
        <span className="flex h-5.5 w-10 shrink-0 items-center justify-center rounded-full bg-[#30d158] text-white">
          <FaVideo size={11} />
        </span>
      )}
    </li>
  );
}

function MenuItem({ label, shortcut, hasSubmenu }: MenuItemProps) {
  return (
    <li className="flex items-center justify-between px-2 py-[3px] text-[13px] text-white/90">
      {label}
      {shortcut && <span className="text-white/45">{shortcut}</span>}
      {hasSubmenu && (
        <FiChevronRight
          size={13}
          className="text-white/60"
        />
      )}
    </li>
  );
}

function MenuSeparator() {
  return <li className="mx-2 my-1.5 h-px bg-white/10" />;
}

export function MeetbellMenuBar({ isOpen, onToggle, className }: MeetbellMenuBarProps) {
  const clock = useDemoClock();

  const events = clock
    ? demoEvents
        .map((event) => ({ event, ...getEventTimes(event, clock.start) }))
        .filter(({ endsAt }) => endsAt > clock.now)
    : [];
  const current = events.filter(({ startsAt }) => startsAt <= (clock?.now ?? 0));
  const upcoming = events.filter(({ startsAt }) => startsAt > (clock?.now ?? 0));

  const bellClasses = cn(
    'flex h-5 items-center rounded-full px-1.5 transition-colors',
    isOpen ? 'bg-white/25 text-white' : 'text-white/90'
  );

  return (
    <div
      className={cn(
        'relative h-90 w-full overflow-hidden rounded-2xl border border-white/10 bg-[#06110d] shadow-[0_40px_80px_-30px_rgba(31,194,122,0.45)]',
        className
      )}
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(110%_80%_at_85%_0%,rgba(31,194,122,0.55),transparent_60%),radial-gradient(90%_70%_at_0%_100%,rgba(0,128,122,0.55),transparent_65%)]"
      />

      <div className="relative flex h-7 items-center justify-between bg-black/35 px-3 text-[12px] text-white/90">
        <div className="flex items-center gap-4">
          <FaApple size={13} />
          <span className="font-semibold">Finder</span>
          <span className="hidden sm:inline">File</span>
          <span className="hidden sm:inline">Edit</span>
          <span className="hidden sm:inline">View</span>
        </div>

        <div className="flex items-center gap-1.25">
          {onToggle ? (
            <button
              type="button"
              onClick={onToggle}
              aria-expanded={isOpen}
              aria-label="Meetbell menu"
              className={cn(bellClasses, 'cursor-pointer focus-visible:outline-2 focus-visible:outline-white')}
            >
              <MenuBarIcon />
            </button>
          ) : (
            <span className={bellClasses}>
              <MenuBarIcon />
            </span>
          )}

          <span className="hidden h-5 items-center px-1.5 sm:flex">
            <FiWifi size={13} />
          </span>
          <span className="hidden h-5 items-center px-1.5 sm:flex">
            <FiBattery size={15} />
          </span>

          <span className="tabular-nums">{clock ? formatMenuBarDate(clock.now) : ''}</span>
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-8 right-2 w-80 max-w-[calc(100%-1rem)] rounded-xl border border-white/15 bg-[#26272b]/85 p-1.5 shadow-2xl shadow-black/60 backdrop-blur-xl">
          {current.length > 0 && (
            <>
              <p className="px-2 pt-1 pb-0.5 text-[11px] font-semibold text-[#8fb8e0]">Now</p>

              <ul>
                {current.map(({ event, endsAt }) => (
                  <EventRow
                    key={event.id}
                    event={event}
                    details={
                      <>
                        until {formatTime(endsAt)} ·{' '}
                        <span className="font-semibold text-white">
                          {formatMinutes(endsAt - (clock?.now ?? 0))} left
                        </span>
                      </>
                    }
                  />
                ))}
              </ul>
            </>
          )}

          {upcoming.length > 0 && (
            <>
              <p className="px-2 pt-2 pb-0.5 text-[11px] font-semibold text-[#8fb8e0]">Upcoming</p>

              <ul>
                {upcoming.map(({ event, startsAt, endsAt }) => (
                  <EventRow
                    key={event.id}
                    event={event}
                    details={`${formatTime(startsAt)} – ${formatTime(endsAt)} · in ${formatMinutes(startsAt - (clock?.now ?? 0))}`}
                  />
                ))}
              </ul>
            </>
          )}

          <ul>
            <MenuSeparator />
            <MenuItem
              label="Pause Notifications"
              hasSubmenu
            />
            <MenuSeparator />
            <MenuItem label="About Meetbell" />
            <MenuItem
              label="Settings…"
              shortcut="⌘,"
            />
            <MenuItem label="Send Feedback…" />
            <MenuSeparator />
            <MenuItem
              label="Quit Meetbell"
              shortcut="⌘Q"
            />
          </ul>
        </div>
      )}
    </div>
  );
}
