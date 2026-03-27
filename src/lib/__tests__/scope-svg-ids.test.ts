import { describe, it, expect } from 'vitest';
import { scopeSvgIds } from '../scope-svg-ids';

describe('scopeSvgIds', () => {
  it('prefixes id definitions with the given id', () => {
    const svg = '<filter id="blur1"><feGaussianBlur/></filter>';
    const result = scopeSvgIds(svg, 'graph');
    expect(result).toBe('<filter id="graph_blur1"><feGaussianBlur/></filter>');
  });

  it('updates url(#...) references to match prefixed ids', () => {
    const svg = '<g filter="url(#filter0)"><circle/></g><defs><filter id="filter0"/></defs>';
    const result = scopeSvgIds(svg, 'mysvg');
    expect(result).toContain('id="mysvg_filter0"');
    expect(result).toContain('url(#mysvg_filter0)');
    expect(result).not.toContain('"filter0"');
  });

  it('updates clip-path url references', () => {
    const svg = '<g clip-path="url(#clip0)"><rect/></g><defs><clipPath id="clip0"/></defs>';
    const result = scopeSvgIds(svg, 'a');
    expect(result).toContain('url(#a_clip0)');
    expect(result).toContain('id="a_clip0"');
  });

  it('handles multiple ids independently', () => {
    const svg = '<g filter="url(#f1)"/><g filter="url(#f2)"/><defs><filter id="f1"/><filter id="f2"/></defs>';
    const result = scopeSvgIds(svg, 'x');
    expect(result).toContain('id="x_f1"');
    expect(result).toContain('id="x_f2"');
    expect(result).toContain('url(#x_f1)');
    expect(result).toContain('url(#x_f2)');
  });

  it('does not modify svg without ids', () => {
    const svg = '<svg><circle cx="10" cy="10" r="5"/></svg>';
    expect(scopeSvgIds(svg, 'test')).toBe(svg);
  });

  it('uses different prefixes to avoid collisions between svgs', () => {
    const svg = '<filter id="f1"/><g filter="url(#f1)"/>';
    const result1 = scopeSvgIds(svg, 'graph');
    const result2 = scopeSvgIds(svg, 'connected-graphs');
    expect(result1).toContain('id="graph_f1"');
    expect(result2).toContain('id="connected-graphs_f1"');
  });
});
