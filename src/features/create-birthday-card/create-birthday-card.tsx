'use client'

import * as React from 'react'

import { Logo } from '@/components/icons/logo'
import { Dropzone } from '@/components/ui/dropzone'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { editor_toolbar_options } from '@/lib/react-draft-wysiwyg'
import { formatSize } from '@/lib/react-dropzone'
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

const CreateBirthdayCard: React.FC = () => {
   return (
      <React.Fragment>
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
      </React.Fragment>
   )
}

export { CreateBirthdayCard }
