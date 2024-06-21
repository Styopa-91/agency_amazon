import React, {ReactNode} from "react";
import {useLocation} from "react-router-dom";

import Header from "./Header";
import {Toaster} from "sonner";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className={"flex flex-col min-h-screen w-full gap-y-1 bg-seashell px-[20px] md:px-[40px] lg:px-[64px]"}>
      <Header />
      <div
        className={`flex-1 flex-col gap-6 ${isHomePage ? "w-full" : "mx-auto w-full"}`}>
        {children}
        <Toaster
            className="absolute min-w-60 w-full max-w-72 top-1/3 font-bold font-sans text-2xl"
            richColors
        />
      </div>
    </div>
  );
};

export default Layout;
