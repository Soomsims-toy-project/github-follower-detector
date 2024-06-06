import React from 'react';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="bg-dark_grey p-8 text-center text-[2rem]">헤더</header>
      {children}
    </>
  );
}

export default Layout;
