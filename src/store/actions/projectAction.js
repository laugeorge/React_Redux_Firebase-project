export const createProject = (project) => {
    // when using Thunk, we can return a function
    return (dispatch, getState) => {
        // make async call to database
        dispatch({type: 'CREATE_PROJECT', project});
    }
};