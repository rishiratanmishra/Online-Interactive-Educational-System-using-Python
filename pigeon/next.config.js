/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'], // Add your localhost domain here

  },
};

module.exports = {
  reactStrictMode: true,
  ...nextConfig,
};
