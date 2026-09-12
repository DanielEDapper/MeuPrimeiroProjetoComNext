import { hostname } from "os";

/** @type {import('next').NextConfig} */
const nextConfig = {
images: {
remotePatterns: [
    {
        protocol: 'https',
        hostname: 'unsplash.com', 
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },{
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
      },{ 
        protocol: 'https', 
        hostname: 'encrypted-tbn0.gstatic.com' 
      },{ 
        protocol: 'https', 
        hostname: 'x.com' 
      },{ 
        protocol: 'https', 
        hostname: 'pbs.twimg.com' 
      },{ 
        protocol: 'https', 
        hostname: 'tse4.mm.bing.net' 
      },{ 
        protocol: 'https', 
        hostname: 'plus.unsplash.com' 
      },{ 
        protocol: 'https', 
        hostname: 'www.uol.com.br' 
      },
    ],
    },
};

export default nextConfig;