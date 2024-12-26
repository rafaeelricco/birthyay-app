'use client'

import * as z from 'zod'

import { Logo } from '@/components/icons/logo'
import { Button } from '@/components/ui/button'
import { Dropzone } from '@/components/ui/dropzone'
import { Header } from '@/components/ui/header'
import { Input } from '@/components/ui/input'
import { SafariFrame } from '@/components/ui/safari-frame'
import { cn } from '@/lib/utils'
import { DictionaryProps } from '@/types/dictionary'

import AnimatedGradientText from '@/components/ui/animated-gradient-text'
import AnimatedGridPattern from '@/components/ui/animated-grid-pattern'
import React from 'react'

const HomeComponent: React.FC<DictionaryProps> = ({ dictionary }: DictionaryProps) => {
   return (
      <div className="relative min-h-screen">
         <Header dictionary={dictionary} />
         <div
            className="relative mt-28 flex min-h-screen flex-col items-center justify-center">
            <div
               className="z-10 flex h-full w-full flex-col items-center justify-center space-y-4">
               <div className="z-10 flex items-center justify-center">
                  <AnimatedGradientText>
                     🎉 <hr
                     className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{' '}
                     <span
                        className={cn(
                           `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text font-inter font-semibold text-transparent`
                        )}
                     >
                        E aí, felizardo(a)!
                     </span>
                  </AnimatedGradientText>
               </div>
               <div
                  className="flex flex-col items-center justify-center space-y-4">
                  <h1
                     className="text-center text-6xl font-bold text-black-primary">
                     O seu feliz{' '}
                     <span
                        className="bg-gradient-to-tl from-gradient-start via-gradient-middle to-gradient-end bg-clip-text text-transparent">
                        aniversário
                     </span>{' '}
                     <br />
                     de um jeito especial
                  </h1>
                  <p className="max-w-[64ch] text-center text-base font-medium text-gray-primary">
                     Crie páginas de aniversário que ajudam você a expressar
                     seus sentimentos com mensagens personalizadas, vídeos e
                     muito mais.
                  </p>
                  <div className="flex gap-4">
                     <Button variant="gradient">Começar agora</Button>
                     {/* <Button variant="outline">Saiba mais</Button> */}
                  </div>
               </div>
               <SafariFrame>
                  <div className="mx-auto my-0 max-w-[70%] space-y-4">
                     <div className="w-full py-4">
                        <Logo className="mx-auto my-0 w-28 antialiased" />
                     </div>
                     <div className="grid justify-items-center">
                        <Dropzone
                           className="min-h-[200px] bg-white"
                           onDropFiles={(files) => {
                           }}
                           files={[]}
                           setFiles={(files) => {
                           }}
                           maxSize={1000}
                        />
                     </div>
                     <Input
                        value={'Feliz aniversário, Claro Sa'}
                        className="ou min-h-[54px] w-full text-4xl font-semibold text-black-primary ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                     />
                     <p className="text-sm text-[#868686]">
                        {new Date().toLocaleDateString('pt-BR', {
                           day: '2-digit',
                           month: 'long',
                           year: 'numeric'
                        })}
                     </p>
                     <TextEditor />
                  </div>
               </SafariFrame>
            </div>
         </div>
         <AnimatedGridPattern
            numSquares={200}
            maxOpacity={0.1}
            duration={3}
            repeatDelay={1}
            className={cn(
               '[mask-image:radial-gradient(100%_100%_at_center,white,transparent)]',
               'absolute inset-0 -z-10 h-screen w-screen opacity-50'
            )}
         />
         <div
            className="absolute right-0 top-14 -z-10 h-[962px] w-[962px] rounded-full bg-gradient-to-r from-[#cdb6ff] via-[#ff94c6] to-[#ffc78c] opacity-40 blur-[200px]" />
      </div>
   )
}

const birthdaySchema = z.object({
   id: z.string().uuid(),
   files: z.array(z.instanceof(File)).max(5, 'Maximum of 5 files allowed'),
   message: z.object({
      title: z.string().min(1, 'Title is required').max(100, 'Title too long'),
      body: z.string().min(1, 'Message body is required')
   })
})

type Birthday = z.infer<typeof birthdaySchema>

const TextEditor: React.FC = () => {
   return (
      <React.Fragment>

      </React.Fragment>
   )
}

export { HomeComponent }
