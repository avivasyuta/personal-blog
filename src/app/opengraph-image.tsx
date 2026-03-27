import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Aleksei Ivasiuta | Senior Software Engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#09090b',
        position: 'relative',
        overflow: 'hidden',
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
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(249,115,22,0.12) 0%, transparent 70%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -55%)',
          display: 'flex',
        }}
      />

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '32px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '88px',
            height: '88px',
            borderRadius: '22px',
            backgroundColor: '#18181b',
            border: '1px solid rgba(255,255,255,0.1)',
            boxShadow: '0 0 40px rgba(249,115,22,0.15)',
          }}
        >
          <span
            style={{
              fontSize: '44px',
              fontWeight: 700,
              color: '#f97316',
              fontFamily: 'monospace',
              letterSpacing: '-1px',
            }}
          >
            AI
          </span>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          fontSize: '52px',
          fontWeight: 700,
          color: '#fafafa',
          letterSpacing: '-1px',
          marginBottom: '12px',
        }}
      >
        Aleksei Ivasiuta
      </div>

      <div
        style={{
          display: 'flex',
          fontSize: '24px',
          fontWeight: 500,
          color: '#a1a1aa',
          letterSpacing: '0.5px',
        }}
      >
        Senior Software Engineer
      </div>

      <div
        style={{
          display: 'flex',
          width: '64px',
          height: '3px',
          borderRadius: '2px',
          background: 'linear-gradient(90deg, #f97316, #fb923c)',
          marginTop: '28px',
        }}
      />
    </div>,
    {
      ...size,
    }
  );
}
