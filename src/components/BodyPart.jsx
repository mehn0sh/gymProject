import React , {useState}from 'react'
import gym from '../assets/icons/gym.png'
const BodyPart = ({item,setbodyPart,bodyPart}) => {
  return (
<div  onClick={()=>{setbodyPart(item),window.scrollTo({top:1800,left:100,behavior:'smooth'})}} className={`bg-white hover:scale-125 
flex flex-col justify-center items-center gap-4 p-5 border-t-4 ${item===bodyPart && 'border-t-4 border-t-red-700' ||'border-t-white '}`}>
    <div>
<img src={gym} alt="" className='w-[30px] h-[30px] md:w-[40px] md:h-[40px]'  />
    </div>
    <div className='text-[13px]' >{item}</div>
</div>
    )
}

export default BodyPart