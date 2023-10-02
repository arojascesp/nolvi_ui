import React from "react";

import Navbar from "../Header/Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex-1">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
