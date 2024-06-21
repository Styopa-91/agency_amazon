import { ReactNode } from "react";

interface PageTitleProps {
  children: ReactNode;
}

const PageTitle: React.FC<PageTitleProps> = ({ children }) => {
  return (
    <div className="flex items-start justify-start">
      <h1 className="text-lg md:text-xl lg:text-2xl font-bold leading-relaxed text-black">{children}</h1>
    </div>
  );
};

export default PageTitle;
