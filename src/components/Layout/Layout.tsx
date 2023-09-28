import * as React from "react";

import Navbar from "../Navbar/Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex-1">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
