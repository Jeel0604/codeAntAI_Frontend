import Card from "./Card";

export const Sidebar = () => {
  return (
    <>
      <div className="w-[20%] hidden md:flex h-screen bg-primary border-r border-r-gray-200 p-4 flex-col justify-between">
        <div>
          <div className="flex text-3xl cursor-default text-text flex-row items-center gap-2">
            <img
              className="w-10"
              src="/assets/img/codeAntSmallLogo.png"
              alt=""
            />
            <span>CodeAnt AI</span>
          </div>

          <select
            id="dropdown"
            className="w-full mt-10 py-2 px-2 text-lg font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm"
          >
            <option selected value="option1">
              UtkarshDhairyapanwar
            </option>
            <option value="john">John Smith</option>
            <option value="emma">Emma Johnson</option>
            <option value="michael">Michael Brown</option>
            <option value="lisa">Lisa Davis</option>
            <option value="david">David Martinez</option>
          </select>

          <div className="bg-secondary hover:bg-blue-500 cursor-pointer mt-6  font-[500] rounded-lg py-2 px-4 gap-4 items-center flex flex-row text-primary text-lg border border-blue-500">
            <img className="w-6" src="/assets/icons/homewhite.png" alt="" />
            <span>Repositories</span>
          </div>

          <Card image="/assets/icons/code.png" text="AI Code Review" />
          <Card image="/assets/icons/cloud.png" text="Cloud Security" />
          <Card image="/assets/icons/book.png" text="How to use" />
          <Card image="/assets/icons/setting.png" text="Setting" />
        </div>
        <div>
          <Card image="/assets/icons/phone.png" text="Support" />
          <Card image="/assets/icons/logout.png" text="Logout" />
        </div>
      </div>
    </>
  );
};
