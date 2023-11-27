import React from "react";
import BodyPart from "./BodyPart";
import "@splidejs/splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import ExercicesCard from "./ExercicesCard";

const HorizentalScroll = ({ data,setbodyPart,bodyPart ,isBodyPart}) => {
  return (
    <div className="mt-[10px]  md:w-[80%] mx-auto">
      <Splide
        options={{
          pagination:false,

          gap:'0.5rem',
          perPage: 4,
          breakpoints: {
            426: {
              perPage: 2,
              width:'250px',
              height:'100px'
            },
            768: {
              perPage: 3,
              width:'450px',
              height:'100px'
            },
          },
        }}
      >
        {data.map((item) => (
          <SplideSlide key={item.id || item}>
        {isBodyPart ?  <BodyPart item={item ||item.id} id={item}  setbodyPart={setbodyPart} bodyPart={bodyPart}/>:<ExercicesCard exercise={item}/>}  
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default HorizentalScroll;
