import { getAllTags } from '@/src/lib/posts';
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(getAllTags());
}
