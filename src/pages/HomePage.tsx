import PageTitle from "../components/PageTitle.tsx";

const HomePage = () => {
  return (
      <div className="flex h-full w-auto flex-col pt-0 md:pt-3 lg:pt-5 gap-3 lg:gap-6">
          <PageTitle>Home page</PageTitle>
          <p className="text-gray-700 text-xs sm:text-sm lg:text-base text-justify">Amazon Agency homepage</p>
      </div>
  );
};

export default HomePage;
