'use client'

import { AnimatePresence, motion, MotionProps } from 'framer-motion'
import { useEffect, useState } from 'react'

interface WordRotateProps {
   words: string[]
   duration?: number
   framerProps?: MotionProps
   className?: string
}

export default function WordRotate({
   words,
   duration = 2500,
   framerProps = {
      initial: { opacity: 0, y: -20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 20 },
      transition: { duration: 0.3, ease: 'easeInOut' }
   },
   className
}: WordRotateProps) {
   const [index, setIndex] = useState(0)
   const [isExiting, setIsExiting] = useState(false)

   useEffect(() => {
      const interval = setInterval(() => {
         setIsExiting(true)
         setTimeout(() => {
            setIndex((prevIndex) => (prevIndex + 1) % words.length)
            setIsExiting(false)
         }, 300)
      }, duration)

      return () => clearInterval(interval)
   }, [words, duration])

   const currentText = words[index]
   const emoji = currentText.match(/^\S+/)?.[0] || ''
   const text = currentText.replace(/^\S+\s*/, '')

   return (
      <div className="flex items-center gap-2 overflow-hidden">
         <AnimatePresence mode="wait">
            <motion.div
               key={`message-${index}`}
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
