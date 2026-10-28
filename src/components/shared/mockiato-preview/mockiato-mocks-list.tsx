import { TbChevronUp, TbDotsVertical, TbGripVertical, TbRegex } from 'react-icons/tb';
import { UiToggle, methodColors, statusColors, ui } from './ui';

const cartMocks = [
  { name: 'Get cart', method: 'GET', url: '/api/carts/[^/]+$', status: 200 },
  { name: 'Add cart item fails', method: 'POST', url: '/api/carts/[^/]+/items', status: 500 },
  { name: 'Update cart item', method: 'PATCH', url: '/api/carts/[^/]+/items/[^/]+$', status: 200 },
];

export function MockiatoMocksList() {
  return (
    <div
      className="w-full rounded-xl border border-white/10 p-3 text-xs"
      style={{ backgroundColor: ui.panel }}
    >
      <div
        className="overflow-hidden rounded-md border border-dashed"
        style={{ borderColor: ui.border }}
      >
        <div
          className="flex items-center gap-2 px-2 py-1.5 text-[#efefef]"
          style={{ backgroundColor: ui.field }}
        >
          <TbGripVertical
            size={14}
            className="text-white/60"
          />
          <span className="text-sm">User cart</span>
          <TbChevronUp size={14} />
          <TbDotsVertical
            size={14}
            className="ml-auto"
          />
        </div>

        <div className="flex flex-col gap-1.5 p-2">
          {cartMocks.map((mock) => (
            <div
              key={mock.name}
              className="flex items-center gap-2.5 rounded-md border px-2 py-1.5"
              style={{ borderColor: ui.border }}
            >
              <TbGripVertical
                size={14}
                className="shrink-0 text-white/60"
              />

              <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                <span className="text-[#e5e5e5]">{mock.name}</span>

                <span className="truncate">
                  <span
                    className="font-bold"
                    style={{ color: methodColors[mock.method] }}
                  >
                    {mock.method}
                  </span>
                  <span className="ml-2 text-[#949fa9]">{mock.url}</span>
                </span>
              </div>

              <TbRegex
                size={14}
                className="shrink-0"
                style={{ color: ui.regex }}
              />

              <span
                className="shrink-0 rounded px-1.5 py-0.5 text-[10px] font-bold text-white"
                style={{ backgroundColor: statusColors[mock.status] }}
              >
                {mock.status}
              </span>

              <UiToggle />
              <TbDotsVertical
                size={14}
                className="shrink-0 text-white"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
