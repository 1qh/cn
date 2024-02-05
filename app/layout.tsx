import { ThemeProvider } from '@/components/theme-provider'
import type { Metadata } from 'next'
import { Inter_Tight } from 'next/font/google'
import './globals.css'
const inter = Inter_Tight({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'App',
  description: ''
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
