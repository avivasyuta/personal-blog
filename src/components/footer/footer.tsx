export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="pb-26 pt-6 w-full md:py-6 border-t border-border">
      <div className="flex items-center justify-center gap-1">
        <p className="text-text-secondary text-sm flex items-center">
          ©
          &nbsp;
          {year} | Designed&nbsp;and&nbsp;coded&nbsp;by Aleksei Ivasiuta
        </p>
      </div>
    </footer>
  );
}
