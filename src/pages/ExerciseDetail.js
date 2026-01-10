import React, { useEffect, useState } from 'react'
import { useParams} from 'react-router-dom'
import { Box } from '@mui/material'

import { exerciseOptions, fetchData } from '../utils/fetchData';
import Detail from '../components/Detail';
import ExerciseVideo from '../components/ExerciseVideo';
import SimilarExercises from '../components/SimilarExercises';

const ExerciseDetail = () => {
  useState [exerciseDetail, setExerciseDetail] = 
  useState({});
  const { id } = useparams(); 
  
  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'

      const exerciseDetailData = await fetchData(`${excerciseDbUrl}/exercise/exercise{id}` , exerciseOptions)
      setExerciseDetail(exerciseDetailData)
    }
  }, [id]);
  fetchExercisesData();
  return(
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideo />
      <SimilarExercises />
    </Box>
  );
};

export default ExerciseDetail