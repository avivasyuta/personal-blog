'use client';

import {
  useRef,
  useState,
  isValidElement,
  Children,
  ReactNode,
  ComponentPropsWithoutRef,
} from 'react';
import { Copy, Check } from 'lucide-react';

function getLanguageFromChildren(children: ReactNode): string {
  const child = Children.toArray(children)[0];
  if (isValidElement<{ 'data-language'?: string }>(child)) {
    return child.props['data-language'] ?? '';
  }
  return '';
}

export function CodeBlock({ children, ...props }: ComponentPropsWithoutRef<'pre'>) {
  const preRef = useRef<HTMLPreElement>(null);
  const [copied, setCopied] = useState(false);

  const language = getLanguageFromChildren(children);

  const handleCopy = async () => {
    const code = preRef.current?.querySelector('code')?.textContent ?? '';
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-6 overflow-hidden rounded-xl border border-border bg-surface">
      <div className="flex items-center justify-between border-b border-border px-4 py-2">
        <span className="font-mono text-[0.7rem] font-semibold uppercase tracking-wide text-text-tertiary">
          {language}
        </span>

        <span className="flex items-center gap-2">
          {copied && (
            <span className="font-mono text-[0.7rem] text-text-tertiary">Copied</span>
          )}

          <button
            type="button"
            className="flex cursor-pointer items-center justify-center rounded-md p-1 text-text-tertiary transition-colors duration-200 hover:bg-surface-hover hover:text-foreground"
            onClick={handleCopy}
            aria-label="Copy code"
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
          </button>
        </span>
      </div>

      <pre ref={preRef} {...props}>
        {children}
      </pre>
    </div>
  );
}
