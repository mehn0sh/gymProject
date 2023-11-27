import React from 'react'
import Exercises from '../components/Exercises'
import HeroBanner from '../components/HeroBanner'
import SearchExercises from '../components/SearchExercises'
import { useState } from 'react'

const Home = () => {
  const [exercises, setexercises] = useState([]);
  const [bodyPart, setbodyPart] = useState('All');


  return (
    <div className=''>
      <HeroBanner/>
      <SearchExercises setexercises={setexercises} bodyPart={bodyPart} setbodyPart={setbodyPart}/>
      <Exercises setexercises={setexercises} exercises={exercises} bodyPart={bodyPart}/>
    </div>
  )
}

export default Home