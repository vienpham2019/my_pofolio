import React , {Component} from 'react'

import my_projects from './my_projects'
import Modal from './Modal'

class Projects extends Component {
    constructor(){
        super()
        this.state = {
            project: my_projects[0]
        }
    }
    render(){
        return(
            <section id="projects" style={{minHeight: '80vh'}}>

                <div className="row">

                    <div className="twelve columns collapsed">
                        
                        <h1>My Projects</h1>

                        <div id="portfolio-wrapper">
                            {my_projects.map(project => 
                                <div className="portfolio-item">
                                    <div className="item-wrap">
                                        <a href="#modal" onClick={() => this.setState({project})}>
                                            <img alt="ca" src={require(`./${project.image}`)} />
                                            <div className="overlay">
                                                <div className="portfolio-item-meta">
                                                    <h5 style={{float: 'left'}}>{project.title}</h5>
                                                </div>
                                            </div>
                                            <div className="link-icon"><i className="icon-plus"></i></div>
                                        </a>
                                    </div>
                                </div>  
                            )}
                        </div> 

                    </div> 
                    {this.state.project ? 
                        <Modal project = {this.state.project}/> 
                    : null }
                </div> 

            </section>
        )
    }
}

export default Projects