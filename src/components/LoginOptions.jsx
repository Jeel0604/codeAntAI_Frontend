import { useNavigate } from "react-router-dom";

export const LoginOptions = ({ imgSrc, text }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate("/dashboard");
      }}
      className="flex items-center justify-center border border-gray-300 rounded-lg p-4 w-full mb-5 cursor-pointer hover:shadow-custom1 transition"
    >
      <img className="w-6 h-6 mr-4" src={imgSrc} alt={text} />
      <span className="text-lg font-medium text-gray-800">{text}</span>
    </div>
  );
};
