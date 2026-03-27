export function scopeSvgIds(svg: string, id: string): string {
  const prefix = `${id}_`;
  const ids = new Set<string>();

  svg.replace(/\bid="([^"]+)"/g, (_, matchedId) => {
    ids.add(matchedId);
    return '';
  });

  let scoped = svg;
  for (const originalId of ids) {
    scoped = scoped.replaceAll(`id="${originalId}"`, `id="${prefix}${originalId}"`);
    scoped = scoped.replaceAll(`#${originalId}`, `#${prefix}${originalId}`);
  }

  return scoped;
}
