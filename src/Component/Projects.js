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

                <div class="row">

                    <div class="twelve columns collapsed">
                        
                        <h1>My Projects</h1>

                        <div id="portfolio-wrapper">
                            {my_projects.map(project => 
                                <div class="portfolio-item">
                                    <div class="item-wrap">
                                        <a href="#modal" onClick={() => this.setState({project})}>
                                            <img alt="ca" src={require(`./${project.image}`)} />
                                            <div class="overlay">
                                                <div class="portfolio-item-meta">
                                                    <h5>{project.title}</h5>
                                                </div>
                                            </div>
                                            <div class="link-icon"><i class="icon-plus"></i></div>
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