import { Metadata } from 'next'
import './globals.css'
import {Sora } from 'next/font/google'

const inter = Sora({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Abax',
  description: 'Lending Protocol',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
