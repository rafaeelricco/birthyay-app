'use client'

import { z } from 'zod'

import { Logo } from '@/components/icons/logo'
import { Button } from '@/components/ui/button'
import { Dropzone } from '@/components/ui/dropzone'
import { Header } from '@/components/ui/header'
import { Input } from '@/components/ui/input'
import { Badge } from '@/features/home/badge'
import { Grid } from '@/features/home/grid'
import { LinesSVG } from '@/features/home/lines'
import { SafariFrame } from '@/features/home/safari-frame'
import { DictionaryProps } from '@/types/dictionary'

import React from 'react'

const HomeComponent: React.FC<DictionaryProps> = ({ dictionary }: DictionaryProps) => {
   return (
      <div className="relative">
         <Header dictionary={dictionary} />
         <div className="relative mt-28 flex min-h-screen flex-col items-center justify-center">
            <div className="z-10 flex h-full w-full flex-col items-center justify-center space-y-4">
               <Badge />
               <div className="flex flex-col items-center justify-center space-y-4">
                  <h1 className="text-black-primary text-center text-6xl font-bold">
                     O seu feliz{' '}
                     <span className="from-gradient-start via-gradient-middle to-gradient-end bg-gradient-to-tl bg-clip-text text-transparent">
                        aniversário
                     </span>{' '}
                     <br />
                     de um jeito especial
                  </h1>
                  <p className="text-gray-primary max-w-[64ch] text-center text-base font-medium">
                     Crie páginas de aniversário que ajudam você a expressar seus sentimentos com mensagens
                     personalizadas, vídeos e muito mais.
                  </p>
                  <div className="flex gap-4">
                     <Button variant="gradient">Começar agora</Button>
                     <Button variant="outline">Saiba mais</Button>
                  </div>
               </div>
               <SafariFrame>
                  <div className="mx-auto my-0 max-w-[70%] space-y-4">
                     <div className="w-full py-4">
                        <Logo className="mx-auto my-0 w-28 antialiased" />
                     </div>
                     <div className="grid justify-items-center">
                        <Dropzone className="min-h-[200px] bg-white" onDropFiles={(files) => {}} files={[]} setFiles={(files) => {}} maxSize={1000} />
                     </div>
                     <Input
                        value={'Feliz aniversário, Claro Sa'}
                        className="ou text-black-primary min-h-[54px] w-full text-4xl font-semibold ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                     />
                     <p className="text-sm text-[#868686]">
                        {new Date().toLocaleDateString('pt-BR', {
                           day: '2-digit',
                           month: 'long',
                           year: 'numeric'
                        })}
                     </p>
                  </div>
               </SafariFrame>
            </div>
         </div>
         <LinesSVG className="absolute left-0 top-14" />
         <Grid className="absolute left-0 top-14 -z-10" />
         <div className="absolute right-0 top-14 -z-10 h-[962px] w-[962px] rounded-full bg-gradient-to-r from-[#cdb6ff] via-[#ff94c6] to-[#ffc78c] opacity-40 blur-[200px]" />
      </div>
   )
}

const birthdaySchema = z.object({ 
    // id: string
    // array de arquivos, até 5
    /* 
    message: {
       title: string
       body: string (string com html (parse no frontend))
    }
    */
})

export { HomeComponent }

