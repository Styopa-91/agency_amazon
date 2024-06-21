import SectionNavigation, {Page} from "./SectionNavigation";
import HeaderTitle from "./HeaderTitle";

const TopNavigationBar = () => {

  const pages: Page[] = [
    { title: "Home", url: "/home" },
    { title: "Dashboard", url: "/dashboard" },
    { title: "About us", url: "/aboutUs" },
  ];
  return (
      <div className="flex w-full flex-col gap-1 sm:gap-2 lg:gap-4">
          <div className="flex h-[4.5rem] pt-3 items-center justify-between gap-2 lg:gap-3">
              <HeaderTitle/>
          </div>
          <div className="grid">
              <SectionNavigation pages={pages}/>
          </div>
      </div>
  );
};

export default TopNavigationBar;
