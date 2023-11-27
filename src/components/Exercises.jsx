import { Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import { fetchData, options } from "../utils/FetchData";
import ExercicesCard from "./ExercicesCard";

const Exercises = ({ setexercises, exercises, bodyPart }) => {
  const [currentPage, setcurrentPage] = useState(1);
  const [loading, setloading] = useState(false);
  let exercicesPerPage = 6;
  let indexOfLastExercise = currentPage * exercicesPerPage;
  let indexOfFirstExercise = indexOfLastExercise - exercicesPerPage;
  const currentExercise = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );
  useEffect(() => {
    const fetchExercicesData = async () => {
      setloading(true);
      let exercisesData = [];
      if (bodyPart == "All") {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          options
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          options
        );
      }
      setexercises(exercisesData);
      setloading(false);
    };
    fetchExercicesData();
  }, [bodyPart]);
  const paginate = (e, value) => {
    setcurrentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };
  return (
    <div className="mx-auto w-[80%] mt-20" id="exercise">
      {loading ? (
        "loading data"
      ) : (
        <div>
          <p className="text-3xl mb-10 text-center ">Show Result</p>
          {exercises.length == 0 && (
            <div className="text-center text-red-700">
              sorry ! cant find any exercises , search other thing
            </div>
          )}
          <div
            className={` ${
              exercises.length < 2
                ? "flex justify-center items-center"
                : "grid  gap-y-8 gap-x-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            }`}
          >
            {currentExercise.map((e) => (
              <ExercicesCard exercise={e} key={e.id} />
            ))}
          </div>
          <div className="mt-12  mx-auto w-fit">
            {exercises.length > 6 && (
              <Pagination
                count={Math.ceil(exercises.length / exercicesPerPage)}
                page={currentPage}
                onChange={paginate}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Exercises;
