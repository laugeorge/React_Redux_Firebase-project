import React, { Component } from 'react'
import Notification from './Notification'
import ProjectList from '../projects/ProjectList'
import {connect} from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import {compose} from 'redux'


class Dashboard extends Component {
    render() {
        // console.log(this.props);
        const { projects } = this.props;



        return (
            <div className = 'dashboard container'>
                <div className = 'row'>
                    {/* 12 column on small screen and 6 in medium...*/}
                    <div className = 'col s12 m6'>
                        <ProjectList projects={projects} />
                    </div>
                    <div className = 'col s12 m5 offset-m1'>
                        <Notification />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state); 
    return {
        projects: state.firestore.ordered.projects
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects'}
    ])
) (Dashboard)

//connect(mapStateToProps) (Dashboard);
