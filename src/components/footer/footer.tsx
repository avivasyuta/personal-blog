import { Copyright } from 'lucide-react';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="pb-26 pt-6 w-full md:py-6">
      <div className="flex items-center justify-center gap-1">
        <p className="text-normal text-sm flex items-center">
          <Copyright size={16} />
          &nbsp;
          {year} | Designed&nbsp;and&nbsp;coded&nbsp;️ by Aleksei Ivasiuta
        </p>
      </div>
    </footer>
  );
}
