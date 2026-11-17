'use client';

import { type CSSProperties, type KeyboardEvent, type TouchEvent, useEffect, useRef, useState } from 'react';
import type { Project } from '@/src/types';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';
import { cn } from '@/src/lib/utils';
import { ShowcaseBackdrop, ShowcaseWatermark } from './showcase-backdrop';

type ProjectShowcaseProps = {
  projects: Project[];
};

// How long the old project takes to leave before the new one comes in; matches `.showcase-reveal` leaving in CSS
const exitDuration = 320;
// A swipe shorter than this is a tap or a scroll, not a switch
const swipeThreshold = 50;

// One project at a time across the whole page, switched by the tabs, the keyboard or a swipe.
// It moves on by itself while nobody is pointing at it: the active tab's progress bar ends and starts the next project
export function ProjectShowcase({ projects }: ProjectShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLeaving, setIsLeaving] = useState(false);
  // 1 when moving forward, -1 back; slides the preview in from the matching side
  const [direction, setDirection] = useState(1);
  const pendingSwitch = useRef<ReturnType<typeof setTimeout>>(undefined);
  const touchStartX = useRef<number | null>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const tabListRef = useRef<HTMLDivElement>(null);

  const project = projects[activeIndex];

  useEffect(() => () => clearTimeout(pendingSwitch.current), []);

  // On a phone the tabs don't all fit; bring the active one into view by scrolling the row only,
  // since `scrollIntoView` would also scroll the page when the carousel moves on by itself
  useEffect(() => {
    const tab = tabRefs.current[activeIndex];
    const list = tabListRef.current;
    if (!tab || !list) return;
    list.scrollTo({ left: tab.offsetLeft - (list.clientWidth - tab.offsetWidth) / 2, behavior: 'smooth' });
  }, [activeIndex]);

  function show(index: number, nextDirection = index > activeIndex ? 1 : -1) {
    const target = (index + projects.length) % projects.length;
    if (target === activeIndex || isLeaving) return;
    setDirection(nextDirection);
    setIsLeaving(true);
    pendingSwitch.current = setTimeout(() => {
      setActiveIndex(target);
      setIsLeaving(false);
    }, exitDuration);
  }

  const showNext = () => show(activeIndex + 1, 1);
  const showPrevious = () => show(activeIndex - 1, -1);

  function handleTabKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const step = event.key === 'ArrowRight' ? 1 : event.key === 'ArrowLeft' ? -1 : 0;
    if (!step) return;
    event.preventDefault();
    const target = (activeIndex + step + projects.length) % projects.length;
    show(target, step);
    tabRefs.current[target]?.focus();
  }

  function handleTouchEnd(event: TouchEvent) {
    if (touchStartX.current === null) return;
    const distance = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(distance) < swipeThreshold) return;
    if (distance < 0) showNext();
    else showPrevious();
  }

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Projects"
      data-leaving={isLeaving || undefined}
      className="showcase relative isolate -mt-17 flex min-h-[100svh] flex-col overflow-hidden pt-17"
      style={{ '--accent': project.accent, '--dir': direction } as CSSProperties}
      onTouchStart={(event) => (touchStartX.current = event.touches[0].clientX)}
      onTouchEnd={handleTouchEnd}
    >
      <ShowcaseBackdrop />

      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 md:px-8">
        <ShowcaseWatermark
          key={`mark-${activeIndex}`}
          name={project.name}
        />

        <div
          ref={tabListRef}
          role="tablist"
          aria-label="Choose a project"
          onKeyDown={handleTabKeyDown}
          className="relative z-10 -mx-4 flex gap-2 overflow-x-auto px-4 py-4 [scrollbar-width:none] md:mx-0 md:px-0 md:py-6"
        >
          {projects.map((item, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={item.name}
                ref={(element) => {
                  tabRefs.current[index] = element;
                }}
                type="button"
                role="tab"
                id={`project-tab-${index}`}
                aria-selected={isActive}
                aria-controls="project-panel"
                tabIndex={isActive ? 0 : -1}
                onClick={() => show(index)}
                className={cn(
                  'relative flex shrink-0 cursor-pointer items-center gap-2.5 overflow-hidden rounded-2xl border py-1.5 pr-4 pl-1.5 text-sm font-medium transition-colors duration-300',
                  isActive
                    ? 'border-white/25 bg-white/15 text-white'
                    : 'border-white/10 bg-black/20 text-white/60 hover:bg-white/10 hover:text-white'
                )}
              >
                <Image
                  src={item.logoPath}
                  alt=""
                  width={28}
                  height={28}
                  className={cn('size-7 rounded-[10px] transition-opacity duration-300', !isActive && 'opacity-60')}
                />
                {item.name}
                {isActive && (
                  <span
                    key={`progress-${activeIndex}`}
                    aria-hidden
                    onAnimationEnd={showNext}
                    className="showcase-progress absolute inset-x-0 bottom-0 h-0.5 origin-left bg-white/80"
                  />
                )}
              </button>
            );
          })}
        </div>

        <div
          id="project-panel"
          role="tabpanel"
          aria-labelledby={`project-tab-${activeIndex}`}
          key={activeIndex}
          className="relative grid flex-1 grid-cols-1 items-center gap-8 pb-24 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-12 lg:pb-44"
        >
          <div className="relative z-10 flex flex-col gap-5 pt-4">
            <div
              className="showcase-reveal flex items-center gap-3"
              style={{ '--i': 0 } as CSSProperties}
            >
              <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium tracking-[0.14em] text-white/80 uppercase">
                {project.platform}
              </span>
              <span className="text-xs text-white/50 tabular-nums">
                {String(activeIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
              </span>
            </div>

            <div
              className="showcase-reveal flex items-center gap-4 md:gap-5"
              style={{ '--i': 1 } as CSSProperties}
            >
              <Image
                src={project.logoPath}
                alt=""
                width={88}
                height={88}
                priority
                className="app-icon size-16 shadow-[0_16px_40px_-16px_rgba(0,0,0,0.7)] md:size-22"
              />
              <h2 className="text-5xl font-bold tracking-tight text-white md:text-6xl xl:text-7xl">{project.name}</h2>
            </div>

            <p
              className="showcase-reveal max-w-md text-lg leading-snug font-medium text-white md:text-xl"
              style={{ '--i': 2 } as CSSProperties}
            >
              {project.tagline}
            </p>

            <p
              className="showcase-reveal max-w-md text-sm leading-relaxed text-white/65 md:text-base"
              style={{ '--i': 3 } as CSSProperties}
            >
              {project.description}
            </p>

            <div
              className="showcase-reveal mt-2"
              style={{ '--i': 4 } as CSSProperties}
            >
              <Link
                href={project.link}
                className="group/link inline-flex items-center gap-2 rounded-full white-pill px-6 py-3 text-sm font-semibold text-black shadow-[0_12px_32px_-16px_rgba(0,0,0,0.7)]"
              >
                Explore {project.name}
                <FiArrowRight
                  size={16}
                  className="transition-transform group-hover/link:translate-x-1"
                />
              </Link>
            </div>
          </div>

          <div
            aria-hidden
            className="showcase-stage relative flex w-full justify-center"
          >
            {project.preview}
          </div>
        </div>
      </div>
    </section>
  );
}
