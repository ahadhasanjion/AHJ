import React from "react";
import { Link } from "react-router-dom";

const Quiz = ({ data }) => {
  const { name, logo, total,id } = data;

  return (
    <div className="">
      <div className="bg-gray-100 p-4 rounded shadow-lg mx-10 mb-9">
        <img
          className="mb-6 rounded shadow-lg  bg-black"
          src={logo}
          alt=""
        />
        <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
          {name}
        </p>
        <p className="font-bold">Question : {total}</p>
        <Link to={`../quiz/${id}`}>
          {" "}
          <button
            type="button"
            className="px-8 text-center gap-1 w-full mt-4 py-3 font-semibold rounded-full bg-cyan-200 text-gray-800 hover:bg-cyan-400 "
          >
            Start Quiz
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Quiz;
