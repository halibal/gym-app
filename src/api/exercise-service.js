import axios from "axios";
import { settings } from "../utils/settings";
import authHeader from "./auth-header";


const exerciseUrl = settings.exerciseDb.apiUrl;
const exerciseKey = settings.exerciseDb.apiKey;
const exerciseHost = settings.exerciseDb.host;

export const getAllExercises = () => {
    return axios.get(`${exerciseUrl}/exercises`, { headers: authHeader(exerciseKey, exerciseHost) })
};

export const getAllBodyParts = () => {
    return axios.get(`${exerciseUrl}/exercises/bodyPartList`, { headers: authHeader(exerciseKey, exerciseHost) })
};

export const getExercisesByBodyPart = (bodyPart) => {
    return axios.get(`${exerciseUrl}/exercises/bodyPart/${bodyPart}`, { headers: authHeader(exerciseKey, exerciseHost) });
};

export const getExerciseById = (exerciseId) => {
    return axios.get(`${exerciseUrl}/exercises/exercise/${exerciseId}`, { headers: authHeader(exerciseKey, exerciseHost) })
};

export const getExercisesByTargetMuscle = (targetMuscle) => {
    return axios.get(`${exerciseUrl}/exercises/target/${targetMuscle}`, { headers: authHeader(exerciseKey, exerciseHost) })
};

export const getExercisesByEquipment = (equipment) => {
    return axios.get(`${exerciseUrl}/exercises/equipment/${equipment}`, { headers: authHeader(exerciseKey, exerciseHost) })
};