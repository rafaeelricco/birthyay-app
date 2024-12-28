const LinesSVG: React.FC<React.SVGProps<SVGSVGElement>> = (
   props: React.SVGProps<SVGSVGElement>
) => {
   return (
      <svg
         viewBox="0 0 1920 1441"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         {...props}
      >
         <path
            opacity={0.24}
            d="M1971 1043.44c-207.4 281.71-584.71 532.46-865.29 310.4-282.294-223.41 84.53-717.013 127.56-906.353 43.04-189.34-29.15-419.519-293.554-442.31C249.477-54.323 314.197 737.932-52 1043.44"
            stroke="#EE6BA1"
            strokeWidth={3.10371}
         />
         <path
            opacity={0.24}
            d="M2001 1043.44c-207.4 281.71-584.71 532.46-865.29 310.4-282.294-223.41 84.53-717.013 127.56-906.353 43.04-189.34-29.15-419.519-293.554-442.31C279.477-54.323 344.197 737.932-22 1043.44"
            stroke="#EE6BA1"
            strokeWidth={3.10371}
         />
      </svg>
   )
}

export { LinesSVG }
