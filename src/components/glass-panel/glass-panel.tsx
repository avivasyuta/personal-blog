type GlassPanelProps = React.PropsWithChildren & {
    className?: string;
};

export function GlassPanel({ children, className }: GlassPanelProps) {
  return (
    <div className={`bg-gray/50 backdrop-blur-lg${className ? ` ${className}` : ''}`}>
      {children}
    </div>
  );
}