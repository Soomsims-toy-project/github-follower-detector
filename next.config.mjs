/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 외부 예시 이미지 임시 설정
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

export default nextConfig;
