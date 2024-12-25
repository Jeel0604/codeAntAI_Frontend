import { LeftSection } from "../components/LeftSection";
import { RightSection } from "../components/RightSection";

export const LoginPage = () => {
  return (
    <>
      <div className="flex w-full h-screen">
        <div className="hidden w-[50%] xl:flex justify-center">
          <LeftSection />
        </div>
        <RightSection />
      </div>
    </>
  );
};
