import React from 'react';
import '../Css/projects.css';
import ProjectSummary from './ProjectSummary';

class ProjectList extends React.Component{
    render(){
        return(
            <section id="project">
                <div className="MainWrapper">
                    <div id="ProjectWrapper">
                            <ProjectSummary/>
                            <ProjectSummary/>
                    </div>
                </div>
            </section>
        )
    }
}
export default ProjectList;