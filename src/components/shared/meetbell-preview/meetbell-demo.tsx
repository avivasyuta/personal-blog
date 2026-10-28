'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { FiCornerRightDown, FiMaximize } from 'react-icons/fi';
import { MeetbellMenuBar } from './meetbell-menu-bar';
import { MeetbellReminder } from './meetbell-reminder';

export function MeetbellDemo() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [isReminderOpen, setIsReminderOpen] = useState(false);

  const [bellX, setBellX] = useState<number | null>(null);
  const deviceRef = useRef<HTMLDivElement>(null);

  const closeReminder = useCallback(() => setIsReminderOpen(false), []);

  // The bell moves with the width of the menu bar clock, so the hint follows it
  useEffect(() => {
    const device = deviceRef.current;
    const bell = device?.querySelector('[aria-label="Meetbell menu"]');
    if (!device || !bell?.parentElement) return;

    const updateBellX = () => {
      const deviceRect = device.getBoundingClientRect();
      const bellRect = bell.getBoundingClientRect();
      setBellX(bellRect.left + bellRect.width / 2 - deviceRect.left);
    };

    const observer = new ResizeObserver(updateBellX);
    observer.observe(device);
    observer.observe(bell.parentElement);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col">
      <div
        ref={deviceRef}
        className="relative mx-auto w-full lg:w-[80%]"
      >
        {bellX !== null && (
          <p
            className="absolute bottom-full mb-2 hidden translate-x-[calc(-100%+5px)] items-end gap-1.5 text-sm whitespace-nowrap text-text-tertiary md:flex"
            style={{ left: bellX }}
          >
            Click the bell to open or close the list
            <FiCornerRightDown
              size={14}
              className="shrink-0"
            />
          </p>
        )}

        <div className="rounded-t-[20px] border border-b-0 border-white/10 bg-[#0b0b0d] p-2.5 pb-0 mask-b-from-85% md:rounded-t-[36px] md:mask-b-from-70% md:p-4 md:pb-0 lg:p-5 lg:pb-0">
          <div className="relative isolate h-[30rem] overflow-hidden rounded-t-[10px] md:aspect-[16/10] md:h-auto md:rounded-t-[20px]">
            <MeetbellMenuBar
              isOpen={isMenuOpen}
              onToggle={() => setIsMenuOpen((isOpen) => !isOpen)}
              className="h-full rounded-none border-0 shadow-none"
            />

            <span
              aria-hidden
              className="absolute top-0 left-1/2 hidden h-6 w-[12%] -translate-x-1/2 rounded-b-lg bg-[#0b0b0d] md:block"
            />
          </div>
        </div>
      </div>

      <div className="relative mt-4 flex flex-col items-center gap-3 text-center md:-mt-24">
        <button
          type="button"
          onClick={() => setIsReminderOpen(true)}
          className="inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#1fc27a] px-4 py-2 text-sm font-semibold text-black transition-colors hover:bg-[#4fd896] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1fc27a]"
        >
          <FiMaximize size={14} />
          Preview the reminder
        </button>

        <p className="text-sm text-text-tertiary md:hidden">
          Click the bell in the menu bar to open or close the list.
        </p>
      </div>

      {isReminderOpen && <MeetbellReminder onClose={closeReminder} />}
    </div>
  );
}
