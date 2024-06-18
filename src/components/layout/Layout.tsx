import React from 'react';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex min-h-screen flex-grow flex-col">
        <header className="bg-dark_grey p-8 text-center text-[2rem]">헤더</header>
        {children}
      </div>
    </>
  );
}

export default Layout;
