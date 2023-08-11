import '@/style/globals.css';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'home',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://unpkg.com/mvp.css"></link>
      </head>
      <body>{children}</body>
    </html>
  );
}
