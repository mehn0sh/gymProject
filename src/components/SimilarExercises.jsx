import React from "react";
import HorizentalScroll from "./HorizentalScroll";

const SimilarExercises = ({ equipment, target }) => {
  if (!target) return <div>loading..</div>;
  if (!equipment) return <div>loading..</div>;
  return (
    <div className="mt-20  ">
      <div className=" flex flex-col">
        <h3 className="text-2xl p-3">
          Exercises that <span className="text-red-700"> target </span>the same
          muscle group
        </h3>
        <div className=" mx-auto w-full flex justify-between">
          <HorizentalScroll data={target} />
        </div>
      </div>
      <div className=" flex flex-col mt-20">
        <h3 className="text-2xl p-3">
          Exercises that <span className="text-red-700"> equipment </span>the same
          muscle group
        </h3>
        <div className=" mx-auto w-full flex justify-between">
          <HorizentalScroll data={equipment} />
        </div>
      </div>
    </div>
  );
};

export default SimilarExercises;
