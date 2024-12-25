import { IssuesFixed } from "./IssuesFixed";
import { Stats } from "./Stats";

export const About = () => {
  return (
    <>
      <div className="w-[474] h-[322] flex flex-col justify-center items-end">
        <div
          className="flex flex-col items-start
         rounded-3xl shadow-custom1 me-10"
        >
          <div className="w-full h-[170] border-b flex flex-row items-center gap-2 py-1 border-b-gray-200 pt-6 pl-6 mb-6 pb-3">
            <img
              className="w-8"
              src="/assets/img/codeAntSmallLogo.png"
              alt="CodeAnt Logo"
            />
            <span className="font-bold text-text">
              AI to Detect & Autofix Bad Code
            </span>
          </div>

          <div className="flex flex-row gap-10 mb-6 mx-8 justify-between">
            <Stats title="30+" value="Language Support" />
            <Stats title="10k+" value="Developers" />
            <Stats title="100k+" value="Hours Saved" />
          </div>
        </div>

        <IssuesFixed />
      </div>
    </>
  );
};
