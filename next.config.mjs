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
   },
   reactStrictMode: false
}

export default nextConfig
