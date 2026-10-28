import { TbEdit, TbTrash } from 'react-icons/tb';
import { UiToggle, methodColors, ui } from './ui';

const requestHeaders = [
  { name: 'X-User-Role', value: 'manager' },
  { name: 'Content-Type', value: 'multipart/form-data', method: 'GET', url: '/profile' },
  { name: 'X-Request-Id', value: 'syva67t8g6ta7a08hf' },
];

export function MockiatoRequestHeaders() {
  return (
    <div
      className="flex w-full flex-col gap-1.5 rounded-xl border border-white/10 p-3 text-xs"
      style={{ backgroundColor: ui.panel }}
    >
      {requestHeaders.map((header) => (
        <div
          key={header.name}
          className="flex items-center gap-3 rounded-md border px-2.5 py-2"
          style={{ borderColor: ui.border }}
        >
          <span className="min-w-0 flex-1 truncate">
            <span className="font-semibold text-white">{header.name}:</span>{' '}
            <span className="text-[#dbdbdb]">{header.value}</span>
          </span>

          {header.url ? (
            <span className="shrink-0">
              <span
                className="font-bold"
                style={{ color: methodColors[header.method] }}
              >
                {header.method}
              </span>{' '}
              <span className="text-[#dedede]">{header.url}</span>
            </span>
          ) : (
            <span
              className="shrink-0"
              style={{ color: ui.allUrls }}
            >
              Works for all URL&apos;s
            </span>
          )}

          <UiToggle hasLabel />
          <TbEdit
            size={14}
            className="shrink-0 text-white"
          />
          <TbTrash
            size={14}
            className="shrink-0 text-white"
          />
        </div>
      ))}
    </div>
  );
}
