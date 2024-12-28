import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

export default function AnimatedGradientText({
   children,
   className
}: {
   children: ReactNode
   className?: string
}) {
   return (
      <div
         className={cn(
            'group relative mx-auto flex max-w-fit touch-none select-none flex-row items-center justify-center rounded-full px-4 py-1.5 text-sm font-medium backdrop-blur-sm transition-shadow duration-500 ease-out [--bg-size:300%]',
            'before:absolute before:inset-0 before:-z-10 before:animate-gradient before:rounded-full before:bg-gradient-to-r before:from-[#ffaa40] before:via-[#9c40ff] before:to-[#ffaa40] before:bg-[length:var(--bg-size)_100%] before:opacity-10',
            'after:absolute after:inset-[1px] after:-z-10 after:rounded-full after:bg-[linear-gradient(103.91deg,#CAB7FF_-54.06%_0.2,#FF9BC5_50%_0.2,#FFCA95_100%_0.2)] after:backdrop-blur-sm',
            'dark:bg-black/5 bg-white/5',
            className
         )}
      >
         <div
            className={`absolute inset-0 block h-full w-full animate-gradient bg-gradient-to-r from-[#8a30e3]/50 via-[#ee6ba1]/50 to-[#eac893]/50 bg-[length:var(--bg-size)_100%] p-[1px] [border-radius:inherit] ![mask-composite:subtract] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]`}
         />

         {children}
      </div>
   )
}
