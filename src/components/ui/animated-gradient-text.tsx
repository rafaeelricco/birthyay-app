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
            'dark:bg-black/40 group relative mx-auto flex max-w-fit touch-none select-none flex-row items-center justify-center rounded-2xl bg-white/40 px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#8fdfff1f] backdrop-blur-sm transition-shadow duration-500 ease-out [--bg-size:300%] hover:shadow-[inset_0_-5px_10px_#8fdfff3f]',
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
