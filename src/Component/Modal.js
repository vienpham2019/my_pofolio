import React , {Component} from 'react'

class Modal extends Component {
    render(){
        let {project} = this.props
        return(
            <div id="modal" className="popup-modal mfp-hide">

                <img className="scale-with-grid" src={require(`./${project.image}`)} alt="" />

                <div className="description-box">
                    <h4 
                        className="animate__animated animate__bounceInDown"
                        style={{animationDuration: '2s', animationDelay: '0.2s'}}
                    >
                        {project.title}
                    </h4>
                    <p 
                        className="animate__animated animate__zoomIn"
                        style={{color: 'black' , marginLeft: '10px' ,animationDuration: '2s' , animationDelay: '0.4s'}}
                    >
                        {project.description}
                    </p>
                    <br/>
                    <table>
                        {project.details.map((detail , index) => 
                            <tr 
                                className="animate__animated animate__zoomIn"
                                style={{border: '1px solid #DCDCDC' , animationDuration: '2s' , animationDelay: `0.${index + index + 3}s`}}
                            >
                                <p style={{margin: '10px' , color: 'black'}}>{detail}</p>
                            </tr>
                        )}
                    </table>
                    <br/>
                    <p 
                        className="animate__animated animate__zoomIn"
                        style={{color: 'black' ,  marginLeft: '10px' , animationDuration: '2s' , animationDelay: `0.${((project.details.length - 1) * 2 )+ 3}s`}}
                    >Tools: {project.tools}</p>
                </div>

                <div className="link-box">
                    <a href={project.github} target="_" style={{margin: '0 10px', fontSize: '1.2em'}}>
                        <i className="fab fa-github"></i> Github
                    </a>
                    <a href={project.demo} target="_" style={{margin: '0 10px' , fontSize: '1.2em'}}>
                        {project.video ? <i className="fas fa-video"></i> : <i className="fas fa-globe-americas"></i>}  Demo
                    </a>
                    <a className="popup-modal-dismiss" style={{float: 'right'}}>Close</a>
                </div>

            </div>
        )
    }
}

export default Modal