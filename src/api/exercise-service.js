import axios from "axios";
import { settings } from "../utils/settings";
import authHeader from "./auth-header";


export const getAllExercises = () => {
    return axios.get(`${settings.apiURL}`, { headers: authHeader() })
};

export const getAllBodyParts = () => {
    return axios.get(`${settings.apiURL}/bodyPartList`, { headers: authHeader() })
};

export const getByBodyPart = (bodyPart) => {
    return axios.get(`${settings.apiURL}/bodyPart/${bodyPart}`, { headers: authHeader() });
};

export const getExerciseById = (exerciseId) => {
    return axios.get(`${settings.apiURL}/exercise/${exerciseId}`, { headers: authHeader() })
};