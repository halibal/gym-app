export const paginationIndex = (data, exercisesPerPage, currentPage) => {
    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
    const currentExercises = data.slice(indexOfFirstExercise, indexOfLastExercise);

    return currentExercises;
};