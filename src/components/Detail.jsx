import React from "react";
import BodyPartImage from "../assets/icons/body-part.png";
import targetImg from "../assets/icons/target.png";
import equipmentImg from "../assets/icons/equipment.png";
const Detail = ({ exerciseDetail }) => {
  const {
    instructions,
    gifUrl,
    name,
    bodyPart,
    equipment,
    target,
    secondaryMuscles,
  } = exerciseDetail;

  if (!exerciseDetail) return <div>loading..</div>;

  const extraDetail = [
    { icon: BodyPartImage, name: bodyPart },
    { icon: targetImg, name: target },
    { icon: equipmentImg, name: equipment },
  ];
  return (
    <div className="mt-10" >
      <div className="flex flex-col lg:flex-row items-center justify-center
      gap-6 ">
        <div className="w-[300px] md:w-[400px] lg:w-[500px]">
          <img src={gifUrl} alt="" className="w-[100%]"  />
        </div>
        <div className="w-[300px] lg:w-[450px]">
          <h2 className="text-2xl ">{name}</h2>
          <p className="leading-loose my-4">
            {[instructions].map((i, index) => {
              return <p key={index}> {i}</p>;
            })}
          </p>
        <div className="flex flex-col gap-y-8">
            {extraDetail.map((e,index)=>(
                <div className="flex gap-4 items-center" key={index}>
                    <img src={e.icon} alt="" className="bg-yellow-50 p-1 w-[50px] h-[50px] rounded-full"/>
                    <p>{e.name}</p>
                </div>
            ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
