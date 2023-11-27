import React from "react";

const ExercisesVideos = ({ name, exerciseVideos }) => {
  if (!exerciseVideos) return <div>loading</div>;
  return (
    <div className="mt-20 flex flex-col px-4">
      <h2 className="text-2xl"> Watch  <span className="text-red-700">{name}</span> exercise videos</h2>
      <div className="flex flex-col lg:flex-row gap-6 justify-center mt-14">

      {exerciseVideos?.slice(0, 3).map((item, index) => (
        <a
          href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
          key={index}
          target='_blank'
          className="w-[300px]"
        >
          <img src={item.video.thumbnails[0].url} alt="" />
          <p className="mt-3">{item.video.title}</p>
        </a>
      ))}
      </div>
    </div>
  );
};

export default ExercisesVideos;
