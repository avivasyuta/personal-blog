import { FaVideo } from 'react-icons/fa';
import { UiButton } from './ui';

export function MeetbellJoin() {
  return (
    <div className="flex w-full max-w-sm flex-col items-center gap-5 rounded-2xl border border-white/10 bg-[#262626] px-5 py-6 text-center shadow-[0_24px_48px_-16px_rgba(0,0,0,0.9)]">
      <div className="flex flex-col items-center">
        <span className="text-[10px] font-semibold tracking-[0.2em] text-white/60 uppercase">Starts in</span>
        <span className="text-4xl font-semibold text-white tabular-nums">2:00</span>
      </div>

      <div className="flex w-full flex-col items-center gap-1 rounded-xl border border-white/10 bg-white/[0.04] py-4">
        <span className="inline-flex items-center gap-1.5 text-[11px] text-white/70">
          <span className="size-1.5 rounded-full bg-[#1ea7e0]" />
          Work
        </span>
        <span className="text-lg font-bold text-white">Design review</span>
      </div>

      <div className="flex gap-2">
        <UiButton className="rounded-full px-6">Close</UiButton>
        <UiButton className="inline-flex items-center gap-1.5 rounded-full bg-[#0a84ff] px-5 text-white">
          <FaVideo size={11} />
          Join Zoom
        </UiButton>
      </div>
    </div>
  );
}
