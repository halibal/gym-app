import React from 'react';
import { Box, CircularProgress, Stack, Typography } from '@mui/material';
import { HorizontalScrollbar } from '../';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
    return (
        <Box
            sx={{
                mt: { lg: "100px", xs: "0" }
            }}
        >
            <Typography
                variant='h4'
                textTransform="capitalize"
                mt={10}
            >
                Exercises that target the same muscle group
            </Typography>
            <Stack
                direction="row"
                justifyContent="center"
                my={10}
                sx={{
                    p: "2",
                    position: "relative"
                }}
            >
                {
                    <HorizontalScrollbar data={targetMuscleExercises} />
                }
            </Stack>
            <Typography
                variant='h4'
                textTransform="capitalize"
                my={10}
            >
                Exercises that use the same equipment
            </Typography>
            <Stack
                direction="row"
                justifyContent="center"
                mb={10}
                sx={{
                    p: "2",
                    position: "relative"
                }}
            >
                {
                    equipmentExercises.length
                        ? <HorizontalScrollbar data={equipmentExercises} />
                        : <CircularProgress color="secondary" />
                }
            </Stack>
        </Box>
    )
};

export default SimilarExercises;