/** @type {import('next').NextConfig} */
const nextConfig = {
   webpack: (config) => {
      config.module.rules.push({
         test: /\.md$/,
         use: 'raw-loader'
      })
      return config
   },
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
