import { types } from "../types";
import { exercisesInitialState } from "./exercises-initial-state";

export const exercisesReducer = (state = exercisesInitialState, action) => {
    if (action.type === types.SET_EXERCISES) {
        return {
            ...state,
            exercises: action.payload  
        }
    } else if (action.type === types.SET_BODY_PART) {
        return {
            ...state,
            bodyPart: action.payload
        }
    } else if (action.type === types.SET_BODY_PARTS) {
        return {
            ...state,
            bodyParts: action.payload
        }
    }

    return state;
};