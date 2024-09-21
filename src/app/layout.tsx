import '@/app/globals.css'

import { i18n } from 'i18n-config'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({
   subsets: ['latin'],
   display: 'swap'
})

export const metadata: Metadata = {
   metadataBase: new URL(`https://${process.env.VERCEL_URL}`)
} as Metadata

export async function generateStaticParams() {
   return i18n.locales.map((locale) => ({ lang: locale }))
}

export default function RootLayout({
   children
}: Readonly<{
   children: React.ReactNode
}>) {
   return (
      <html lang="en">
         <body className={inter.className}>{children}</body>
      </html>
   )
}
