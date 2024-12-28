import * as React from 'react'

import { CreateBirthdayCard } from '@/features/create-birthday-card/create-birthday-card'

export default async function CreateBirthdayCardPage() {
   return (
      <React.Suspense>
         <CreateBirthdayCard />
      </React.Suspense>
   )
}
