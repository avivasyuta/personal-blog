import { getPostsByFilter } from '@/src/lib/posts';
import { Complexity } from '@/src/types';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const query = searchParams.get('query') || '';
  const tags = (searchParams.get('tags') ?? []) as string[];
  const complexity = searchParams.get('complexity') as Complexity | undefined;

  const resp = getPostsByFilter({
    query,
    complexity,
    tags,
  });

  return NextResponse.json(resp);
}
