/** @type {import('next').NextConfig} */



const withPWA = require('next-pwa');

module.exports = withPWA({
  pwa: {
    dest: 'public',
    register: true,
    mode: 'production',
    disable: false,
  },
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
});




