'use client'

import * as React from 'react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Dropzone } from '@/components/ui/dropzone'
import { Header } from '@/components/ui/header'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { editor_toolbar_options } from '@/lib/react-draft-wysiwyg'
import { formatSize } from '@/lib/react-dropzone'
import { DictionaryProps } from '@/types/dictionary'
import { GripVertical } from 'lucide-react'
import { EditorProps, EditorState } from 'react-draft-wysiwyg'
import { createSwapy, Swapy } from 'swapy'

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
   const [files, setFiles] = React.useState<File[]>([])
   const [order, setOrder] = React.useState<number[]>([])

   const swapyRef = React.useRef<Swapy | null>(null)
   const containerRef = React.useRef<HTMLDivElement>(null)

   React.useEffect(() => {
      if (containerRef.current) {
         swapyRef.current = createSwapy(containerRef.current, {
            animation: 'dynamic',
            // swapMode: 'drop',
            // autoScrollOnDrag: true,
            // enabled: true,
            dragAxis: 'y'
            // dragOnHold: true
         })

         // swapyRef.current.enable(false)
         // swapyRef.current.destroy()
         // console.log(swapyRef.current.slotItemMap())

         swapyRef.current.onBeforeSwap((event) => {
            console.log('beforeSwap', event)
            // This is for dynamically enabling and disabling swapping.
            // Return true to allow swapping, and return false to prevent swapping.
            return true
         })

         swapyRef.current.onSwapStart((event) => {
            console.log('start', event)
         })
         swapyRef.current.onSwap((event) => {
            console.log('swap', event)
         })
         swapyRef.current.onSwapEnd((event) => {
            console.log('end', event)

            const itensOrder = swapyRef.current?.slotItemMap()
            const itensOrderArray = itensOrder?.asArray
               .map((item) => item.item)
               .map((item) => item.replace(/slot-/, '').trim())
               .map((item) => Number(item))

            if (!itensOrderArray) return
            setOrder(itensOrderArray)

            // use the order array to reorder the files on send to the backend
            // const reorderedFiles = itensOrderArray.map(
            //    (index) => files[Number(index)]
            // )
         })
      }
      return () => {
         swapyRef.current?.destroy()
      }
   }, [files])

   return (
      <div className="container">
         <Header dictionary={dictionary} />
         <Card className="relative mx-4">
            <CardContent className="space-y-4 px-6 py-4">
               <div className="space-y-4">
                  <h3 className="font-inter text-lg font-semibold sm:text-2xl">
                     Criar sua cartinha digital
                  </h3>
                  <div className="space-y-4">
                     <Dropzone
                        multiple
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
                        onDropFiles={(files) => setFiles(files)}
                        maxSize={419500000}
                     />
                     {files.length > 0 && (
                        <div className="space-y-2" ref={containerRef}>
                           <h3 className="text-sm font-medium">
                              Ordem dos arquivos
                           </h3>
                           <div className="w-full space-y-2">
                              {files.map((file, index) => (
                                 <div
                                    key={file.name}
                                    className="slot"
                                    data-swapy-slot={`slot-${index}`}
                                 >
                                    <div
                                       data-swapy-item={`slot-${index}`}
                                       className="flex cursor-grab items-center gap-2 rounded-lg border bg-white px-2 py-3 hover:bg-gray-50 active:cursor-grabbing"
                                    >
                                       <div className="text-gray-400">
                                          <GripVertical className="h-4 w-4" />
                                       </div>
                                       <span className="select-none">
                                          {file.name}
                                       </span>
                                    </div>
                                 </div>
                              ))}
                           </div>
                        </div>
                     )}
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
            </CardContent>
            <CardFooter className="flex justify-end">
               <Button
                  disabled={files.length === 0}
                  variant="gradient-animated"
               >
                  Pré-visualizar cartinha
               </Button>
            </CardFooter>
         </Card>
      </div>
   )
}

export { CreateBirthdayCard }
