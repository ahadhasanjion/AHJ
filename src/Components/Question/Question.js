import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import QDetails from "../Qdetails/Qdetails";

const Question = () => {
  const allData = useLoaderData();

  const [right, setRight] = useState(null);
  const [wrong, setWrong] = useState(null);

  const singleData = allData.data;

  return (
    <div>
      <div className="bg--500">
        <div className="mb-3">
          {
            right && <p className="text-green-600 font-bold">Correct Answer : {right}</p>
          }
         {
          wrong &&  <p className="text-red-600 font-bold">Wrong Answer : {wrong}</p>
         }
        </div>
        <h1 className="text-4xl font-semibold">
          {" "}
          Quiz Of <span className="text-green-300">{singleData.name}</span>
        </h1>
        <p className=" font-bold my-3">
          {" "}
          Total Quiz :{" "}
          <span className="text-yellow-500">{singleData.total}</span>{" "}
        </p>
      </div>

      {singleData.questions.map((data) => (
        <QDetails
          key={data.id}
          data={data}
          setRight={setRight}
          setWrong={setWrong}
        ></QDetails>
      ))}
    </div>
  );
};

export default Question;
