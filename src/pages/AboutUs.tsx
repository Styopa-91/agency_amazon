import PageTitle from "../components/PageTitle.tsx";

const AboutUsPage = () => {
  return (
      <div className="flex h-full w-auto flex-col pt-0 md:pt-3 lg:pt-5 gap-3 lg:gap-6">
          <PageTitle>About us</PageTitle>
          <p className="text-gray-700 text-xs sm:text-sm lg:text-base text-justify">Amazon Agency provides many metrics on dashboards</p>
      </div>
  );
};

export default AboutUsPage;
