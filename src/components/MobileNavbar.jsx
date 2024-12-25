import { useState } from "react";
import Card from "./Card"; // Assuming Card is in the same directory

export const MobileNavbar = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div className="w-full h-20 bg-primary flex flex-row justify-between items-center p-4 md:hidden">
      <div className="flex text-3xl cursor-default text-text flex-row items-center gap-2">
        <img
          className="w-10"
          src="/assets/img/codeAntSmallLogo.png"
          alt="Logo"
        />
        <span>CodeAnt AI</span>
      </div>
      <div onClick={() => setIsToggled(!isToggled)}>
        {!isToggled ? (
          <img className="w-6" src="/assets/icons/menu.png" alt="Menu" />
        ) : (
          <img className="w-6" src="/assets/icons/close.png" alt="Close" />
        )}
      </div>

      {/* Conditionally Render Cards When Toggled */}
      {isToggled && (
        <div className="absolute top-20 left-0 w-full bg-white p-4 shadow-lg">
          <Card image="/assets/icons/home.png" text="Repositories" />
          <Card image="/assets/icons/code.png" text="AI Code Review" />
          <Card image="/assets/icons/cloud.png" text="Cloud Security" />
          <Card image="/assets/icons/book.png" text="How to use" />
          <Card image="/assets/icons/setting.png" text="Setting" />
          <Card image="/assets/icons/phone.png" text="Support" />
          <Card image="/assets/icons/logout.png" text="Logout" />
        </div>
      )}
    </div>
  );
};
