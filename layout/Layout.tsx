import React from 'react'

interface LayoutProps {
  children: React.ReactElement;
}


const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      {children}
    </>
  )
}

export default Layout