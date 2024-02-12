import React from "react";

import Header from "../Header/Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="h-screen bg-[#a8ab7b]">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
