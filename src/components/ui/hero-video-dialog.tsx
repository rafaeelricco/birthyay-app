'use client'

import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import { Play, XIcon } from 'lucide-react'
import { useState } from 'react'

type AnimationStyle =
   | 'from-bottom'
   | 'from-center'
   | 'from-top'
   | 'from-left'
   | 'from-right'
   | 'fade'
   | 'top-in-bottom-out'
   | 'left-in-right-out'

interface HeroVideoProps {
   animationStyle?: AnimationStyle
   videoSrc: string
   thumbnailSrc: string
   thumbnailAlt?: string
   className?: string
}

const animationVariants = {
   'from-bottom': {
      initial: { y: '100%', opacity: 0 },
      animate: { y: 0, opacity: 1 },
      exit: { y: '100%', opacity: 0 }
   },
   'from-center': {
      initial: { scale: 0.5, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      exit: { scale: 0.5, opacity: 0 }
   },
   'from-top': {
      initial: { y: '-100%', opacity: 0 },
      animate: { y: 0, opacity: 1 },
      exit: { y: '-100%', opacity: 0 }
   },
   'from-left': {
      initial: { x: '-100%', opacity: 0 },
      animate: { x: 0, opacity: 1 },
      exit: { x: '-100%', opacity: 0 }
   },
   'from-right': {
      initial: { x: '100%', opacity: 0 },
      animate: { x: 0, opacity: 1 },
      exit: { x: '100%', opacity: 0 }
   },
   fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 }
   },
   'top-in-bottom-out': {
      initial: { y: '-100%', opacity: 0 },
      animate: { y: 0, opacity: 1 },
      exit: { y: '100%', opacity: 0 }
   },
   'left-in-right-out': {
      initial: { x: '-100%', opacity: 0 },
      animate: { x: 0, opacity: 1 },
      exit: { x: '100%', opacity: 0 }
   }
}

export default function HeroVideoDialog({
   animationStyle = 'from-center',
   videoSrc,
   thumbnailSrc,
   thumbnailAlt = 'Video thumbnail',
   className
}: HeroVideoProps) {
   const [isVideoOpen, setIsVideoOpen] = useState(false)
   const [isVideoLoading, setIsVideoLoading] = useState(true)
   const selectedAnimation = animationVariants[animationStyle]

   return (
      <div className={cn('relative', className)}>
         <div
            className="group relative cursor-pointer"
            onClick={() => setIsVideoOpen(true)}
         >
            <img
               src={thumbnailSrc}
               alt={thumbnailAlt}
               width={1920}
               height={1080}
               className="w-full rounded-md border border-neutral-200 shadow-lg transition-all duration-200 ease-out group-hover:brightness-[0.8] dark:border-neutral-800"
            />
            <div className="absolute inset-0 flex scale-[0.9] items-center justify-center rounded-2xl transition-all duration-200 ease-out group-hover:scale-100">
               <div className="flex size-28 items-center justify-center rounded-full bg-neutral-900/10 backdrop-blur-md dark:bg-neutral-50/10">
                  <div
                     className={`from-primary/30 to-primary relative flex size-20 scale-100 items-center justify-center rounded-full bg-gradient-to-b shadow-md transition-all duration-200 ease-out group-hover:scale-[1.2]`}
                  >
                     <Play
                        className="size-8 scale-100 fill-white text-white transition-transform duration-200 ease-out group-hover:scale-105"
                        style={{
                           filter:
                              'drop-shadow(0 4px 3px rgb(0 0 / 0.07)) 2px 0.06))'
                        }}
                     />
                  </div>
               </div>
            </div>
         </div>
         <AnimatePresence>
            {isVideoOpen && (
               <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onClick={() => setIsVideoOpen(false)}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-50 flex items-center justify-center bg-black-primary/50 backdrop-blur-sm"
               >
                  <motion.div
                     {...selectedAnimation}
                     transition={{
                        type: 'spring',
                        damping: 30,
                        stiffness: 300
                     }}
                     className="relative mx-4 aspect-video w-full max-w-4xl md:mx-0"
                  >
                     <motion.button className="dark:text-black absolute -top-16 right-0 rounded-full bg-neutral-900/50 p-2 text-xl text-white ring-1 backdrop-blur-[2px] dark:bg-neutral-100/50">
                        <XIcon className="size-5" />
                     </motion.button>
                     <div className="relative isolate z-[1] size-full overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-800">
                        <iframe
                           src={videoSrc}
                           className="size-full rounded-2xl"
                           allowFullScreen
                           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                           onLoad={() => setIsVideoLoading(false)}
                        />
                        {isVideoLoading && (
                           <Skeleton className="absolute inset-0 z-[-1] size-full rounded-2xl" />
                        )}
                     </div>
                  </motion.div>
               </motion.div>
            )}
         </AnimatePresence>
      </div>
   )
}
