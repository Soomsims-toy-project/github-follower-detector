import React from 'react';

import GithubIcon from '@/assets/svgs/github.svg';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="flex items-center bg-dark_grey p-8 text-center text-[2rem]">
        <GithubIcon className="h-20 w-20 cursor-pointer mr-10" />
        깃허브 팔로우 탐지기
      </header>
      {children}
    </>
  );
}

export default Layout;
