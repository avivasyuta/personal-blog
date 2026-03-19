import { PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Header } from '@/src/components/header';
import { Footer } from '@/src/components/footer';
import { currentLocation } from '@/src/lib/constant';
import { MobileNavigation } from '@/src/components/navigation';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from "@vercel/speed-insights/next"
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Aleksei Ivasiuta | Senior Software Engineer',
  description: `Aleksei Ivasiuta, Senior Software Engineer from ${currentLocation.city}, ${currentLocation.country}`,
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.webmanifest',
};

type RootLayoutProps = PropsWithChildren;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-dot-pattern`}>
        <Header />

        <main className="flex-1">{children}</main>

        <Footer />

        <MobileNavigation />

        <Analytics />

        <SpeedInsights />
      </body>
    </html>
  );
}
