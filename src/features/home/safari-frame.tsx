import React from 'react'

const SafariFrame: React.FC<
   React.SVGProps<SVGSVGElement> & {
      children?: React.ReactNode
      url?: string
   }
> = ({ children, url = 'example.com', ...props }) => {
   return (
      <div
         className="relative mx-auto w-full max-w-[1380px]"
         style={{ aspectRatio: '1380 / 1074' }}
      >
         <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 1380 1074"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
         >
            <g filter="url(#filter0_dd_26_911)">
               <g clipPath="url(#clip0_26_911)">
                  <rect
                     x={50}
                     y={40}
                     width={1280}
                     height={974}
                     rx={10}
                     fill="#fff"
                  />
                  <path fill="#fff" d="M50 93H1330V912H50z" />
                  <g
                     clipPath="url(#clip1_26_911)"
                     className="overflow-x-hidden overflow-y-scroll"
                  >
                     <path
                        transform="translate(50 93)"
                        fill="#FDFAF6"
                        d="M0 0H1280V921H0z"
                     />
                     <g filter="url(#filter1_f_26_911)">
                        <circle
                           cx={1427}
                           cy={665}
                           r={481}
                           fill="url(#paint0_linear_26_911)"
                           fillOpacity={0.25}
                        />
                     </g>
                  </g>
                  <g filter="url(#filter2_di_26_911)">
                     <path
                        d="M50 50c0-5.523 4.477-10 10-10h1260c5.52 0 10 4.477 10 10v43H50V50z"
                        fill="#fff"
                     />
                     <path
                        d="M50 93h1280"
                        stroke="#fff"
                        strokeWidth="0.5"
                        strokeLinecap="butt"
                        strokeOpacity={0.2}
                     />
                     <g clipPath="url(#clip2_26_911)" fill="#737373">
                        <path d="M1178.5 74.474c4.63 0 8.47-3.844 8.47-8.467 0-4.632-3.85-8.467-8.48-8.467-4.62 0-8.46 3.835-8.46 8.467 0 4.623 3.85 8.467 8.47 8.467zm0-1.412a7.023 7.023 0 01-7.05-7.055 7.014 7.014 0 017.04-7.056c3.92 0 7.06 3.138 7.07 7.056a7.031 7.031 0 01-7.06 7.055zm0-11.28c-.36 0-.62.257-.62.622v4.15l.06 1.752-.83-.996-.98-.996a.659.659 0 00-.44-.183c-.34 0-.6.266-.6.598 0 .174.05.324.16.432l2.77 2.764c.16.166.31.232.48.232.18 0 .33-.075.49-.232l2.76-2.764a.6.6 0 00-.43-1.03c-.18 0-.33.067-.44.183l-.98.996-.84 1.004.06-1.76v-4.15c0-.365-.25-.622-.62-.622zM1219.5 68.265c.36 0 .66-.3.66-.648v-8.525l-.05-1.245.56.59 1.25 1.344c.12.133.29.2.45.2.35 0 .61-.25.61-.59a.595.595 0 00-.19-.431l-2.81-2.707c-.16-.166-.31-.224-.48-.224-.17 0-.32.058-.48.224l-2.81 2.706c-.12.125-.2.258-.2.432 0 .34.26.59.6.59.17 0 .34-.067.46-.2l1.26-1.344.56-.59-.05 1.245v8.525c0 .349.3.648.66.648zm-4.76 6.5h9.52c1.73 0 2.6-.864 2.6-2.574v-8.284c0-1.71-.87-2.573-2.6-2.573h-2.32v1.336h2.29c.82 0 1.3.448 1.3 1.311v8.135c0 .864-.48 1.312-1.3 1.312h-9.48c-.83 0-1.28-.448-1.28-1.312v-8.135c0-.863.45-1.311 1.28-1.311h2.3v-1.337h-2.31c-1.74 0-2.61.864-2.61 2.574v8.284c0 1.71.87 2.573 2.61 2.573zM1260.5 73.004c.41 0 .75-.323.75-.722v-5.52h5.36c.4 0 .74-.34.74-.747a.746.746 0 00-.74-.739h-5.36v-5.528c0-.398-.34-.722-.75-.722a.73.73 0 00-.74.722v5.528h-5.37c-.4 0-.74.332-.74.74 0 .406.34.746.74.746h5.37v5.52c0 .399.33.722.74.722zM1295.32 70.871h1.42v1.27c0 1.71.87 2.573 2.61 2.573h8.33c1.73 0 2.6-.863 2.6-2.573v-8.4c0-1.71-.87-2.574-2.6-2.574h-1.42v-1.27c0-1.71-.88-2.573-2.6-2.573h-8.34c-1.74 0-2.6.864-2.6 2.574v8.4c0 1.71.86 2.573 2.6 2.573zm.02-1.336c-.83 0-1.29-.449-1.29-1.312v-8.25c0-.864.46-1.312 1.29-1.312h8.29c.83 0 1.29.448 1.29 1.311v1.195h-5.57c-1.74 0-2.61.855-2.61 2.574v5.794h-1.4zm4.03 3.843c-.83 0-1.29-.448-1.29-1.312v-8.25c0-.864.46-1.312 1.29-1.312h8.29c.82 0 1.29.448 1.29 1.311v8.251c0 .864-.47 1.312-1.29 1.312h-8.29z" />
                     </g>
                     <g clipPath="url(#clip3_26_911)">
                        <path
                           d="M203.264 72.988l-6.582-6.425a.774.774 0 01-.241-.556c0-.216.091-.424.249-.556l6.574-6.433a.746.746 0 01.54-.224c.431 0 .755.332.755.763 0 .2-.083.399-.216.54l-6.043 5.91 6.043 5.91a.787.787 0 01.216.54.738.738 0 01-.755.755.746.746 0 01-.54-.224z"
                           fill="#737373"
                        />
                        <path
                           d="M230.196 73.22a.746.746 0 00.54-.224l6.582-6.433a.774.774 0 00.241-.556.734.734 0 00-.241-.556l-6.574-6.425a.752.752 0 00-.548-.233.745.745 0 00-.755.764c0 .2.083.399.216.54l6.043 5.91-6.043 5.91a.787.787 0 00-.216.54c0 .431.324.763.755.763z"
                           fill="#BFBFBF"
                        />
                     </g>
                     <path
                        d="M151.32 73.66h14.36c1.743 0 2.607-.863 2.607-2.573V60.952c0-1.71-.864-2.574-2.607-2.574h-14.36c-1.735 0-2.607.855-2.607 2.574v10.135c0 1.718.872 2.573 2.607 2.573zm.016-1.336c-.83 0-1.286-.44-1.286-1.303V61.017c0-.863.456-1.303 1.286-1.303h3.703v12.609h-3.703zm14.328-12.61c.821 0 1.286.44 1.286 1.304V71.02c0 .864-.465 1.304-1.286 1.304h-9.322v-12.61h9.322zm-12.227 3.08a.483.483 0 00.473-.464.477.477 0 00-.473-.465h-1.777a.482.482 0 00-.473.465c0 .24.224.464.473.464h1.777zm0 2.15a.484.484 0 00.473-.473.47.47 0 00-.473-.456h-1.777a.475.475 0 00-.473.456.49.49 0 00.473.473h1.777zm0 2.142a.47.47 0 00.473-.457.477.477 0 00-.473-.464h-1.777a.482.482 0 00-.473.464c0 .25.224.457.473.457h1.777z"
                        fill="#737373"
                     />
                     <g filter="url(#filter3_i_26_911)">
                        <path
                           fillRule="evenodd"
                           clipRule="evenodd"
                           d="M77 72a6 6 0 100-12 6 6 0 000 12z"
                           fill="#EE6A5F"
                        />
                     </g>
                     <path
                        d="M82.75 66a5.75 5.75 0 11-11.5 0 5.75 5.75 0 0111.5 0z"
                        stroke="#CE5347"
                        strokeWidth={0.5}
                     />
                     <g filter="url(#filter4_i_26_911)">
                        <path
                           fillRule="evenodd"
                           clipRule="evenodd"
                           d="M97 72a6 6 0 100-12 6 6 0 000 12z"
                           fill="#F5BD4F"
                        />
                     </g>
                     <path
                        d="M102.75 66a5.75 5.75 0 11-11.5 0 5.75 5.75 0 0111.5 0z"
                        stroke="#D6A243"
                        strokeWidth={0.5}
                     />
                     <g filter="url(#filter5_i_26_911)">
                        <path
                           fillRule="evenodd"
                           clipRule="evenodd"
                           d="M117 72a6 6 0 100-12 6 6 0 000 12z"
                           fill="#61C454"
                        />
                     </g>
                     <path
                        d="M122.75 66a5.75 5.75 0 11-11.5 0 5.75 5.75 0 0111.5 0z"
                        stroke="#58A942"
                        strokeWidth={0.5}
                     />
                     <g clipPath="url(#clip4_26_911)">
                        <path
                           d="M406.5 74.615c.133 0 .349-.05.556-.166 4.723-2.648 6.342-3.769 6.342-6.799V61.3c0-.871-.374-1.145-1.079-1.444-.98-.407-4.142-1.544-5.122-1.884a2.244 2.244 0 00-.697-.125c-.232 0-.473.067-.689.125-.979.282-4.15 1.486-5.13 1.884-.697.29-1.079.573-1.079 1.444v6.35c0 3.03 1.627 4.142 6.342 6.799.216.116.423.166.556.166zm.332-15.357c1.253.498 3.686 1.378 4.972 1.818.224.083.274.2.274.482v5.785c0 2.565-1.228 3.238-5.063 5.57-.241.15-.374.191-.507.2v-13.93c.083 0 .191.026.324.075z"
                           fill="#737373"
                        />
                        <rect
                           x={432}
                           y={52}
                           width={516}
                           height={28}
                           rx={6}
                           fill="#000"
                           fillOpacity={0.05}
                        />
                        <text
                           x={648}
                           y={71}
                           fill="#4C4C4C"
                           fontSize={13}
                           fontFamily="system-ui"
                        >
                           {url}
                        </text>
                        <g clipPath="url(#clip5_26_911)">
                           <path
                              d="M648.211 71.716h5.578c.756 0 1.125-.375 1.125-1.195V66.22c0-.739-.305-1.12-.932-1.184V63.56c0-2.21-1.447-3.276-2.982-3.276-1.535 0-2.982 1.067-2.982 3.276v1.505c-.575.088-.932.463-.932 1.155v4.3c0 .82.369 1.196 1.125 1.196zm.75-8.28c0-1.47.943-2.25 2.039-2.25s2.039.78 2.039 2.25v1.594l-4.078.006v-1.6z"
                              fill="#9E9E9E"
                           />
                           <text
                              x={648}
                              y={71}
                              fill="#4C4C4C"
                              fontSize={13}
                              fontFamily="system-ui"
                           >
                              {url}
                           </text>
                        </g>
                        <path
                           d="M936.283 65.615a.44.44 0 00.34-.134l2.414-2.426a.455.455 0 00.147-.352.501.501 0 00-.147-.351l-2.414-2.45a.433.433 0 00-.34-.14.465.465 0 00-.463.48c0 .123.047.24.129.334l1.565 1.535a5.88 5.88 0 00-1.014-.093 5.162 5.162 0 00-5.18 5.173 5.168 5.168 0 005.18 5.186 5.163 5.163 0 005.174-5.186.467.467 0 00-.486-.486c-.276 0-.458.205-.458.486a4.22 4.22 0 01-4.23 4.243 4.224 4.224 0 01-4.236-4.243c0-2.35 1.886-4.23 4.236-4.23a5.8 5.8 0 011.207.111l-1.752 1.74a.484.484 0 00-.135.335c0 .269.2.468.463.468z"
                           fill="#797979"
                        />
                     </g>
                  </g>
               </g>
            </g>
            <defs>
               <filter
                  id="filter0_dd_26_911"
                  x={0}
                  y={0}
                  width={1380}
                  height={1074}
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
               >
                  <feFlood floodOpacity={0} result="BackgroundImageFix" />
                  <feColorMatrix
                     in="SourceAlpha"
                     values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                     result="hardAlpha"
                  />
                  <feOffset dy={10} />
                  <feGaussianBlur stdDeviation={25} />
                  <feColorMatrix values="0 0 0 0 0.823529 0 0 0 0 0.356863 0 0 0 0 0.709804 0 0 0 0.16 0" />
                  <feBlend
                     in2="BackgroundImageFix"
                     result="effect1_dropShadow_26_911"
                  />
                  <feColorMatrix
                     in="SourceAlpha"
                     values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                     result="hardAlpha"
                  />
                  <feOffset dy={20} />
                  <feGaussianBlur stdDeviation={15} />
                  <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend
                     in2="effect1_dropShadow_26_911"
                     result="effect2_dropShadow_26_911"
                  />
                  <feBlend
                     in="SourceGraphic"
                     in2="effect2_dropShadow_26_911"
                     result="shape"
                  />
               </filter>
               <filter
                  id="filter1_f_26_911"
                  x={746}
                  y={-16}
                  width={1362}
                  height={1362}
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
               >
                  <feFlood floodOpacity={0} result="BackgroundImageFix" />
                  <feBlend
                     in="SourceGraphic"
                     in2="BackgroundImageFix"
                     result="shape"
                  />
                  <feGaussianBlur
                     stdDeviation={100}
                     result="effect1_foregroundBlur_26_911"
                  />
               </filter>
               <filter
                  id="filter2_di_26_911"
                  x={50}
                  y={40}
                  width={1280}
                  height={53.5}
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
               >
                  <feFlood floodOpacity={0} result="BackgroundImageFix" />
                  <feColorMatrix
                     in="SourceAlpha"
                     values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                     result="hardAlpha"
                  />
                  <feOffset dy={0.5} />
                  <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                  <feBlend
                     in2="BackgroundImageFix"
                     result="effect1_dropShadow_26_911"
                  />
                  <feBlend
                     in="SourceGraphic"
                     in2="effect1_dropShadow_26_911"
                     result="shape"
                  />
                  <feColorMatrix
                     in="SourceAlpha"
                     values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                     result="hardAlpha"
                  />
                  <feOffset dy={-0.5} />
                  <feComposite
                     in2="hardAlpha"
                     operator="arithmetic"
                     k2={-1}
                     k3={1}
                  />
                  <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
                  <feBlend in2="shape" result="effect2_innerShadow_26_911" />
               </filter>
               <filter
                  id="filter3_i_26_911"
                  x={71}
                  y={60}
                  width={12}
                  height={12}
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
               >
                  <feFlood floodOpacity={0} result="BackgroundImageFix" />
                  <feBlend
                     in="SourceGraphic"
                     in2="BackgroundImageFix"
                     result="shape"
                  />
                  <feColorMatrix
                     in="SourceAlpha"
                     values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                     result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation={3} />
                  <feComposite
                     in2="hardAlpha"
                     operator="arithmetic"
                     k2={-1}
                     k3={1}
                  />
                  <feColorMatrix values="0 0 0 0 0.92549 0 0 0 0 0.427451 0 0 0 0 0.384314 0 0 0 1 0" />
                  <feBlend in2="shape" result="effect1_innerShadow_26_911" />
               </filter>
               <filter
                  id="filter4_i_26_911"
                  x={91}
                  y={60}
                  width={12}
                  height={12}
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
               >
                  <feFlood floodOpacity={0} result="BackgroundImageFix" />
                  <feBlend
                     in="SourceGraphic"
                     in2="BackgroundImageFix"
                     result="shape"
                  />
                  <feColorMatrix
                     in="SourceAlpha"
                     values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                     result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation={3} />
                  <feComposite
                     in2="hardAlpha"
                     operator="arithmetic"
                     k2={-1}
                     k3={1}
                  />
                  <feColorMatrix values="0 0 0 0 0.960784 0 0 0 0 0.768627 0 0 0 0 0.317647 0 0 0 1 0" />
                  <feBlend in2="shape" result="effect1_innerShadow_26_911" />
               </filter>
               <filter
                  id="filter5_i_26_911"
                  x={111}
                  y={60}
                  width={12}
                  height={12}
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
               >
                  <feFlood floodOpacity={0} result="BackgroundImageFix" />
                  <feBlend
                     in="SourceGraphic"
                     in2="BackgroundImageFix"
                     result="shape"
                  />
                  <feColorMatrix
                     in="SourceAlpha"
                     values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                     result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation={3} />
                  <feComposite
                     in2="hardAlpha"
                     operator="arithmetic"
                     k2={-1}
                     k3={1}
                  />
                  <feColorMatrix values="0 0 0 0 0.407843 0 0 0 0 0.8 0 0 0 0 0.345098 0 0 0 1 0" />
                  <feBlend in2="shape" result="effect1_innerShadow_26_911" />
               </filter>
               <linearGradient
                  id="paint0_linear_26_911"
                  x1={705.5}
                  y1={-1210.9}
                  x2={1559.37}
                  y2={-1343.19}
                  gradientUnits="userSpaceOnUse"
               >
                  <stop stopColor="#CEB6FF" />
                  <stop offset={0.5} stopColor="#FF95C6" />
                  <stop offset={1} stopColor="#FFC78C" />
               </linearGradient>
               <clipPath id="clip0_26_911">
                  <rect
                     x={50}
                     y={40}
                     width={1280}
                     height={974}
                     rx={10}
                     fill="#fff"
                  />
               </clipPath>
               <clipPath id="clip1_26_911">
                  <path
                     fill="#fff"
                     transform="translate(50 93)"
                     d="M0 0H1280V921H0z"
                  />
               </clipPath>
               <clipPath id="clip2_26_911">
                  <path
                     fill="#fff"
                     transform="translate(1162 52)"
                     d="M0 0H156V28H0z"
                  />
               </clipPath>
               <clipPath id="clip3_26_911">
                  <path
                     fill="#fff"
                     transform="translate(184 52)"
                     d="M0 0H66V28H0z"
                  />
               </clipPath>
               <clipPath id="clip4_26_911">
                  <path
                     fill="#fff"
                     transform="translate(390 52)"
                     d="M0 0H600V28H0z"
                  />
               </clipPath>
               <clipPath id="clip5_26_911">
                  <path fill="#fff" d="M647.086 58H732.9141V74H647.086z" />
               </clipPath>
            </defs>
         </svg>
         <div
            className="absolute overflow-y-auto overflow-x-hidden"
            style={{
               top: '8.658%',
               left: '3.623%',
               width: '92.753%',
               height: '85.739%',
               borderRadius: '0 0 10px 10px'
            }}
         >
            <div className="relative">{children}</div>
         </div>
      </div>
   )
}

export { SafariFrame }
