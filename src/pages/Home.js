import React, { useState } from 'react';
import { Box } from "@mui/material"
import Exercises from '../components/Exercises';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';

const Home = () => {
    const [bodyPart, setBodypart] = useState('all'); 
    const [exercises, setExercises] = useState([]);
  return (
    <Box>
        <HeroBanner />

        <SearchExercises 
        setExercises = {setExercises}
        bodyPart = {setBodypart}
        setBodyParts = {setBodyParts} />

        <Exercises 
        setExercises = {setExercises}
        bodyPart = {setBodypart}
        setBodyParts = {setBodyParts} />
    </Box>
  )
}

export default Home 