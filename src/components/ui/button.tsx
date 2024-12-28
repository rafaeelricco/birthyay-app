import * as React from 'react'

import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'

const buttonVariants = cva(
   'inline-flex items-center justify-center whitespace-nowrap rounded-[6px] text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300',
   {
      variants: {
         variant: {
            default:
               'bg-neutral-900 text-neutral-50 hover:bg-neutral-900/90 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90',
            destructive:
               'bg-red-500 text-neutral-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-neutral-50 dark:hover:bg-red-900/90',
            outline:
               'border border-black-primary text-black-primary bg-transparent hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50',
            secondary:
               'bg-neutral-100 text-neutral-900 hover:bg-neutral-100/80 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-800/80',
            ghost: 'hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-50',
            link: 'text-neutral-900 underline-offset-4 hover:underline dark:text-neutral-50',
            gradient:
               'bg-gradient-to-tl from-gradient-start via-gradient-middle to-gradient-end text-white hover:opacity-90',
            'gradient-animated': 'relative overflow-hidden text-white'
         },
         size: {
            default: 'px-6 py-2.5 min-h-[38px]',
            sm: 'h-9 px-3',
            lg: 'h-11 px-8',
            icon: 'h-10 w-10'
         }
      },
      defaultVariants: {
         variant: 'default',
         size: 'default'
      }
   }
)

export interface ButtonProps
   extends React.ButtonHTMLAttributes<HTMLButtonElement>,
      VariantProps<typeof buttonVariants> {
   asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
   ({ className, variant, size, asChild = false, ...props }, ref) => {
      const Comp = asChild ? Slot : 'button'
      const mouseX = useMotionValue(0)
      const mouseY = useMotionValue(0)
      const gradientSize = 200

      const handleMouseMove = React.useCallback(
         (e: React.MouseEvent<HTMLButtonElement>) => {
            const element = e.currentTarget
            const rect = element.getBoundingClientRect()
            mouseX.set(e.clientX - rect.left)
            mouseY.set(e.clientY - rect.top)
         },
         [mouseX, mouseY]
      )

      if (variant === 'gradient-animated') {
         return (
            <Comp
               className={cn(
                  buttonVariants({ variant, size, className }),
                  'group'
               )}
               ref={ref}
               onMouseMove={handleMouseMove}
               {...props}
            >
               <motion.div
                  className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                     background: useMotionTemplate`
                        radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px,
                           rgba(138, 48, 227, 0.7), 
                           rgba(238, 107, 161, 0.7), 
                           rgba(234, 200, 147, 0.7),
                           transparent 100%
                        )
                     `
                  }}
               />
               <div className="absolute inset-0 bg-gradient-to-tl from-gradient-start via-gradient-middle to-gradient-end" />
               <span className="relative z-20">{props.children}</span>
            </Comp>
         )
      }

      return (
         <Comp
            className={cn(buttonVariants({ variant, size, className }))}
            ref={ref}
            {...props}
         />
      )
   }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
