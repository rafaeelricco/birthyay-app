'use client'

import { PanelLeftIcon } from '@/components/icons/header'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import {
   Tooltip,
   TooltipContent,
   TooltipProvider,
   TooltipTrigger
} from '@/components/ui/tooltip'
import { Logo } from '@/icons/logo'
import { cn } from '@/lib/utils'
import { general_routes } from '@/routes/general'
import { DictionaryProps } from '@/types/dictionary'
import { LINKS } from '@/utils/links'
import { Github } from 'lucide-react'

import Link from 'next/link'
import React from 'react'

const Header: React.FC<DictionaryProps> = ({
   dictionary,
   className
}: HeaderProps) => {
   return (
      <React.Fragment>
         <nav className={cn('w-full py-6', className)}>
            <div className="container flex items-center justify-between">
               <Logo className="w-28 antialiased" />
               <div className="grid items-center gap-12">
                  <div className="hidden grid-flow-col items-center gap-12 lg:grid">
                     {items.map((item, index) => (
                        <ul className="w-full" key={item.id + index}>
                           <li>
                              <TooltipProvider>
                                 <Tooltip>
                                    <TooltipTrigger asChild>
                                       <div>
                                          {item.disabled ? (
                                             <React.Fragment>
                                                <p className="font-sf-pro-display text-black-500 flex-shrink cursor-default opacity-50">
                                                   {item.label}
                                                </p>
                                             </React.Fragment>
                                          ) : (
                                             <Link
                                                href={item.link}
                                                className="font-sf-pro-display text-black-500 hover:text-black-500/80 flex-shrink cursor-pointer hover:underline"
                                                target={
                                                   item.external
                                                      ? '_blank'
                                                      : '_self'
                                                }
                                                rel={
                                                   item.external
                                                      ? 'noreferrer'
                                                      : undefined
                                                }
                                             >
                                                {item.label}
                                             </Link>
                                          )}
                                       </div>
                                    </TooltipTrigger>
                                    <TooltipContent side="bottom">
                                       <p className="font-sf-pro-display text-base">
                                          {item.tooltip}
                                       </p>
                                    </TooltipContent>
                                 </Tooltip>
                              </TooltipProvider>
                           </li>
                        </ul>
                     ))}
                     <Button
                        variant={'ghost'}
                        size={'icon'}
                        onClick={() => window.open(LINKS.GITHUB, '_blank')}
                     >
                        <Github className="size-5" />
                     </Button>
                  </div>
               </div>
               <div className="lg:hidden">
                  <Sheet>
                     <SheetTrigger asChild>
                        <Button
                           size="icon"
                           variant="outline"
                           className="group rounded-lg border border-gray-400 transition-all duration-300 hover:border-gray-950 active:scale-95"
                        >
                           <PanelLeftIcon className="h-5 w-5 text-gray-400 transition-all duration-300 group-hover:text-gray-950" />
                        </Button>
                     </SheetTrigger>
                     <SheetContent side="right" className="sm:max-w-xs">
                        <nav className="grid gap-6 text-lg font-medium">
                           <Link
                              href="#"
                              className="bg-primary text-primary-foreground group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full text-lg font-semibold md:text-base"
                              prefetch={false}
                           >
                              <span className="sr-only">
                                 © 2024 Ricco Ltda. All rights reserved.
                              </span>
                           </Link>
                           {items.map((item, index) => (
                              <Link
                                 key={item.id + index}
                                 href={item.link}
                                 className="text-muted-foreground hover:text-foreground flex items-center gap-4 px-2.5 hover:underline"
                                 prefetch={false}
                              >
                                 {item.label}
                              </Link>
                           ))}
                        </nav>
                     </SheetContent>
                  </Sheet>
               </div>
            </div>
         </nav>
      </React.Fragment>
   )
}

const items = [
   {
      id: 1,
      label: 'Início',
      tooltip: 'Página inicial do site.',
      disabled: false,
      link: general_routes.home,
      external: false
   },
   {
      id: 2,
      label: 'Criar cartinha digital',
      tooltip: 'Crie uma cartinha digital personalizada.',
      disabled: true,
      link: '/countdown',
      external: false
   }
]

type HeaderProps = {
   className?: string
   dictionary: DictionaryProps['dictionary']
}

export { Header }
