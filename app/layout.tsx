import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
// import { ThemeProvider } from 'next-themes'

const interSans = Inter({
  variable: '--font-inter-sans',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Michael Yvars',
  description: 'Juste a chill web developer'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${interSans.variable} antialiased`}>
        {/* <ThemeProvider attribute="class">{children}</ThemeProvider> */}
        {children}
      </body>
    </html>
  )
}
