'use client'

import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue
} from '@/components/ui/select'
import { cn } from '@/lib/utils'
import { DictionaryProps } from '@/types/dictionary'
import { Github, Linkedin, Youtube } from 'lucide-react'

import React from 'react'

const Footer: React.FC<DictionaryProps> = ({ className }: FooterProps) => {
   return (
      <React.Fragment>
         <nav
            className={cn(
               'absolute bottom-0 z-20 mx-auto min-h-[104px] w-screen py-8',
               className
            )}
         >
            <div className="container grid items-center justify-center space-y-4 lg:flex lg:justify-between lg:space-y-0">
               <div className="grid grid-flow-col gap-12">
                  <div className="grid grid-flow-col content-center items-center justify-center gap-4 lg:content-normal lg:justify-start">
                     <Github className="text-white-900 hover:text-black-500 h-6 w-6 cursor-pointer antialiased" />
                     <Linkedin className="text-white-900 hover:text-black-500 h-6 w-6 cursor-pointer antialiased" />
                     <Youtube className="text-white-900 hover:text-black-500 h-6 w-6 cursor-pointer antialiased" />
                  </div>
                  <div className="hidden lg:block">
                     <Select>
                        <SelectTrigger className="min-w-[175px]">
                           <SelectValue
                              placeholder={
                                 <React.Fragment>
                                    <div>
                                       <span className="font-sf-pro-display text-white-300 text-sm">
                                          Português (PT-BR)
                                       </span>
                                    </div>
                                 </React.Fragment>
                              }
                           />
                        </SelectTrigger>
                        <SelectContent>
                           <SelectItem value="pt-BR">
                              Português (PT-BR)
                           </SelectItem>
                           <SelectItem value="en-US">
                              English (EN-US)
                           </SelectItem>
                        </SelectContent>
                     </Select>
                  </div>
               </div>
               <div className="">
                  <span className="font-sf-pro-display text-white-900 text-sm">
                     © 2024 Ricco Ltda. All rights reserved.
                  </span>
               </div>
            </div>
         </nav>
      </React.Fragment>
   )
}

type FooterProps = {
   className?: string
   dictionary: DictionaryProps['dictionary']
}

export { Footer }
