export const createProject = (project) => {
    // when using Thunk, we can return a function
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'George',
            authorLastName: 'Lau',
            authorID: 12345,
            createdAt: new Date()
        })
        .then(() => { dispatch({type: 'CREATE_PROJECT', project});
        })
        .catch((err) => { dispatch({type: 'CREATE_PROJECT_ERROR', err});
        })

    }
};