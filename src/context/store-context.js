import { createContext, useContext, useReducer } from "react";
import { exercisesInitialState } from "./exercises/exercises-initial-state";
import { exercisesReducer } from "./exercises/exercises-reducer";

const StoreContext = createContext();

export const useStore = () => useContext(StoreContext);

export const StoreProvider = ({ children }) => {
    const [exercisesState, dispatchExercises] = useReducer(exercisesReducer, exercisesInitialState);

    return (
        <StoreContext.Provider value={{ exercisesState, dispatchExercises }}>
            {children}
        </StoreContext.Provider>
    )
};