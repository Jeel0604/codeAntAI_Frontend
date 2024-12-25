import { Repositories } from "../components/Repositories";
import { Sidebar } from "../components/Sidebar";
import { MobileNavbar } from "../components/MobileNavBar";

export const Dashboard = () => {
  return (
    <>
      <div className="bg-gray-100 flex w-screen h-screen flex-col md:flex-row">
        <Sidebar />
        <MobileNavbar />
        <div className="md:w-screen h-fit rounded-lg m-5 p-5 bg-primary border border-gray-200">
          <div className="border-b border-b-gray-200 pb-5 mb-3">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="flex flex-col mb-3">
                <span className="text-2xl">Repositories</span>
                <span className="text-gray-600">33 total repositories</span>
              </div>
              <div className="flex flex-row gap-5 items-center">
                <div className="border border-gray-300 cursor-pointer rounded-lg py-2 px-3 flex flex-row gap-2 items-center">
                  <img className="w-5" src="/assets/icons/reload.png" alt="" />
                  <span className="cursor-pointer">Refresh All</span>
                </div>
                <div className="bg-secondary hover:bg-blue-600 text-primary border cursor-pointer border-gray-300 rounded-lg py-2 px-3 items-center flex flex-row gap-2">
                  <img className="w-4" src="/assets/icons/plus.png" alt="" />
                  <span className="cursor-pointer">Add Repositories</span>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center gap-5 border border-gray-300 px-5 py-2 rounded-md mt-5 md:w-4/12">
              <img className="w-6 h-6" src="/assets/icons/search.png" alt="" />
              <span className="text-gray-700">Search Repositories</span>
            </div>
          </div>

          <Repositories
            name="design-system"
            visibility="public"
            language="React"
            size={7320}
            lastUpdated="1 day"
          />
          <Repositories
            name="codeant-ci-app"
            visibility="private"
            language="Javascript"
            size={5871}
            lastUpdated="2 days"
          />
          <Repositories
            name="analytics-dashboard"
            visibility="private"
            language="Python"
            size={4521}
            lastUpdated="5 days"
          />
          <Repositories
            name="mobile-app"
            visibility="public"
            language="Swift"
            size={3096}
            lastUpdated="3 days"
          />
          <Repositories
            name="e-commerce-platform"
            visibility="private"
            language="Java"
            size={6210}
            lastUpdated="6 days"
          />
          <Repositories
            name="blog-website"
            visibility="public"
            language="HTML/CSS"
            size={1876}
            lastUpdated="4 days"
          />
          <Repositories
            name="social-network"
            visibility="private"
            language="PHP"
            size={5432}
            lastUpdated="7 days"
          />
        </div>
      </div>
    </>
  );
};
