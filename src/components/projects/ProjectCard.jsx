
import React from 'react';
import './ProjectCard.css';


class ProjectCard  extends React.Component {

    onThisClick () {
        let name  = this.props.data.title;
        this.props.onProjectClick(name);
    }

    render(){
        return(
                <div className='col m-2 p-2 alert alert-secondary' onClick={this.onThisClick.bind(this)} style={{minWidth: 220, maxWidth: 300, height: 450}}>
                    <img alt='Logo' className="img-responsive" src={this.props.data.featured_image} />
                    <div className="">
                        <br/>
                        <h5 className="">{this.props.data.title}</h5>

                        <div className="text-muted" dangerouslySetInnerHTML={{__html: this.props.data.summary}} />
                    </div>
                </div>

        );
    }

}

export default ProjectCard;

