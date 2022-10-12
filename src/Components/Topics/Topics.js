import React, { useContext } from "react";
import Quiz from "../Quiz/Quiz";
import { CodeContext } from "../Root/Root";

const Topics = () => {
  const data = useContext(CodeContext);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 ms-8 mt-10">
        {data.map((data) => (
          <Quiz key={data.id} data={data}></Quiz>
        ))}
      </div>
    </div>
  );
};

export default Topics;
