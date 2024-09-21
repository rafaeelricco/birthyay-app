import { Head } from '@/components/seo/head'

import React from 'react'

type LayoutProps = {
   children: React.ReactNode
   title: string
}

export const Layout = ({ children, title }: LayoutProps) => {
   return (
      <React.Fragment>
         <Head title={title} description="Conversor de arquivos" />
         {children}
      </React.Fragment>
   )
}
