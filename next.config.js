/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "pbs.twimg.com",
      },
      {
        hostname: "www.stripe.com",
      },
      {
        hostname: "www.google.com",
      },
      {
        hostname: "www.oracle.com",
      },
    ],
  },
};

module.exports = nextConfig;
