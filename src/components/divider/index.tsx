export function Divider() {
  return (
    <div className="mb-10 md:mb-14 flex items-center gap-3">
      <div className="h-px flex-1 bg-linear-to-r from-border via-border to-transparent" />

      <div className="h-1 w-1 rounded-full bg-primary/40" />

      <div className="h-px flex-1 bg-linear-to-l from-border via-border to-transparent" />
    </div>
  );
}
