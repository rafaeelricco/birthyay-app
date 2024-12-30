'use client'

import { formatSize } from '@/lib/react-dropzone'
import { cn } from '@/lib/utils'
import { CloudUpload, Eye, FileText, Trash } from 'lucide-react'
import { useDropzone } from 'react-dropzone'

import React from 'react'

const Dropzone: React.FC<DropzoneProps> = ({
   className,
   files,
   maxSize,
   message,
   multiple = false,
   onDropFiles
}: DropzoneProps) => {
   const {
      getRootProps,
      getInputProps,
      isFocused,
      isDragAccept,
      isDragReject
   } = useDropzone({
      multiple: multiple || false,
      accept: { 'image/*': [] },
      onDrop: (acceptedFiles) => onDropFiles(acceptedFiles)
   })

   return (
      <div
         className={cn(
            'flex h-auto w-full flex-1 border-spacing-1 flex-col' +
               ' items-center justify-center rounded-lg border border-dashed' +
               ' border-white-500 bg-transparent p-4 transition-all' +
               ' duration-300',
            {
               'border-primary-default': isFocused || files.length > 0,
               'border-green-500': isDragAccept,
               'border-red-500': isDragReject
            },
            className
         )}
         {...getRootProps()}
      >
         <input {...getInputProps()} />
         {files.length === 0 ? (
            <div className="flex flex-1 flex-col items-center justify-center">
               <CloudUpload className="text-black-500 my-2 h-6 w-6" />
               {message ? (
                  <React.Fragment>{message}</React.Fragment>
               ) : (
                  <React.Fragment>
                     <p className="text-base">
                        <span className="cursor-default font-semibold underline">
                           Clique para enviar
                        </span>{' '}
                        ou arraste e solte
                     </p>
                     {maxSize && (
                        <p className="text-xs text-gray-500">
                           Tamanho máximo de {formatSize(maxSize)}.
                        </p>
                     )}
                  </React.Fragment>
               )}
            </div>
         ) : (
            <div className="flex flex-col items-center justify-center gap-4">
               <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5" />
                  <span className="font-sf-pro-display text-sm font-semibold">
                     {files[0].name}
                  </span>
                  <span className="text-sm text-gray-500">
                     ({formatSize(files[0].size)})
                  </span>
                  <Eye
                     className="hover:text-primary-default h-5 w-5 cursor-pointer"
                     onClick={(e) => {
                        e.stopPropagation()
                        window.open(URL.createObjectURL(files[0]), '_blank')
                     }}
                  />
                  <Trash
                     className="h-4 w-4 cursor-pointer hover:text-red-500"
                     onClick={(e) => {
                        e.stopPropagation()
                        onDropFiles([])
                     }}
                  />
               </div>
            </div>
         )}
      </div>
   )
}

interface DropzoneProps {
   files: File[]
   maxSize?: number
   message?: React.ReactNode
   className?: string
   multiple?: boolean
   onDropFiles: (files: File[]) => void
}

export { Dropzone }
