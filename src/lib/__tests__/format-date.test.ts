import { describe, it, expect } from 'vitest';
import { formatDate } from '../format-date';

describe('formatDate', () => {
  it('formats a date string as "Mon YYYY"', () => {
    expect(formatDate('2024-01-15')).toBe('Jan 2024');
  });

  it('formats month correctly for different months', () => {
    expect(formatDate('2023-06-01')).toBe('Jun 2023');
    expect(formatDate('2025-12-31')).toBe('Dec 2025');
  });

  it('handles ISO date strings', () => {
    expect(formatDate('2022-03-10T00:00:00.000Z')).toBe('Mar 2022');
  });
});
