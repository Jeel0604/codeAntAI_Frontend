import React from "react";

const Card = ({ image, text }) => {
  return (
    <div className="bg-primary hover:bg-gray-200 cursor-pointer relative mt-3 rounded-lg font-[500] py-2 px-4 gap-4 items-center flex flex-row text-text text-lg">
      <img className="w-6" src={image} alt="" />
      <span>{text}</span>
    </div>
  );
};

export default Card;
