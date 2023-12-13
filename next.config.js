const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "default",
    domains: ["localhost", "lh3.googleusercontent.com"],
  },
  i18n,
};

module.exports = nextConfig;
