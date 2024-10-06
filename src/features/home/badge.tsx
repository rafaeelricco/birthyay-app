import React from 'react'
const Badge: React.FC = () => {
   return (
      <div className="relative inline-flex">
         <GradientBadgeContainer className="absolute inset-0" />
         <p className="from-gradient-start via-gradient-middle to-gradient-end font-inter relative z-10 bg-gradient-to-tl bg-clip-text px-4 py-1 text-sm font-medium text-transparent">
            E aí, felizardo(a)! <span className="text-black-primary">🎉</span>
         </p>
      </div>
   )
}

const GradientBadgeContainer: React.FC<React.SVGProps<SVGSVGElement>> = (props: React.SVGProps<SVGSVGElement>) => {
   return (
      <svg
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         preserveAspectRatio="none"
         width="100%"
         height="100%"
         {...props}
      >
         <rect width="100%" height="100%" rx="16" ry="16" fill="url(#paint0_linear_24_905)" />
         <defs>
            <linearGradient
               id="paint0_linear_24_905"
               x1="0%"
               y1="0%"
               x2="100%"
               y2="100%"
               gradientUnits="userSpaceOnUse"
            >
               <stop stopColor="#CAB7FF" stopOpacity={0.2} />
               <stop offset={0.5} stopColor="#FF9BC5" stopOpacity={0.2} />
               <stop offset={1} stopColor="#FFCA95" stopOpacity={0.2} />
            </linearGradient>
         </defs>
      </svg>
   )
}

export { Badge }
