'use client'

import { DictionaryProps } from '@/types/dictionary'

import React from 'react'

const HomeComponent: React.FC<DictionaryProps> = ({ dictionary }: DictionaryProps) => {
   return (
      <React.Fragment>
         <h1 className="text-2xl font-bold">{dictionary.hero.title}</h1>
         <div className="inline-flex h-7 flex-col items-center justify-start rounded-full bg-gradient-to-r from-[#cab7ff] via-[#ff9bc5] to-[#ffca95] px-4 py-1 shadow-inner backdrop-blur-sm">
            <div className="text-center font-['Inter'] text-sm font-medium leading-tight text-[#8a30e3]">
               E aí, felizardo(a)! 🎉
            </div>
         </div>
      </React.Fragment>
   )
}

export { HomeComponent }
