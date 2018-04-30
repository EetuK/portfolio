import React, {Component} from 'react';
import ProjectList from './ProjectList';


class ProjectApp extends Component{

    render(){

        return(
            <div className="text-center justify-content-center mt-4">
                <h1 className="text-light">Projects</h1>
                <br/>
                <br/>
                <br/>
                <ProjectList/>
            </div>
        );
    }
}
export default ProjectApp