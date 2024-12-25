import { useState } from "react";
import { LoginOptions } from "./LoginOptions";

export const RightSection = () => {
  const [selected, setSelected] = useState("SAAS");

  return (
    <>
      <div className="bg-[#FAFAFA] w-full xl:w-[50%] p-6 md:p-24 flex flex-col justify-center">
        <div className="bg-primary border border-[#E9EAEB] rounded-lg py-6 px-6 md:px-24 h-screen pb-20">
          <div className="flex flex-col gap-10 items-center w-full pb-10 border-b border-b-gray-200">
            <div className="flex flex-row gap-2 text-2xl items-center">
              <img
                className="w-8"
                src="/assets/img/codeAntSmallLogo.png"
                alt="CodeAnt Logo"
              />
              <span className="text-text">CodeAnt AI</span>
            </div>
            <div className="text-4xl text-text font-bold text-center">
              Welcome to CodeAnt AI
            </div>
            <div className="w-full text-lg bg-[#FAFAFA] font-bold rounded-lg border border-gray-200 flex flex-row justify-center">
              <div
                onClick={() => setSelected("SAAS")}
                className={`w-full flex flex-row justify-center py-3 cursor-pointer ${
                  selected === "SAAS"
                    ? "bg-secondary text-primary rounded-lg"
                    : "bg-[#FAFAFA] rounded-lg text-gray-600"
                }`}
              >
                SAAS
              </div>
              <div
                onClick={() => setSelected("Self Hosted")}
                className={`w-full flex flex-row justify-center py-3 cursor-pointer ${
                  selected === "Self Hosted"
                    ? "bg-secondary text-primary rounded-lg"
                    : "bg-[#FAFAFA] rounded-lg text-gray-600"
                }`}
              >
                Self Hosted
              </div>
            </div>
          </div>
          {selected === "SAAS" && (
            <div className="w-full flex flex-col justify-center mt-5">
              <LoginOptions
                imgSrc="/assets/icons/Github.svg"
                text="Login with Github"
              />
              <LoginOptions
                imgSrc="/assets/icons/BitBucket.svg"
                text="Login with Bitbucket"
              />
              <LoginOptions
                imgSrc="/assets/icons/Azure.svg"
                text="Login with Azure Devops"
              />
              <LoginOptions
                imgSrc="/assets/icons/GitLab.svg"
                text="Login with Gitlab"
              />
            </div>
          )}

          {selected === "Self Hosted" && (
            <div className="w-full flex flex-col justify-center mt-5">
              <LoginOptions
                imgSrc="/assets/icons/GitLab.svg"
                text="Login with Gitlab"
              />
              <LoginOptions
                imgSrc="/assets/icons/SSO.svg"
                text="Login with SSO"
              />
            </div>
          )}
        </div>

        <div className="text-text text-lg flex flex-row justify-center mt-4">
          By signing up you agree to the{" "}
          <span className="font-bold">Privacy Policy</span>.
        </div>
      </div>
    </>
  );
};
