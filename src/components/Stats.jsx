export const Stats = ({ title, value }) => {
  return (
    <>
      <div className="w-fit h-[47] flex flex-col  justify-center items-center">
        <h1 className="font-bold">{title}</h1>
        <p>{value}</p>
      </div>
    </>
  );
};
