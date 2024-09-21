'use client'

import { Helmet, HelmetData } from 'react-helmet-async'

const helmetData = new HelmetData({})

export const Head: React.FC<HeadProps> = ({ title, description }: HeadProps) => {
   return (
      <Helmet helmetData={helmetData} title={title}>
         <meta name="description" content={description} />
         <link rel="icon" href="/favicon.ico" sizes="any" />
      </Helmet>
   )
}

type HeadProps = {
   title: string
   description: string
}
