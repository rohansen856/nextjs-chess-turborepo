/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["@rcsen/database"],
  },
}

export default nextConfig
