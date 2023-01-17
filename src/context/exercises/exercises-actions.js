import { types } from "../types";

export const setExercises = (value) => ({
    type: types.SET_EXERCISES,
    payload: value
});

export const setBodyParts = (value) => ({
    type: types.SET_BODY_PARTS,
    payload: value
});

export const setBodyPart = (value) => ({
    type: types.SET_BODY_PART,
    payload: value
});