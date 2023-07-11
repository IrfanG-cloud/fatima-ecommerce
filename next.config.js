/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:["cdn.sanity.io"]
    }
}

// module.exports = nextConfig

module.exports = {
    eslint: {
      // Warning: This allows production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
    },
  }