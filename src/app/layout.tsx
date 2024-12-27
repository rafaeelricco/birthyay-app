import '@/styles/globals.css'
import '@/styles/reset.css'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

import { Head } from '@/components/seo/head'
import { i18n, Locale } from 'i18n-config'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'sonner'

const interFont = Inter({
   subsets: ['latin'],
   weight: ['400', '500', '600', '700'],
   variable: '--font-inter'
})

export const metadata: Metadata = {
   metadataBase: new URL(`https://${process.env.VERCEL_URL}`)
} as Metadata

type LayoutParams = Promise<{ lang: Locale }>

export async function generateStaticParams() {
   return i18n.locales.map((locale) => ({ lang: locale }))
}

export default async function Root({
   children,
   params
}: Readonly<{
   children: React.ReactNode
   params: LayoutParams
}>) {
   const resolvedParams = await params
   return (
      <html lang={resolvedParams.lang} className="antialiased">
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
