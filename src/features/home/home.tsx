'use client'

import dynamic from 'next/dynamic'
import * as React from 'react'
import * as z from 'zod'

import { DictionaryProps } from '@/types/dictionary'
import { EditorProps } from 'react-draft-wysiwyg'

import { Logo } from '@/components/icons/logo'
import AnimatedGradientText from '@/components/ui/animated-gradient-text'
import AnimatedGridPattern from '@/components/ui/animated-grid-pattern'
import { Button } from '@/components/ui/button'
import { Dropzone } from '@/components/ui/dropzone'
import { Header } from '@/components/ui/header'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { SafariFrame } from '@/components/ui/safari-frame'
import { cn } from '@/lib/utils'
import { EditorState } from 'draft-js'

const Editor = dynamic<EditorProps>(
   () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
   {
      ssr: false,
      loading: () => <div>Loading...</div>
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
            <div className="relative mt-28 flex min-h-screen flex-col items-center justify-center">
               <div className="z-10 flex h-full w-full flex-col items-center justify-center space-y-4">
                  <div className="z-10 flex items-center justify-center">
                     <AnimatedGradientText>
                        🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{' '}
                        <span
                           className={cn(
                              `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text font-inter font-semibold text-transparent`
                           )}
                        >
                           E aí, felizardo(a)!
                        </span>
                     </AnimatedGradientText>
                  </div>
                  <div className="flex flex-col items-center justify-center space-y-4">
                     <h1 className="text-center text-6xl font-bold text-black-primary">
                        O seu feliz{' '}
                        <span className="bg-gradient-to-tl from-gradient-start via-gradient-middle to-gradient-end bg-clip-text text-transparent">
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
                  <SafariFrame url="birthyay.net">
                     <div className="mx-auto my-0 max-w-[70%] space-y-4">
                        <div className="w-full py-4">
                           <Logo className="mx-auto my-0 w-28 antialiased" />
                        </div>
                        <div className="grid justify-items-center">
                           <Dropzone
                              className="min-h-[200px] bg-white"
                              files={[]}
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
                              className="min-h-[54px] w-full text-4xl font-semibold text-black-primary ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                              onChange={(e) => setName(e.target.value)}
                           />
                        </div>
                        <Editor
                           toolbarClassName="editor-toolbar"
                           wrapperClassName="editor-wrapper"
                           editorClassName="editor-style"
                           toolbar={editor_toolbar_options}
                           onEditorStateChange={(editorState: EditorState) => {
                              console.log(editorState)
                           }}
                        />
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
            <div className="absolute right-0 top-14 -z-10 h-[962px] w-[962px] rounded-full bg-gradient-to-r from-[#cdb6ff] via-[#ff94c6] to-[#ffc78c] opacity-40 blur-[200px]" />
         </div>
      </React.Fragment>
   )
}

const editor_toolbar_options = {
   options: [
      'inline',
      'blockType',
      'fontSize',
      'fontFamily',
      'list',
      'textAlign',
      'colorPicker',
      'emoji',
      'image',
      'remove',
      'history'
   ],
   fontSize: {
      inDropdown: true,
      options: [8, 9, 10, 11, 12, 14, 16, 18, 24, 30, 36, 48, 60, 72, 96],
      className: undefined,
      component: undefined,
      dropdownClassName: undefined
   },
   fontFamily: {
      inDropdown: true,
      options: [
         'Montserrat',
         'Roboto',
         'Inter',
         'Work Sans',
         'Dosis',
         'Inconsolata'
      ],
      className: undefined,
      component: undefined,
      dropdownClassName: undefined
   },
   inline: {
      inDropdown: true,
      options: [
         'bold',
         'italic',
         'underline',
         'strikethrough',
         'monospace',
         'superscript',
         'subscript'
      ]
   },
   blockType: {
      inDropdown: true,
      options: [
         'Normal',
         'H1',
         'H2',
         'H3',
         'H4',
         'H5',
         'H6',
         'Blockquote',
         'Code'
      ]
   },
   list: {
      inDropdown: true,
      options: ['unordered', 'ordered', 'indent', 'outdent']
   },
   textAlign: {
      inDropdown: true,
      options: ['left', 'center', 'right', 'justify']
   },
   image: {
      inDropdown: true,
      options: ['image', 'unlink']
   }
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
   return <React.Fragment></React.Fragment>
}

/* const handleEditorChange = (editorState: EditorState) => {
   const raw = convertToRaw(editorState.getCurrentContent())
   const html = draftToHtml(raw)

   if (html !== '<p></p>') {
      setValue('content', html)
      setValue('raw', raw)
      trigger('content')
   }
} */

/* interface CustomTextEditorProps {
    onAdd: () => void
    onCancel: () => void
    register: UseFormRegister<any>
    setValue: UseFormSetValue<any>
    trigger: UseFormTrigger<any>
    reset: UseFormReset<any>
    errors: FieldErrors<CustomDocumentProps>
    initialContentState: RawDraftContentState | undefined
    text: string
    dictionary: DictionaryProps['dictionary']
 }
 
 const CustomTextEditor: React.FC<CustomTextEditorProps> = ({
    onAdd,
    onCancel,
    register,
    errors,
    initialContentState,
    reset,
    setValue,
    trigger,
    text,
    dictionary
 }: CustomTextEditorProps) => {
    
 
    return (
       <React.Fragment>
          <Input.Root>
             <Input.Label>Título dos termos</Input.Label>
             <Input.Input
                {...register('title')}
                placeholder="Insira um título"
                onInput={(e) => {
                   setValue('title', e.currentTarget.value)
                   trigger('title')
                }}
             />
             <Input.Error>{errors.title?.message}</Input.Error>
          </Input.Root>
          <Input.Root>
             <Input.Label>Termos</Input.Label>
             <Editor
                toolbarClassName="editor-toolbar"
                wrapperClassName="editor-wrapper"
                editorClassName="editor-style"
                placeholder={dictionary?.common.description_here}
                initialContentState={initialContentState as RawDraftContentState}
                handlePastedText={() => false}
                onEditorStateChange={handleEditorChange}
             />
             <Input.Error>{errors.content?.message}</Input.Error>
          </Input.Root>
          <hr />
          <div className="flex items-center gap-4 min-w-full">
             <Button.Button className="p-4 py-3" variant="outline" onClick={onCancel}>
                Cancelar
             </Button.Button>
             <Button.Button className="p-4 py-3" type="button" variant="primary" onClick={onAdd}>
                {text}
             </Button.Button>
          </div>
       </React.Fragment>
    )
 }
 */
export { HomeComponent }
