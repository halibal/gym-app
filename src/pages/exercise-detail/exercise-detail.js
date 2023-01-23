import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { Detail, ExerciseVideos, SimilarExercises } from '../../components';
import { getExerciseById, getExercisesByEquipment, getExercisesByTargetMuscle } from '../../api/exercise-service';
import { searchVideos } from '../../api/youtube-search-service';


const ExerciseDetail = () => {
    const [exerciseDetail, setExerciseDetail] = useState({});
    const [exerciseVideos, setExerciseVideos] = useState([]);
    const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
    const [equipmentExercises, setEquipmentExercises] = useState([]);

    const { id } = useParams();

    const loadExerciseData = async () => {
        try {
            const respExercise = await getExerciseById(id);
            const exerciseDetailData = respExercise.data;
            setExerciseDetail(exerciseDetailData);

            const respVideos = await searchVideos(exerciseDetailData.name);
            const exerciseVideosData = respVideos.data.contents;
            setExerciseVideos(exerciseVideosData);

            const respTarget = await getExercisesByTargetMuscle(exerciseDetailData.target);
            const targetMuscleExercisesData = respTarget.data;
            setTargetMuscleExercises(targetMuscleExercisesData);

            const respEquipment = await getExercisesByEquipment(exerciseDetailData.equipment)
            const equipmentExercisesData = respEquipment.data;
            setEquipmentExercises(equipmentExercisesData);
        } catch (err) {
            console.log(err);
        }
    }


    useEffect(() => {
        loadExerciseData();
        // eslint-disable-next-line
    }, [id]);

    return (
        <Box>
            <Detail
                exerciseDetail={exerciseDetail}
            />
            <ExerciseVideos
                exerciseVideos={exerciseVideos}
                name={exerciseDetail.name}
            />
            <SimilarExercises
                targetMuscleExercises={targetMuscleExercises}
                equipmentExercises={equipmentExercises}
            />
        </Box>
    )
};

export default ExerciseDetail;