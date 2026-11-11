import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://theaviationangle.com'),
  title: 'The Aviation Angle | Aviation News & Flight Safety',
  description: 'Independent aviation news, flight-safety reporting, investigations and expert analysis.',
  openGraph: {
    title: 'The Aviation Angle | Aviation News & Flight Safety',
    description: 'Independent aviation news, flight-safety reporting, investigations and expert analysis.',
    images: ['/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Aviation Angle | Aviation News & Flight Safety',
    description: 'Independent aviation news, flight-safety reporting, investigations and expert analysis.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
