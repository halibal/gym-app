import React from 'react';
import { useStore } from '../../context/store-context';
import { Stack, Typography } from "@mui/material";
import { Gym } from '../../assets/icons';
import { setBodyPart } from '../../context/exercises/exercises-actions';

const BodyPart = ({ item }) => {
    const { exercisesState, dispatchExercises } = useStore();
    const { bodyPart } = exercisesState;

    return (
        <Stack
            type="button"
            alignItems="center"
            justifyContent="center"
            className='bodyPart-card'
            sx={{
                borderTop: bodyPart === item && "4px solid #ff2625",
                backgroundColor: "#fff",
                borderBottomLeftRadius: "20px",
                width: "270px",
                height: "280px",
                cursor: "pointer",
                gap: "47px"
            }}
            onClick={() => {
                dispatchExercises(setBodyPart(item));
                const element = document.getElementById('exercises');
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }}
        >
            <img
                src={Gym}
                alt="dumbbell"
                style={{
                    width: "40px",
                    height: "40px"
                }}
            />
            <Typography
                fontSize={24}
                fontWeight={600}
                color="#3a1212"
                textTransform="capitalize"
            >
                {item}
            </Typography>
        </Stack >
    )
};

export default BodyPart;