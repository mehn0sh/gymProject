import React from "react";
import { Link } from "react-router-dom";

const ExercicesCard = ({ exercise }) => {
  return (
    <Link to={`/exerciseDetail/${exercise.id}`} className='w-fit'>
      <div  className='bg-white border-t-4 border-red-700 w-fit hover:scale-110 transition-all'>
      <div>
        <img src={exercise.gifUrl} alt="" loading="lazy"  />
      </div>
      <div className="flex gap-2 text-white w-fit text-[13px] my-4">
        <button className="bg-red-200 px-3 py-2 rounded-md ">{exercise.bodyPart}</button>
        <button className="bg-yellow-400 px-3 rounded-md py-2 ">{exercise.target}</button>
      </div>
      {exercise.name}
      </div>
    </Link>
  );
};

export default ExercicesCard;
