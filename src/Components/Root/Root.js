import React, { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

export const CodeContext = createContext([]);

const Root = () => {
  const allData = useLoaderData();
  const dataArray = allData.data;

  const data = dataArray.map((dt) => dt);

  return (
    <div>
      <CodeContext.Provider value={data}>
        <Navbar></Navbar>
        <Outlet></Outlet>
      </CodeContext.Provider>
    </div>
  );
};

export default Root;
