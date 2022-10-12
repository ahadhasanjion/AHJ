import React from "react";
import { Link } from "react-router-dom";

const Quiz = ({ data }) => {
  const { name, logo, id, total } = data;

  return (
    <div className="mb-24 ms-12">
      <div className="bg-gray-100 p-6 rounded shadow-lg w-64 h-42 mx-16">
        <img
          className=" w-full h-42 mb-6 rounded shadow-lg md:h-64 xl:h-60"
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
            className="px-8 flex  items-center gap-1 w-full mt-4 py-3 font-semibold rounded-full bg-cyan-200 text-gray-800 hover:bg-cyan-400 "
          >
            Start Quiz
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Quiz;
