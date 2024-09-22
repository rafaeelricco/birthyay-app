import '@/app/globals.css'

import { Head } from '@/components/seo/head'
import { i18n, Locale } from 'i18n-config'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'sonner'

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

export default function Root({
   children,
   params
}: Readonly<{
   children: React.ReactNode
   params: { lang: Locale }
}>) {
   return (
      <html lang={params.lang} className="antialiased">
         <Head
            title="Birthyay | O seu feliz aniversário de um jeito especial"
            description="Crie páginas de aniversário que ajudam você a expressar seus sentimentos com mensagens personalizadas, vídeos e muito mais."
         />
         <body id="root" className={inter.className}>
            {children}
            <Toaster />
         </body>
      </html>
   )
}
