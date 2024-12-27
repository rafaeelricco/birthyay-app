/** @type {import('next').NextConfig} */
const nextConfig = {
   async redirects() {
      return [
         {
            source: '/pt',
            destination: '/home',
            permanent: true
         }
      ]
   }
}

export default nextConfig
