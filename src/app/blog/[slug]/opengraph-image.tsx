import { ImageResponse } from 'next/og';
import { getPostBySlug, getAllPostSlugs } from '@/src/lib/posts';

export const alt = 'Blog post';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  const title = post?.title ?? 'Blog Post';

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#09090b',
        position: 'relative',
        overflow: 'hidden',
        padding: '60px 80px',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div
        style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(249,115,22,0.1) 0%, transparent 70%)',
          top: '-100px',
          right: '-100px',
          display: 'flex',
        }}
      />

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          position: 'relative',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <div
            style={{
              width: '32px',
              height: '3px',
              borderRadius: '2px',
              background: 'linear-gradient(90deg, #f97316, #fb923c)',
              display: 'flex',
            }}
          />

          <span
            style={{
              fontSize: '20px',
              fontWeight: 600,
              color: '#f97316',
              textTransform: 'uppercase',
              letterSpacing: '2px',
            }}
          >
            Blog
          </span>
        </div>

        <div
          style={{
            display: 'flex',
            fontSize: title.length > 60 ? '46px' : '60px',
            fontWeight: 700,
            color: '#fafafa',
            letterSpacing: '-1px',
            lineHeight: 1.2,
            maxWidth: '900px',
          }}
        >
          {title}
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '56px',
              height: '56px',
              borderRadius: '14px',
              backgroundColor: '#18181b',
              border: '1px solid rgba(255,255,255,0.1)',
              boxShadow: '0 0 24px rgba(249,115,22,0.12)',
            }}
          >
            <span
              style={{
                fontSize: '26px',
                fontWeight: 700,
                color: '#f97316',
                fontFamily: 'monospace',
                letterSpacing: '-1px',
              }}
            >
              AI
            </span>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2px',
            }}
          >
            <span
              style={{
                fontSize: '22px',
                fontWeight: 600,
                color: '#fafafa',
              }}
            >
              Aleksei Ivasiuta
            </span>

            <span
              style={{
                fontSize: '18px',
                color: '#71717a',
              }}
            >
              Senior Software Engineer
            </span>
          </div>
        </div>

        <span
          style={{
            fontSize: '20px',
            color: '#71717a',
            fontFamily: 'monospace',
          }}
        >
          ivasiuta.dev
        </span>
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, transparent, #f97316, transparent)',
          display: 'flex',
        }}
      />
    </div>,
    {
      ...size,
    }
  );
}
