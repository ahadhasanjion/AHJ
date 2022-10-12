import React, { useContext } from "react";
import Card from "./Card";
import Header from "../Header/Header";
import { CodeContext } from "./Root";

const Home = () => {
  const data = useContext(CodeContext);

  return (
    <div>
      <Header></Header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
        {data.map((data) => (
          <Card key={data.id} data={data}></Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
