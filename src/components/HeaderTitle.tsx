import {Link} from "react-router-dom";

const HeaderTitle = () => {
  return (
    <Link to="/">
      <div className="flex items-center justify-start text-nowrap">
        <div className="flex flex-col text-start">
          <div className="text-base md:text-lg xl:text-xl text-black">
            Amazon Agency
          </div>
          <div className="text-xs font-thin text-gray">
            Test task
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HeaderTitle;
