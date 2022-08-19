/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'placeimg.com',
      'api.lorem.space', 
      'img.remediosdigitales.com',
      'encrypted-tbn0.gstatic.com',
      'th.bing.com'
    ],
  }
  // env: {
  //   customKey: 'customValue',
  // },
  // basePath: '/dist',
  // compress: true,
  // async redirects() {
  //   return [
  //     {
  //       source: '/hello',
  //       destination: 'https://github.com/JulianMolina972',
  //       permanent: true,
  //     }
  //   ]
  // }
}

module.exports = nextConfig
