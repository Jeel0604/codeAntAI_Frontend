export const IssuesFixed = () => {
  return (
    <>
      <div className="flex flex-col bg-primary shadow-custom1 rounded-3xl p-6 relative z-10 bottom-2">
        <div className="flex flex-row justify-between items-center gap-28">
          <div className="rounded-[50%] p-4 bg-[#9D90FA40]">
            <img className="w-8" src="/assets/icons/pie.png" alt="" />
          </div>
          <div className="flex flex-col items-start">
            <div className="text-[#0049C6] text-lg font-bold flex flex-row">
              <img
                className="w-5 me-2"
                src="/assets/icons/upArrow.svg"
                alt=""
              />
              14%
            </div>
            <div>This Week</div>
          </div>
        </div>
        <div>
          <div className="flex font-bold flex-col mt-3 justify-start">
            <span>Issues Fixed</span>
            <span className="text-4xl">500k+</span>
          </div>
        </div>
      </div>
    </>
  );
};
