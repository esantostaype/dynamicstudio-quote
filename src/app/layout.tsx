import type { Metadata } from 'next'
import './globals.css'
import { Providers } from './providers'
import { Header, StepperList } from '@/components'

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
            <StepperList/>
            <div className="flex flex-1 overflow-y-auto border border-[rgba(255,255,255,0.16)] rounded-lg">
              { children }
            </div>
          </main>
          {/* <div className="z-20 fixed top-1/2 -translate-y-1/2 -left-12 h-screen w-1/2">
            <Image src="/images/iso.svg" alt="Dynamic Studio" width="960" height="1080" className="w-full h-screen object-cover object-right opacity-5" />
          </div> */}
          {/* <div className="z-10 fixed -bottom-[640px] left-1/2 -translate-x-1/2 size-[1280px] bg-[rgb(0,255,255)] blur-[480px] rounded-full opacity-10"></div>           */}
        </Providers>
      </body>
    </html>
  )
}