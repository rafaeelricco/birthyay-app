'use client'

import dynamic from 'next/dynamic'
import * as React from 'react'
import * as z from 'zod'

import { DictionaryProps } from '@/types/dictionary'
import { EditorProps } from 'react-draft-wysiwyg'

import { Button } from '@/components/ui/button'
import { Header } from '@/components/ui/header'
import { cn } from '@/lib/utils'
import { EditorState } from 'draft-js'

import AnimatedGradientText from '@/components/ui/animated-gradient-text'
import AnimatedGridPattern from '@/components/ui/animated-grid-pattern'
import HeroVideoDialog from '@/components/ui/hero-video-dialog'

const Editor = dynamic<EditorProps>(
   () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
   {
      ssr: false,
      loading: () => (
         <div className="min-h-[449px] animate-pulse rounded-lg bg-neutral-100 dark:bg-neutral-800" />
      )
   }
)

const HomeComponent: React.FC<DictionaryProps> = ({
   dictionary
}: DictionaryProps) => {
   const [name, setName] = React.useState('')
   const [editorState, setEditorState] = React.useState<
      EditorState | undefined
   >()
   return (
      <React.Fragment>
         <div className="relative min-h-screen">
            <Header dictionary={dictionary} />
            <div className="relative flex h-[calc(100vh-88px)] flex-col items-center justify-center md:mt-28 md:h-full">
               <div className="z-10 flex w-full flex-col items-center justify-center gap-4 pb-12 md:space-y-4 md:pb-16">
                  <div className="z-10 flex items-center justify-center">
                     <AnimatedGradientText>
                        🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{' '}
                        <span
                           className={cn(
                              'inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text font-inter font-semibold text-transparent'
                           )}
                        >
                           E aí, felizardo(a)!
                        </span>
                     </AnimatedGradientText>
                  </div>
                  <div className="flex flex-col items-center justify-center space-y-4">
                     <div className="space-y-2 md:space-y-4">
                        <h1 className="text-center text-3xl font-bold text-black-primary md:text-6xl">
                           O seu feliz{' '}
                           <span className="bg-gradient-to-tl from-gradient-start via-gradient-middle to-gradient-end bg-clip-text text-transparent">
                              aniversário
                           </span>{' '}
                           <br />
                           de um jeito especial
                        </h1>
                        <p className="max-w-[64ch] px-4 text-center text-sm font-medium text-gray-primary md:px-0 md:text-base">
                           Crie páginas de aniversário que ajudam você a
                           expressar seus sentimentos com mensagens
                           personalizadas, vídeos e muito mais.
                        </p>
                     </div>
                     <div className="flex gap-4">
                        <Button variant="gradient-animated">
                           Começar agora
                        </Button>
                     </div>
                  </div>
                  <div className="relative px-4">
                     <HeroVideoDialog
                        className="block dark:hidden"
                        animationStyle="from-center"
                        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                        thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
                        thumbnailAlt="Hero Video"
                     />
                     <HeroVideoDialog
                        className="hidden dark:block"
                        animationStyle="from-center"
                        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                        thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
                        thumbnailAlt="Hero Video"
                     />
                  </div>
                  {/* <SafariFrame url="birthyay.net">
                     <div className="mx-auto my-0 max-w-[70%] space-y-4">
                        <div className="w-full py-4 pt-6">
                           <Logo className="mx-auto my-0 w-28 antialiased" />
                        </div>
                        <div className="grid justify-items-center">
                           <Dropzone
                              files={[]}
                              message={
                                 <React.Fragment>
                                    <p className="text-base">
                                       <span className="cursor-default font-semibold underline">
                                          Clique para enviar
                                       </span>{' '}
                                       ou arraste e solte
                                    </p>
                                    <p className="text-xs text-gray-500">
                                       Tamanho máximo de {formatSize(419500000)}
                                       .
                                    </p>
                                 </React.Fragment>
                              }
                              className="min-h-[200px] bg-white"
                              onDropFiles={(files) => {}}
                              setFiles={(files) => {}}
                              maxSize={419500000}
                           />
                        </div>
                        <div className="grid w-full items-center gap-1.5">
                           <Label htmlFor="picture">
                              Nome do aniversariante
                           </Label>
                           <Input
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                           />
                        </div>
                        <Editor
                           toolbarClassName="editor-toolbar"
                           wrapperClassName="editor-wrapper"
                           editorClassName="editor-style"
                           toolbar={editor_toolbar_options}
                           onEditorStateChange={(
                              editorState: EditorState
                           ) => {}}
                        />
                     </div>
                  </SafariFrame> */}
               </div>
            </div>
            <AnimatedGridPattern
               numSquares={200}
               maxOpacity={0.1}
               duration={3}
               repeatDelay={1}
               className={cn(
                  '[mask-image:radial-gradient(100%_100%_at_center,white,transparent)]',
                  'fixed inset-0 -z-10 h-screen w-screen opacity-50'
               )}
            />
            <div className="fixed right-0 top-14 -z-10 h-[962px] w-[962px] rounded-full bg-gradient-to-r from-[#cdb6ff] via-[#ff94c6] to-[#ffc78c] opacity-40 blur-[200px]" />
         </div>
      </React.Fragment>
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

export { HomeComponent }
