'use client'

import { DictionaryProps } from '@/types/dictionary'

import React from 'react'

const HomeComponent: React.FC<DictionaryProps> = ({ dictionary }: DictionaryProps) => {
   return (
      <React.Fragment>
         <h1 className="text-2xl font-bold">{dictionary.hero.title}</h1>
      </React.Fragment>
   )
}

export { HomeComponent }
