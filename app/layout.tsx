import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'


export const metadata: Metadata = {
  title: 'Travel app',
  description: 'travel app for young couples',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main className='relative overflow-hidden'>
          <Navbar/>
        </main>
        {children}
         <Footer/>
      </body>
    </html>
  )
}
