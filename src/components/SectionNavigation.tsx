import React, {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";

interface SectionButtonProps {
  url: string;
  text: string;
}

export interface Page {
  title: string;
  url: string;
}

const SectionButton: React.FC<SectionButtonProps> = ({ text, url}) => {
  const [tab, setTab] = useState<boolean>(false);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      setTab(false);
    } else if (location.pathname.startsWith(url)) {
      if (url!=="/") {
        setTab(true)
      }
    } else setTab(false)
    }, [location])

  return (
    <>
      <Link to={url} className="box-border min-w-[6rem] text-center flex-grow flex-shrink border border-[#e7e7e7] border-solid
         rounded-xl px-1 py-2 shadow-md bg-white">
        <button className={`flex font-sans text-xs sm:text-sm font-normal leading-5 justify-center items-center w-full 
        h-full hover:g-indigo hover:bg-opacity-10 hover:text-indigo ${tab ? "g-indigo bg-opacity-10 text-indigo" : "border-0 border-solid"}`}>
          <p>{text}</p>
        </button>
      </Link>
    </>
  );
};

interface SectionNavigationProps {
  pages: Page[];
  fromBottom?: boolean;
}

const SectionNavigation: React.FC<SectionNavigationProps> = ({ pages}) => {
  return (
    <div className="grid grid-cols-1 w-full md:grid-cols-4 gap-1 text-nowrap lg:gap-4">
      {pages?.map((page, index: number) => (
      <SectionButton
          key={index}
          url={page.url}
          text={page.title}
        />
      ))}
    </div>
  );
};

export default SectionNavigation;
