import React, { useContext } from "react";
import Header from "../Header/Header";
import Quiz from "../Quiz/Quiz";
import { CodeContext } from "../Root/Root";

const Home = () => {
  const data = useContext(CodeContext);

  return (
    <div>
      <Header></Header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
        {data.map((data) => (
          <Quiz key={data.id} data={data}></Quiz>
        ))}
      </div>
    </div>
  );
};

export default Home;
