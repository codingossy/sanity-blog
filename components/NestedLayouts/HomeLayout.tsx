import React from "react";

type HomeLayoutProps = {
  children: React.ReactNode;
};

function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <>
      {children}
    </>
  );
}

export default HomeLayout;
