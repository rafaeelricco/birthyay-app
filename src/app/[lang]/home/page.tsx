import * as React from 'react'

import { HomeComponent } from '@/features/home/home'
import { getDictionary } from 'get-dictionary'
import { Locale } from 'i18n-config'

type PageParams = Promise<{ lang: Locale }>

export default async function HomePage({ params }: { params: PageParams }) {
   const resolvedParams = await params
   const dictionary = await getDictionary(resolvedParams.lang)
   return (
      <React.Suspense>
         <HomeComponent dictionary={dictionary} />
      </React.Suspense>
   )
}
