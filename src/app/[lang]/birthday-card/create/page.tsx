import * as React from 'react'

import { CreateBirthdayCard } from '@/features/create-birthday-card/create-birthday-card'
import { getDictionary } from 'get-dictionary'
import { Locale } from 'i18n-config'

type PageParams = Promise<{ lang: Locale }>
type SearchParamsType = Promise<{
   [key: string]: string | string[] | undefined
}>

export default async function CreateBirthdayCardPage({
   params
}: {
   params: PageParams
   searchParams: SearchParamsType
}) {
   const resolvedParams = await params
   const dictionary = await getDictionary(resolvedParams.lang)
   return (
      <React.Suspense>
         <CreateBirthdayCard dictionary={dictionary} />
      </React.Suspense>
   )
}
