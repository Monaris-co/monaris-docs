import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import { appName } from '@/lib/shared';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://docs.monaris.co'),
  title: {
    default: `${appName} Docs`,
    template: `%s — ${appName}`,
  },
  description:
    'Monaris is a private financial operating system for the stablecoin economy: onchain AR/AP, private payments, and income-backed credit.',
  icons: { icon: '/favicon.ico' },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider
          theme={{ defaultTheme: 'light', enableSystem: false }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
