import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, CircularProgress, Stack, Typography } from '@mui/material';
import { useStore } from '../../context/store-context';
import { ExerciseCard } from '../';
import { getAllExercises, getExercisesByBodyPart } from '../../api/exercise-service';
import { setExercises } from '../../context/exercises/exercises-actions';
import { paginationIndex } from '../../utils/pagination-index';

const exercisesPerPage = 9;

const Exercises = () => {

    const { exercisesState, dispatchExercises } = useStore();
    const { bodyPart, exercises } = exercisesState;
    const [currentPage, setCurrentPage] = useState(1);

    const currentExercises = paginationIndex(exercises, exercisesPerPage, currentPage);

    const paginate = (event, value) => {
        setCurrentPage(value);
        const direction = event.target.dataset.testid;

        const element = document.getElementById('exercises');
        if (element && direction === "NavigateNextIcon") {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const getExerciseData = async () => {
        let exercisesData = [];

        if (bodyPart === "all") {
            const resp = await getAllExercises();
            exercisesData = resp.data;
        } else {
            const resp = await getExercisesByBodyPart(bodyPart);
            exercisesData = resp.data;
        }

        dispatchExercises(setExercises(exercisesData));
    }

    useEffect(() => {
        getExerciseData();
        // eslint-disable-next-line
    }, [bodyPart])

    return (
        <Box
            id="exercises"
            sx={{ mt: { lg: "110px" } }}
            mt="50px"
            p="20px"
        >
            <Typography variant='h3' mb={10} textAlign="center">
                Showing Results
            </Typography>
            <Stack
                direction="row"
                sx={{ gap: { lg: "110px", xs: "50px" } }}
                flexWrap="wrap"
                justifyContent="center"
            >
                {
                    currentExercises.length
                        ? currentExercises.map((exercise, index) => (
                            <ExerciseCard key={index} exercise={exercise} />
                        ))
                        : <CircularProgress color='secondary' />
                }
            </Stack>
            <Stack
                mt="100px"
                alignItems="center"
            >
                {
                    exercises.length > 9 && (
                        <Pagination
                            color="standard"
                            defaultPage={1}
                            count={Math.ceil(exercises.length / exercisesPerPage)}
                            page={currentPage}
                            onChange={paginate}
                            size="large"
                        />
                    )
                }
            </Stack>
        </Box>
    )
};

export default Exercises;