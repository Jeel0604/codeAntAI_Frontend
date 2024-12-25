export const Repositories = ({
  name,
  visibility,
  language,
  size,
  lastUpdated,
}) => {
  return (
    <div className="border border-gray-200 flex flex-col p-3 ps-5">
      <div className="flex flex-row gap-3 items-center mb-2">
        <span className="text-xl font-[600]">{name}</span>
        <span
          className={`rounded-full border-2 px-3 text-blue-700 font-[500] border-blue-300 bg-blue-100`}
        >
          {visibility}
        </span>
      </div>
      <div className="flex flex-row gap-5 text-lg items-center">
        <span className="flex flex-row items-center gap-2">
          <span>{language}</span>
          <span className="text-secondary text-3xl">•</span>
        </span>
        <span className="flex flex-row gap-2 items-center">
          <img
            className="w-4"
            src="/assets/icons/stack-of-three-coins.png"
            alt="size"
          />
          <span>{size} KB</span>
        </span>
        <span>Updated {lastUpdated} ago</span>
      </div>
    </div>
  );
};
