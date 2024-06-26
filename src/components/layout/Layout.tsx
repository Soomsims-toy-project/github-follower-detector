import { useRouter } from 'next/navigation';
import React from 'react';

import GithubIcon from '@/assets/svgs/github.svg';

function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  return (
    <div className="flex min-h-screen flex-grow flex-col">
      <header className="flex items-center bg-dark_grey p-8 text-center text-[2rem]">
        <GithubIcon onClick={() => router.push('/')} className="mr-10 h-20 w-20 cursor-pointer" />
        깃허브 팔로우 탐지기
      </header>
      {children}
    </div>

  );
}

export default Layout;
