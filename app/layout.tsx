import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ClientScripts from '@/components/ClientScripts' // Adjust the path as needed

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gen Tech Solutions - Hardware Rental & IT Services | Tamil Nadu',
  description: 'Cost-effective laptop and desktop rental solutions...',
  // ...rest unchanged
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        <ClientScripts />
      </body>
    </html>
  )
}
