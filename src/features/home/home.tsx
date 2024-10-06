'use client'

import { Button } from '@/components/ui/button'
import { DictionaryProps } from '@/types/dictionary'

import React from 'react'

const HomeComponent: React.FC<DictionaryProps> = ({ dictionary }: DictionaryProps) => {
   return (
      <div className="flex h-screen flex-col items-center justify-center">
         <div className="flex flex-col items-center justify-center space-y-4">
            <h1 className="text-black-primary text-center text-5xl font-bold">
               O seu feliz{' '}
               <span className="from-gradient-start via-gradient-middle to-gradient-end bg-gradient-to-tl bg-clip-text text-transparent">
                  aniversário
               </span>{' '}
               <br />
               de um jeito especial
            </h1>
            <p className="text-gray-primary max-w-[64ch] text-center text-base font-medium">
               Crie páginas de aniversário que ajudam você a expressar seus sentimentos com mensagens personalizadas,
               vídeos e muito mais.
            </p>
            <div className="flex gap-4">
               <Button variant="gradient">Começar agora</Button>
               <Button variant="outline">Saiba mais</Button>
            </div>
         </div>
      </div>
   )
}

const Badge: React.FC = () => {
   return (
      <div className="inline-flex h-7 flex-col items-center justify-start rounded-full bg-gradient-to-r from-[#cab7ff] via-[#ff9bc5] to-[#ffca95] px-4 py-1 shadow-inner backdrop-blur-sm">
         <div className="text-center font-['Inter'] text-sm font-medium leading-tight text-[#8a30e3]">
            E aí, felizardo(a)! 🎉
         </div>
      </div>
   )
}

export { HomeComponent }
