'use client';

import type { ReactNode } from 'react';
import { Button } from '@/src/components/ui/button';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
};

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  return (
    <dialog
      className={`modal${isOpen ? ' modal-open' : ''}`}
      open={isOpen}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClose={onClose}
    >
      <div className="modal-box max-w-6xl p-4 md:p-6 bg-surface border border-border">
        <div className="flex items-center justify-between mb-4">
          {title && <h3 className="font-semibold text-lg text-foreground">{title}</h3>}

          <Button
            type="button"
            onClick={onClose}
            variant="ghost"
            size="sm"
            aria-label="Close modal"
          >
            ✕
          </Button>
        </div>

        {children}
      </div>

      <form
        method="dialog"
        className="modal-backdrop"
        onSubmit={(event) => {
          event.preventDefault();
          onClose();
        }}
      >
        <button
          type="submit"
          aria-label="Close modal backdrop"
        >
          Close
        </button>
      </form>
    </dialog>
  );
}
