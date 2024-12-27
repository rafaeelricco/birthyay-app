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
import {
   AlignCenter,
   AlignJustify,
   AlignLeft,
   AlignRight,
   ArrowDown,
   ArrowLeft,
   ArrowRight,
   ArrowUp,
   Bold,
   Code,
   Eraser,
   Eye,
   Image,
   Italic,
   Link,
   Link2Off,
   List,
   ListOrdered,
   PaintBucket,
   Redo,
   Smile,
   Strikethrough,
   Text,
   Underline,
   Undo
} from 'lucide-react'

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
                           toolbar={{
                              options: [
                                 'inline',
                                 'blockType',
                                 'fontSize',
                                 'fontFamily',
                                 'list',
                                 'textAlign',
                                 'colorPicker',
                                 'link',
                                 'emoji',
                                 'image',
                                 'remove',
                                 'history'
                              ],
                              fontSize: {
                                 inDropdown: true,
                                 options: [
                                    8, 9, 10, 11, 12, 14, 16, 18, 24, 30, 36,
                                    48, 60, 72, 96
                                 ],
                                 className: undefined,
                                 component: undefined,
                                 dropdownClassName: undefined
                              },
                              fontFamily: {
                                 inDropdown: true,
                                 options: [
                                    'Arial',
                                    'Georgia',
                                    'Impact',
                                    'Tahoma',
                                    'Times New Roman',
                                    'Verdana'
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
                                 options: [
                                    'unordered',
                                    'ordered',
                                    'indent',
                                    'outdent'
                                 ]
                              },
                              textAlign: {
                                 inDropdown: true,
                                 options: ['left', 'center', 'right', 'justify']
                              },
                              link: {
                                 inDropdown: true,
                                 options: ['link', 'unlink']
                              },
                              history: {
                                 inDropdown: true,
                                 options: ['undo', 'redo']
                              }
                           }}
                           handlePastedText={() => false}
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

const editor_toolbar = {
   options: [
      'inline',
      'blockType',
      'fontSize',
      'fontFamily',
      'list',
      'textAlign',
      'colorPicker',
      'link',
      'embedded',
      'emoji',
      'image',
      'remove',
      'history'
   ],
   inline: {
      inDropdown: false,
      className: undefined,
      component: undefined,
      dropdownClassName: undefined,
      options: [
         'bold',
         'italic',
         'underline',
         'strikethrough',
         'monospace',
         'superscript',
         'subscript'
      ],
      bold: { icon: Bold, className: undefined },
      italic: { icon: Italic, className: undefined },
      underline: { icon: Underline, className: undefined },
      strikethrough: { icon: Strikethrough, className: undefined },
      monospace: { icon: Code, className: undefined },
      superscript: { icon: ArrowUp, className: undefined },
      subscript: { icon: ArrowDown, className: undefined }
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
      ],
      className: undefined,
      component: undefined,
      dropdownClassName: undefined
   },
   fontSize: {
      icon: Text,
      options: [8, 9, 10, 11, 12, 14, 16, 18, 24, 30, 36, 48, 60, 72, 96],
      className: undefined,
      component: undefined,
      dropdownClassName: undefined
   },
   fontFamily: {
      options: [
         'Arial',
         'Georgia',
         'Impact',
         'Tahoma',
         'Times New Roman',
         'Verdana'
      ],
      className: undefined,
      component: undefined,
      dropdownClassName: undefined
   },
   list: {
      inDropdown: false,
      className: undefined,
      component: undefined,
      dropdownClassName: undefined,
      options: ['unordered', 'ordered', 'indent', 'outdent'],
      unordered: { icon: List, className: undefined },
      ordered: { icon: ListOrdered, className: undefined },
      indent: { icon: ArrowRight, className: undefined },
      outdent: { icon: ArrowLeft, className: undefined }
   },
   textAlign: {
      inDropdown: false,
      className: undefined,
      component: undefined,
      dropdownClassName: undefined,
      options: ['left', 'center', 'right', 'justify'],
      left: { icon: AlignLeft, className: undefined },
      center: { icon: AlignCenter, className: undefined },
      right: { icon: AlignRight, className: undefined },
      justify: { icon: AlignJustify, className: undefined }
   },
   colorPicker: {
      icon: PaintBucket,
      className: undefined,
      component: undefined,
      popupClassName: undefined,
      colors: [
         'rgb(97,189,109)',
         'rgb(26,188,156)',
         'rgb(84,172,210)',
         'rgb(44,130,201)',
         'rgb(147,101,184)',
         'rgb(71,85,119)',
         'rgb(204,204,204)',
         'rgb(65,168,95)',
         'rgb(0,168,133)',
         'rgb(61,142,185)',
         'rgb(41,105,176)',
         'rgb(85,57,130)',
         'rgb(40,50,78)',
         'rgb(0,0,0)',
         'rgb(247,218,100)',
         'rgb(251,160,38)',
         'rgb(235,107,86)',
         'rgb(226,80,65)',
         'rgb(163,143,132)',
         'rgb(239,239,239)',
         'rgb(255,255,255)',
         'rgb(250,197,28)',
         'rgb(243,121,52)',
         'rgb(209,72,65)',
         'rgb(184,49,47)',
         'rgb(124,112,107)',
         'rgb(209,213,216)'
      ]
   },
   link: {
      inDropdown: false,
      className: undefined,
      component: undefined,
      popupClassName: undefined,
      dropdownClassName: undefined,
      showOpenOptionOnHover: true,
      defaultTargetOption: '_self',
      options: ['link', 'unlink'],
      link: { icon: Link, className: undefined },
      unlink: { icon: Link2Off, className: undefined },
      linkCallback: undefined
   },
   emoji: {
      icon: Smile,
      className: undefined,
      component: undefined,
      popupClassName: undefined,
      emojis: [
         '😀',
         '😁',
         '😂',
         '😃',
         '😉',
         '😋',
         '😎',
         '😍',
         '😗',
         '🤗',
         '🤔',
         '😣',
         '😫',
         '😴',
         '😌',
         '🤓',
         '😛',
         '😜',
         '😠',
         '😇',
         '😷',
         '😈',
         '👻',
         '😺',
         '😸',
         '😹',
         '😻',
         '😼',
         '😽',
         '🙀',
         '🙈',
         '🙉',
         '🙊',
         '👼',
         '👮',
         '🕵',
         '💂',
         '👳',
         '🎅',
         '👸',
         '👰',
         '👲',
         '🙍',
         '🙇',
         '🚶',
         '🏃',
         '💃',
         '⛷',
         '🏂',
         '🏌',
         '🏄',
         '🚣',
         '🏊',
         '⛹',
         '🏋',
         '🚴',
         '👫',
         '💪',
         '👈',
         '👉',
         '👉',
         '👆',
         '🖕',
         '👇',
         '🖖',
         '🤘',
         '🖐',
         '👌',
         '👍',
         '👎',
         '✊',
         '👊',
         '👏',
         '🙌',
         '🙏',
         '🐵',
         '🐶',
         '🐇',
         '🐥',
         '🐸',
         '🐌',
         '🐛',
         '🐜',
         '🐝',
         '🍉',
         '🍄',
         '🍔',
         '🍤',
         '🍨',
         '🍪',
         '🎂',
         '🍰',
         '🍾',
         '🍷',
         '🍸',
         '🍺',
         '🌍',
         '🚑',
         '⏰',
         '🌙',
         '🌝',
         '🌞',
         '⭐',
         '🌟',
         '🌠',
         '🌨',
         '🌩',
         '⛄',
         '🔥',
         '🎄',
         '🎈',
         '🎉',
         '🎊',
         '🎁',
         '🎗',
         '🏀',
         '🏈',
         '🎲',
         '🔇',
         '🔈',
         '📣',
         '🔔',
         '🎵',
         '🎷',
         '💰',
         '🖊',
         '📅',
         '✅',
         '❎',
         '💯'
      ]
   },
   embedded: {
      icon: Eye,
      className: undefined,
      component: undefined,
      popupClassName: undefined,
      embedCallback: undefined,
      defaultSize: {
         height: 'auto',
         width: 'auto'
      }
   },
   image: {
      icon: Image,
      className: undefined,
      component: undefined,
      popupClassName: undefined,
      urlEnabled: true,
      uploadEnabled: true,
      alignmentEnabled: true,
      uploadCallback: undefined,
      previewImage: false,
      inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
      alt: { present: false, mandatory: false },
      defaultSize: {
         height: 'auto',
         width: 'auto'
      }
   },
   remove: { icon: Eraser, className: undefined, component: undefined },
   history: {
      inDropdown: false,
      className: undefined,
      component: undefined,
      dropdownClassName: undefined,
      options: ['undo', 'redo'],
      undo: { icon: Undo, className: undefined },
      redo: { icon: Redo, className: undefined }
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
