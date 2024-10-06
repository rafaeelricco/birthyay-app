import '@/app/globals.css'

import { Head } from '@/components/seo/head'
import { i18n, Locale } from 'i18n-config'
import type { Metadata } from 'next'
import { Toaster } from 'sonner'

import localFont from 'next/font/local'

const interFont = localFont({
   src: [
      {
         path: './fonts/Inter-Regular.ttf',
         weight: '400',
         style: 'normal'
      },
      {
         path: './fonts/Inter-Medium.ttf',
         weight: '500',
         style: 'normal'
      },
      {
         path: './fonts/Inter-SemiBold.ttf',
         weight: '600',
         style: 'normal'
      },
      {
         path: './fonts/Inter-Bold.ttf',
         weight: '700',
         style: 'normal'
      },
      {
         path: './fonts/Inter-Italic.ttf',
         weight: '400',
         style: 'italic'
      }
   ],
   variable: '--font-inter'
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
         <body id="root" className={interFont.variable}>
            {children}
            <Toaster />
         </body>
      </html>
   )
}
