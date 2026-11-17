import { cn } from '@/src/lib/utils';

// The colored light behind a project banner, shared by the projects carousel and each project's page.
// It must sit inside a `.showcase` element, which sets `--accent` and the gradient underneath.
// A full-width banner fades into the page below; a card keeps its own bottom, or its border would outline nothing
export function ShowcaseBackdrop({ fadesOut = true }: { fadesOut?: boolean }) {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="showcase-blob absolute -top-1/3 -left-1/4 size-[55rem] max-w-none" />
        <div className="showcase-blob showcase-blob-second absolute -right-1/4 -bottom-1/2 size-[50rem] max-w-none" />
        <div className="absolute inset-0 bg-[radial-gradient(transparent_0,#0b0b0d_85%)] opacity-60" />
      </div>

      {fadesOut && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-32 bg-linear-to-b from-transparent to-background"
        />
      )}
    </>
  );
}

type ShowcaseWatermarkProps = {
  name: string;
  className?: string;
};

// The project's name in huge outlined letters along the bottom of the banner
export function ShowcaseWatermark({ name, className }: ShowcaseWatermarkProps) {
  return (
    <p
      aria-hidden
      className={cn(
        'showcase-watermark pointer-events-none absolute inset-x-0 -bottom-[0.18em] -z-10 text-center text-[22vw] leading-none font-black tracking-tighter whitespace-nowrap select-none lg:text-[15rem]',
        className
      )}
    >
      {name}
    </p>
  );
}
