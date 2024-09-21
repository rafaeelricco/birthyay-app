import { HomeComponent } from '@/features/home/home'
import { getDictionary } from 'get-dictionary'
import { Locale } from 'i18n-config'

import React from 'react'

export default async function HomePage({ params: { lang } }: { params: { lang: Locale } }) {
   const dictionary = await getDictionary(lang)
   return (
      <React.Suspense>
         <HomeComponent dictionary={dictionary} />
      </React.Suspense>
   )
}
