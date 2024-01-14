import React from "react";
import SectionTitle from "../../../Component/SectionTitle";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div>
      <SectionTitle subHeading={"category"} heading={"Shop by"} />
      <div className="max-w-screen-xl lg:mx-auto mx-20">
        <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-8 ">
          <Link to="">
            <div className="card w-60 shadow-md border border-gray-300 py-20">
              <h1 className="text-xl text-center font-semi-bold">SmartWatch</h1>
            </div>
          </Link>
          <Link to="">
            <div className="card w-60 shadow-md border border-gray-300 py-20">
              <h1 className="text-xl text-center font-semi-bold">SmartWatch</h1>
            </div>
          </Link>
          <Link to="">
            <div className="card w-60 shadow-md border border-gray-300 py-20">
              <h1 className="text-xl text-center font-semi-bold">SmartWatch</h1>
            </div>
          </Link>
          <Link to="">
            <div className="card w-60 shadow-md border border-gray-300 py-20">
              <h1 className="text-xl text-center font-semi-bold">SmartWatch</h1>
            </div>
          </Link>
          <Link to="">
            <div className="card w-60 shadow-md border border-gray-300 py-20">
              <h1 className="text-xl text-center font-semi-bold">SmartWatch</h1>
            </div>
          </Link>
          <Link to="">
            <div className="card w-60 shadow-md border border-gray-300 py-20">
              <h1 className="text-xl text-center font-semi-bold">SmartWatch</h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;
