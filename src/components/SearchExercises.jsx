import React, { useEffect } from "react";
import { IoIosSearch } from "react-icons/io";
import { useState } from "react";
import { options, fetchData } from "../utils/FetchData";
import HorizentalScroll from "./HorizentalScroll";

const SearchExercises = ({ setexercises, bodyPart, setbodyPart }) => {
  const [search, setsearch] = useState("");
  const [bodyParts, setbodyParts] = useState([]);
  useEffect(() => {
    const fetchBodyPartsData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        options
      );
      setbodyParts(["All", ...bodyPartsData]);
    };
    fetchBodyPartsData();
  }, []);
  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        options
      );
      console.log(exercisesData);
      const searchedExercises = exercisesData.filter(
        (e) =>
          e.name.toLocaleLowerCase().includes(search) ||
          e.target.toLocaleLowerCase().includes(search) ||
          e.equipment.toLocaleLowerCase().includes(search) ||
          e.equipment.toLocaleLowerCase().includes(search)
      );
      setsearch("");
      setexercises(searchedExercises);
    }
  };
  return (
    <div className="mx-auto flex flex-col items-center">
      <div className="mb-8">
        <p className="font-bold text-2xl lg:text-4xl text-center leading-relaxed">
          Awesome Exercises You <br /> Should Know
        </p>
      </div>
      <div className="flex bg-white w-[80%] md:w-[70%] rounded-md">
        <input
          className="rounded-md outline-none w-full p-3"
          type="text"
          name=""
          id=""
          placeholder="Exercises"
          value={search}
          onChange={(e) => setsearch(e.target.value.toLocaleLowerCase())}
        />
        <div>
          <button
            onClick={handleSearch}
            className="px-5  text-white bg-red-700 rounded-md flex h-full items-center justify-between w-[90px] text-sm  group"
          >
            <div>Search</div>
            <div>
              <IoIosSearch
                className=" opacity-0 group-hover:opacity-100 transition-all "
                size={17}
              />
            </div>
          </button>
        </div>
      </div>
      <div>
        <HorizentalScroll
          data={bodyParts}
          setbodyPart={setbodyPart}
          bodyPart={bodyPart}
          isBodyPart={true}
        />
      </div>
    </div>
  );
};

export default SearchExercises;
