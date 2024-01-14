import React from "react";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div>
      <div className="max-w-screen-xl lg:mx-auto md:mx-24  mx-4 lg:my-16 my-12 ">
        <h1 className="lg:text-5xl md:text-5xl text-2xl  font-bold uppercase">
          {heading}{" "}
          <span className="lg:text-5xl md:text-5xl text-2xl font-bold text-[#f85606]">
            {subHeading}
          </span>
        </h1>
        <div className=" text-xl mt-3 w-60 lg:w-[470px]  md:w-[450px] border-b-2 text-red-600"></div>
      </div>
    </div>
  );
};

export default SectionTitle;
