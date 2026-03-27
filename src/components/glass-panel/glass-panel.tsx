type GlassPanelProps = React.PropsWithChildren & {
  className?: string;
};

export function GlassPanel({ children, className }: GlassPanelProps) {
  return <div className={`backdrop-blur-md border border-white/30${className ? ` ${className}` : ''}`}>{children}</div>;
}
