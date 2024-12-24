import { HomeComponent } from '@/features/home/home'
import { getDictionary } from 'get-dictionary'
import { Locale } from 'i18n-config'
import React from 'react'

type PageParams = Promise<{ lang: Locale }>
type SearchParamsType = Promise<{
   [key: string]: string | string[] | undefined
}>

export default async function HomePage({
   params,
   searchParams
}: {
   params: PageParams
   searchParams: SearchParamsType
}) {
   const resolvedParams = await params
   const dictionary = await getDictionary(resolvedParams.lang)
   return (
      <React.Suspense>
         <HomeComponent dictionary={dictionary} />
      </React.Suspense>
   )
}
