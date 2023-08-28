/** @type {import('next').NextConfig} */
const nextConfig = { 
  env: {
    api_key: "a0042b9df2mshbabfb0abff4eb65p195822jsn0f7eff79c512",
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
      },
      {
        protocol: 'https',
        hostname: 'yt3.ggpht.com',
      },
      {
        protocol: 'http',
        hostname: 'yt3.ggpht.com',
      },
    
    ],
   
  },}

module.exports = nextConfig
