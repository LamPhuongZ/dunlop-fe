import './styles/globals.css';
import type { Metadata } from 'next';
import { Inter, Roboto } from 'next/font/google';
import { getLocale, getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';

const inter = Inter({ subsets: ['latin'] });
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: {
    default: 'Dunlop - Thương hiệu sản xuất lốp xe',
    template: '%s | Dunlop',
  },
  manifest: '/manifest.json',
  description: 'Trong hơn 120 năm cảm nhận mặt đường, Dunlop luôn dẫn đầu trong việc sáng tạo và ứng dụng công nghệ mới trong lĩnh vực sản xuất lốp xe.',
  openGraph: {
    title: 'Dunlop - Thương hiệu sản xuất lốp xe',
    description: 'Trong hơn 120 năm cảm nhận mặt đường, Dunlop luôn dẫn đầu trong việc sáng tạo và ứng dụng công nghệ mới trong lĩnh vực sản xuất lốp xe.',
    siteName: 'Dunlop',
    url: '',
    type: 'website',
    images: [
      {
        url: '/images/dunlop-logo.svg',
        width: 1200,
        height: 630,
        alt: 'Dunlop - Thương hiệu sản xuất lốp xe',
      },
    ],
  },
  icons: {
    icon: '/images/dunlop-logo.svg',
    apple: '/images/dunlop-logo.svg',
  },
  alternates: {
    canonical: '',
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/dunlop-logo.svg" type="image/jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{  
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Dunlop - Thương hiệu sản xuất lốp xe',
              url: '',
            }),
          }}
        />
      </head>
      <body className={`${inter.className} ${roboto.className}`} suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}