/** @type {import('next').NextConfig} */
const nextConfig = {
   transpilePackages: ['jodit-react-ts', 'jodit'],
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
