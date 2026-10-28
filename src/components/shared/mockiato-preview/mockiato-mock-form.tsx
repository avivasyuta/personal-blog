'use client';

import { type ReactNode, useState } from 'react';
import {
  TbBracketsContain,
  TbCheck,
  TbChevronDown,
  TbCode,
  TbFileText,
  TbPlaylistAdd,
  TbRegex,
  TbSelector,
  TbX,
} from 'react-icons/tb';
import { cn } from '@/src/lib/utils';
import { UiField, UiLabel, ui } from './ui';

const mockTabs = [
  { id: 'general', label: 'General', icon: TbCode },
  { id: 'body', label: 'Response Body', icon: TbFileText },
  { id: 'headers', label: 'Response Headers', icon: TbBracketsContain },
] as const;

type MockTab = (typeof mockTabs)[number]['id'];

const mockFields = [
  { label: 'Request method', value: 'POST', isRequired: true, isSelect: true },
  { label: 'Response status code', value: '500', isRequired: true, isSelect: false },
  { label: 'Delay, ms', value: '0', isRequired: false, isSelect: false },
];

const responseBodyLines = [
  { tokens: [{ text: '{' }], isFoldable: true },
  { tokens: [{ text: '  "error": {' }], isFoldable: true },
  {
    tokens: [{ text: '    "message": ' }, { text: '"Unexpected error happened!"', isString: true }],
    isFoldable: false,
  },
  { tokens: [{ text: '  }' }], isFoldable: false },
  { tokens: [{ text: '}' }], isFoldable: false },
];

const responseHeaders = [
  { name: 'access-control-allow-credentials', value: 'true' },
  { name: 'access-control-allow-origin', value: 'https://www.example.com' },
];

function MockGeneralTab() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-1">
        <UiLabel isRequired>URL</UiLabel>

        <UiField>
          <span className="truncate">/api/carts/[^/]+/items</span>
          <TbRegex
            size={14}
            className="shrink-0"
            style={{ color: ui.regex }}
          />
        </UiField>
      </div>

      <div className="flex items-center gap-2">
        <span
          className="flex size-3.5 items-center justify-center rounded-[3px]"
          style={{ backgroundColor: ui.primary }}
        >
          <TbCheck
            size={10}
            strokeWidth={3}
          />
        </span>
        Use as regular expression
      </div>

      <div className="grid grid-cols-3 gap-2">
        {mockFields.map((field) => (
          <div
            key={field.label}
            className="flex min-w-0 flex-col gap-1"
          >
            <UiLabel isRequired={field.isRequired}>{field.label}</UiLabel>

            <UiField>
              {field.value}
              {field.isSelect && (
                <TbSelector
                  size={12}
                  className="shrink-0 text-white/50"
                />
              )}
            </UiField>
          </div>
        ))}
      </div>
    </div>
  );
}

function MockBodyTab() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-4">
        <span className="flex items-center gap-2">
          <span
            className="flex size-3.5 items-center justify-center rounded-full"
            style={{ backgroundColor: ui.primary }}
          >
            <span className="size-1.5 rounded-full bg-white" />
          </span>
          JSON
        </span>

        <span className="flex items-center gap-2">
          <span
            className="size-3.5 rounded-full border"
            style={{ backgroundColor: ui.field, borderColor: ui.border }}
          />
          Text
        </span>
      </div>

      <div
        className="flex flex-1 overflow-hidden rounded-md font-mono text-[11px] leading-5"
        style={{ backgroundColor: ui.editor }}
      >
        <div
          className="flex shrink-0 flex-col py-1 pl-2 pr-1 text-right text-[#e0e1e3]"
          style={{ backgroundColor: ui.editorGutter }}
        >
          {responseBodyLines.map((line, index) => (
            <span
              key={index}
              className="flex items-center justify-end gap-0.5"
            >
              {index + 1}
              <TbChevronDown
                size={9}
                className={cn(!line.isFoldable && 'invisible')}
              />
            </span>
          ))}
        </div>

        <div className="flex min-w-0 flex-1 flex-col py-1">
          {responseBodyLines.map((line, index) => (
            <span
              key={index}
              className="truncate whitespace-pre px-2 text-[#a7b0c3]"
              style={index === responseBodyLines.length - 1 ? { backgroundColor: ui.editorActiveLine } : undefined}
            >
              {line.tokens.map((token) => (
                <span
                  key={token.text}
                  style={'isString' in token ? { color: ui.jsonString } : undefined}
                >
                  {token.text}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function MockHeadersTab() {
  return (
    <div className="flex flex-col items-start gap-2">
      {responseHeaders.map((header) => (
        <div
          key={header.name}
          className="flex w-full items-center gap-2"
        >
          <div className="min-w-0 flex-1">
            <UiField>
              <span className="truncate">{header.name}</span>
            </UiField>
          </div>

          <div className="min-w-0 flex-1">
            <UiField>
              <span className="truncate">{header.value}</span>
            </UiField>
          </div>

          <TbX
            size={14}
            className="shrink-0 text-white"
          />
        </div>
      ))}

      <span
        className="mt-1 flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 font-medium"
        style={{ borderColor: ui.link, color: ui.link }}
      >
        <TbPlaylistAdd size={14} />
        Add header
      </span>
    </div>
  );
}

const mockTabContent: Record<MockTab, ReactNode> = {
  general: <MockGeneralTab />,
  body: <MockBodyTab />,
  headers: <MockHeadersTab />,
};

export function MockiatoMockForm() {
  const [activeTab, setActiveTab] = useState<MockTab>('general');

  return (
    <div
      className="flex w-full flex-col gap-3 rounded-xl border border-white/10 p-4 text-xs text-[#f7f7f7]"
      style={{ backgroundColor: ui.panel }}
    >
      <div className="flex gap-1 overflow-hidden">
        {mockTabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            type="button"
            tabIndex={-1}
            onClick={() => setActiveTab(id)}
            className={cn(
              'flex cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-md px-2 py-1.5 text-[11px] transition-colors sm:px-2.5 sm:text-xs',
              id !== activeTab && 'hover:bg-white/5'
            )}
            style={id === activeTab ? { backgroundColor: ui.primary } : undefined}
          >
            <Icon
              size={14}
              className="hidden sm:block"
            />
            {label}
          </button>
        ))}
      </div>

      {/* All tabs share one grid cell, so the card keeps the height of the tallest one when switching */}
      <div className="grid grid-cols-1">
        {mockTabs.map(({ id }) => (
          <div
            key={id}
            className={cn('col-start-1 row-start-1 flex min-w-0 flex-col', id !== activeTab && 'invisible')}
          >
            {mockTabContent[id]}
          </div>
        ))}
      </div>
    </div>
  );
}
