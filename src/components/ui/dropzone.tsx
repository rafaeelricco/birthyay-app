import { cn } from '@/lib/utils'
import { CloudUpload } from 'lucide-react'
import { useDropzone } from 'react-dropzone'

import React from 'react'

const Dropzone: React.FC<DropzoneProps> = ({ className, onDropFiles }: DropzoneProps) => {
   const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } = useDropzone({
      accept: { 'image/jpeg': [], 'image/png': [], 'video/mp4': [], 'video/mkv': [] },
      onDrop: (acceptedFiles) => {
         onDropFiles(acceptedFiles)
      }
   })

   return (
      <div
         className={cn(
            'border-black-primary flex h-auto w-full flex-1 border-spacing-1 flex-col items-center justify-center rounded-lg border border-dashed bg-transparent py-8 transition-all duration-300',
            {
               'border-black-500': isFocused,
               'border-green-500': isDragAccept,
               'border-red-500': isDragReject
            },
            className
         )}
         {...getRootProps({ isFocused, isDragAccept, isDragReject })}
      >
         <input {...getInputProps()} />
         <div className="flex flex-1 flex-col items-center justify-center">
            <CloudUpload className="text-black-500 my-2 h-8 w-8" />
            <p className="text-base">
               <span className="cursor-default font-semibold underline">Clique para enviar</span> ou arraste e solte
               seus arquivos (máximo de 5 arquivos)
            </p>
            <p className="text-sm text-[#949494]">Tamanho máximo por arquivo de 400MB.</p>
         </div>
      </div>
   )
}

type DropzoneProps = {
   className?: string
   onDropFiles: (files: File[]) => void
}

export { Dropzone }
