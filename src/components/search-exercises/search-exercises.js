import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { getAllBodyParts, getAllExercises } from '../../api/exercise-service';
import { HorizontalScrollbar } from '../index';
import { useStore } from '../../context/store-context';
import { setBodyParts, setExercises } from '../../context/exercises/exercises-actions';

const SearchExercises = () => {
    const [search, setSearch] = useState("");
    const { dispatchExercises, exercisesState } = useStore();
    const { bodyParts } = exercisesState;

    const loadBodyParts = async () => {
        try {
            const resp = await getAllBodyParts();
            dispatchExercises(setBodyParts(resp.data));
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        loadBodyParts();
        // eslint-disable-next-line
    }, []);

    const handleSearch = async () => {
        if (search) {
            const resp = await getAllExercises();
            const exercisesData = resp.data;

            const searchedExercises = exercisesData.filter(
                (exercise) => exercise.name.toLowerCase().includes(search)
                    || exercise.target.toLowerCase().includes(search)
                    || exercise.equipment.toLowerCase().includes(search)
                    || exercise.bodyPart.toLowerCase().includes(search)
            );
            setSearch("");
            dispatchExercises(setExercises(searchedExercises));
        }
    };

    return (
        <Stack
            alignItems="center"
            mt="37px"
            justifyContent="center"
            p="20px"
        >
            <Typography
                textTransform="capitalize"
                fontWeight={700}
                sx={{
                    fontSize: { lg: "44px", xs: "30px" }
                }}
                mb="50px"
                textAlign="center"
            >
                awesome exercises you <br /> should know
            </Typography>
            <Box

                mb="72px"
            >
                <TextField
                    height="76px"
                    value={search}
                    onChange={(e) => { setSearch(e.target.value.toLowerCase()) }}
                    placeholder="Search Exercises"
                    type="text"
                    sx={{
                        input: {
                            fontWeight: "700",
                            border: "none",
                            borderRadius: "4px"
                        },
                        width: { lg: "800px", xs: "350px" },
                        backgroundColor: "#fff",
                        borderRadius: "4px"
                    }}
                />
                <Button
                    className='search-btn'
                    sx={{
                        bgcolor: "#ff2625",
                        color: "#fff",
                        textTransform: "uppercase",
                        width: { lg: "175px", xs: "80px" },
                        fontSize: { lg: "20px", xs: "14px" },
                        height: "56px"
                    }}
                    onClick={handleSearch}
                >
                    Search
                </Button>
            </Box>
            <Box
                sx={{
                    position: 'relative',
                    width: "100%",
                    p: "20px",
                }}
            >
                <HorizontalScrollbar isBodyParts={true} data={bodyParts} />
            </Box>
        </Stack>
    )
}

export default SearchExercises