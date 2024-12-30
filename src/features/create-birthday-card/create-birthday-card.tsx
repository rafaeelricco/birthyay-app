'use client'

import * as React from 'react'

import { Dropzone } from '@/components/ui/dropzone'
import { Header } from '@/components/ui/header'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { editor_toolbar_options } from '@/lib/react-draft-wysiwyg'
import { formatSize } from '@/lib/react-dropzone'
import { DictionaryProps } from '@/types/dictionary'
import { EditorProps, EditorState } from 'react-draft-wysiwyg'

import dynamic from 'next/dynamic'

const Editor = dynamic<EditorProps>(
   () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
   {
      ssr: false,
      loading: () => (
         <div className="min-h-[449px] animate-pulse rounded-lg bg-neutral-100 dark:bg-neutral-800" />
      )
   }
)

interface CreateBirthdayCardProps {
   dictionary: DictionaryProps['dictionary']
}

const CreateBirthdayCard: React.FC<CreateBirthdayCardProps> = ({
   dictionary
}: CreateBirthdayCardProps) => {
   return (
      <React.Fragment>
         <div className="relative min-h-screen">
            <Header dictionary={dictionary} />
            <div className="relative flex h-[calc(100vh-88px)] flex-col items-center justify-center md:mt-28 md:h-full"></div>
            <div className="container space-y-4">
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
                              Tamanho máximo de {formatSize(419500000)}.
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
                  <Label htmlFor="picture">Nome do aniversariante</Label>
                  <Input />
               </div>
               <Editor
                  toolbarClassName="editor-toolbar"
                  wrapperClassName="editor-wrapper"
                  editorClassName="editor-style"
                  toolbar={editor_toolbar_options}
                  onEditorStateChange={(editorState: EditorState) => {}}
               />
            </div>
         </div>
      </React.Fragment>
   )
}

export { CreateBirthdayCard }
