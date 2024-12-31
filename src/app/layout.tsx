import '@mdxeditor/editor/style.css'

import '@/styles/globals.css'
import '@/styles/reset.css'
import '@/styles/text-editor.css'

import { Head } from '@/components/seo/head'
import { cn } from '@/lib/utils'
import { i18n, Locale } from 'i18n-config'
import type { Metadata } from 'next'
import {
   Dosis,
   Inconsolata,
   Inter,
   Montserrat,
   Roboto,
   Work_Sans
} from 'next/font/google'
import { Toaster } from 'sonner'

const interFont = Inter({
   subsets: ['latin'],
   weight: ['400', '500', '600', '700'],
   variable: '--font-inter',
   preload: true
})

const montserratFont = Montserrat({
   subsets: ['latin'],
   weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
   variable: '--font-montserrat'
})

const robotoFont = Roboto({
   subsets: ['latin'],
   weight: ['100', '300', '400', '500', '700', '900'],
   variable: '--font-roboto'
})

const workSansFont = Work_Sans({
   subsets: ['latin'],
   weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
   variable: '--font-work-sans'
})

const dosisFont = Dosis({
   subsets: ['latin'],
   weight: ['200', '300', '400', '500', '600', '700', '800'],
   variable: '--font-dosis'
})

const inconsolataFont = Inconsolata({
   subsets: ['latin'],
   weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
   variable: '--font-inconsolata'
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
         <body
            id="root"
            className={cn(
               interFont.variable,
               montserratFont.variable,
               robotoFont.variable,
               workSansFont.variable,
               dosisFont.variable,
               inconsolataFont.variable
            )}
         >
            {children}
            <Toaster />
         </body>
      </html>
   )
}
