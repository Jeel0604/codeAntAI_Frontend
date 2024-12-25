import { About } from "./About";
import { BackgroundImage } from "./BackgroundImage";

export const LeftSection = () => {
  return (
    <>
      <BackgroundImage />
      <div className="flex flex-row justify-center items-center">
        <About />
      </div>
    </>
  );
};
