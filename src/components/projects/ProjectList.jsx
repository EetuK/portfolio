import React, {Component} from 'react';
import Butter from 'buttercms';
import ProjectCard from './ProjectCard';
import ProjectSheet from './ProjectSheet';


class ProjectList extends Component{
    constructor(){
        super();
        this.state = {
            projects: [],
            clickedProject: null
        }
    }
    componentDidMount() {
        const butter = Butter('4cdbbe9df44593599957e9e3784fc46bedc8089a');
        butter.post.list({page: 1, page_size: 30})
            .then(function(resp){
                console.log(resp);
                return resp;
            })
            .then((resp) => {
                this.setState({
                    projects: resp.data.data
                })
            });
    }

    onProjectClick = (projectName) => {
        this.setState({
            clickedProject:projectName
        })
    }

    render(){


        let projects = this.state.projects.map((project, index) => {
            return(
                <ProjectCard
                    key={index}
                    onProjectClick = {this.onProjectClick}
                    data = {project}
                />
            )
        })

        let projectFull = this.state.projects.map((project, index) => {
            if (project.title === this.state.clickedProject) {
                return(
                    <ProjectSheet
                        key = {index}
                        onProjectClick={this.onProjectClick}
                        data = {project}
                    />
                )
            }
        })

        let state = null

        if (this.state.clickedProject != null){
            state = projectFull;
        }
        else{
            state = projects;
        }

        return(
            <div className="row text-center justify-content-center bg-dark">
                    {state}
            </div>
        );
    }
}
export default ProjectList