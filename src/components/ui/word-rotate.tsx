'use client'

import { AnimatePresence, motion, MotionProps } from 'framer-motion'

interface WordRotateProps {
   word: string
   framerProps?: MotionProps
   className?: string
}

export default function WordRotate({
   word,
   framerProps = {
      initial: { opacity: 0, y: -20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 20 },
      transition: { duration: 0.3, ease: 'easeInOut' }
   },
   className
}: WordRotateProps) {
   const emoji = word.match(/^\S+/)?.[0] || ''
   const text = word.replace(/^\S+\s*/, '')

   return (
      <div className="flex items-center gap-2 overflow-hidden">
         <AnimatePresence mode="wait">
            <motion.div
               key={`message-${word}`}
               className="flex items-center gap-2"
               layout
               {...framerProps}
            >
               <span>{emoji}</span>
               <span className={className}>{text}</span>
            </motion.div>
         </AnimatePresence>
      </div>
   )
}
