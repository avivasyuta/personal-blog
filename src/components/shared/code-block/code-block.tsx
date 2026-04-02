'use client';

import { useRef, useState, isValidElement, Children, ReactNode, ComponentPropsWithoutRef } from 'react';
import { FiCopy, FiCheck } from 'react-icons/fi';
import { Button } from '@/src/components/ui/button';

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
          {copied && <span className="font-mono text-[0.7rem] text-text-tertiary">Copied</span>}

          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={handleCopy}
            aria-label="Copy code"
            className="p-1"
          >
            {copied ? <FiCheck size={16} /> : <FiCopy size={16} />}
          </Button>
        </span>
      </div>

      <pre
        ref={preRef}
        {...props}
      >
        {children}
      </pre>
    </div>
  );
}
