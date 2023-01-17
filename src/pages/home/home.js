import React, { useState } from 'react';
import { Box } from '@mui/material';
import { Exercises, HeroBanner, SearchExercises } from '../../components';

const Home = () => {
    const [exercises, setExercises] = useState([]);
    
    return (
        <Box>
            <HeroBanner />
            <SearchExercises
                setExercises={setExercises}
            />
            <Exercises
                setExercises={setExercises}
            />
        </Box>
    )
}

export default Home