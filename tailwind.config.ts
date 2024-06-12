  import type { Config } from 'tailwindcss';

  const config: Config = {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        fontFamily: {
          Pretendard: ['Pretendard-Regular'],
        },
        colors: {
          dark_grey: '#252525',
          grey: '#313131',
          light_grey: '#999999',
          blue: '#3285FF',
          light_blue: '#E7FAFE',
          red: '#FF3233',
          light_red: '#FFE7E6',
        },
      },
    },
    plugins: [],
  };
  export default config;
