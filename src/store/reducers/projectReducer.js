{/* In this file, we are passing the project from dashboard to project list.  
We are passing data as props and then to the project summary*/}

const initState = {
    projects: [
        {id: '1', title: 'help me find peach', content: 'blah blah blah'},
        {id: '2', title: 'collect stars', content: 'blah blah blah again'},
        {id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah again and again'}
    ]
}


{/* this is going to set the state equal to the initial state and 'return state' */}
{/* this is set the state equal to the initial */}
const projectReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE_PROJECT': 
            console.log('created project', action.project)
    }
    return state

}

export default projectReducer