import React, { useState, useEffect } from "react";
import Detail from "../components/Detail";
import ExercisesVideos from "../components/ExercisesVideos";
import SimilarExercises from "../components/SimilarExercises";
import { useParams } from "react-router-dom";
import { fetchData, options, youtubeoptions } from "../utils/FetchData";

const ExerciseDetail = () => {
  const [exerciseDetail, setexerciseDetail] = useState({});
  const [exerciseVideos, setexerciseVideos] = useState([]);
  const [equipment, setequipment] = useState([]);
  const [target, settarget] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com/exercises";
      const youtubeSearchUrl = "https://youtube-search-and-download.p.rapidapi.com";
      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercise/${id}`,
        options
      );
      setexerciseDetail(exerciseDetailData);
      const exerciseVideoData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,youtubeoptions)
      setexerciseVideos(exerciseVideoData.contents)
      const targetMuscleExercisesData= await fetchData(`${exerciseDbUrl}/target/${exerciseDetailData.target}`,options)
      settarget(targetMuscleExercisesData)
      const equipmentMuscleExercisesData= await fetchData(`${exerciseDbUrl}/equipment/${exerciseDetailData.equipment}`,options)
      setequipment(equipmentMuscleExercisesData)
    };
    fetchExerciseData();
  }, [id]);
  return (
    <div>
      <Detail exerciseDetail={exerciseDetail} />
      <ExercisesVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
      <SimilarExercises equipment={equipment} target={target} />
    </div>
  );
};

export default ExerciseDetail;
