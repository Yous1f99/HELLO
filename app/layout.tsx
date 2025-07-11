import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'YOUSIF Coffee',
  description: 'Yous1f99',
  generator: 'hi',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
