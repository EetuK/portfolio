import React from 'react';


class ProjectSheet  extends React.Component {

    onThisClick () {
        let name  = null;
        this.props.onProjectClick(name);
    }

    render(){
        return(
            <div className='col m-2 p-2 alert alert-secondary'>
                <div >
                    <button className="close" onClick={this.onThisClick.bind(this)}>
                        <span >&times;</span>
                    </button>
                    <h5>{this.props.data.title}</h5>
                    <div dangerouslySetInnerHTML={{__html: this.props.data.body}} />
                    <button className="btn btn-dark" onClick={this.onThisClick.bind(this)}>Back</button>
                </div>
            </div>
        );
    }

}

export default ProjectSheet;