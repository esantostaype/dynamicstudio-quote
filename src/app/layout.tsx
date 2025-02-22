import type { Metadata } from 'next'
import './globals.css'
import { Providers } from './providers'
import { Header } from '@/components'

export const metadata: Metadata = {
  title: "Survey to Understand the Digital Needs of Businesses",
  icons: {
    icon: '/images/iso.svg'
  }
}

export default function RootLayout({ children } : Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header/>
          <main className="relative z-30 flex flex-col h-screen gap-12 max-w-6xl mx-auto pt-5 pb-8 px-4 md:px-8">
            { children }
          </main>
        </Providers>
      </body>
    </html>
  )
}