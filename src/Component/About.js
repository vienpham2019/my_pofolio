import React , {Component} from 'react'
import Resume from './Resume'

class About extends Component {
    constructor(){
        super()
        this.state = {
            skills_1: ["Ruby on Rails", "Javascript" , "NodeJs", "ExpressJs"],
            skills_2: ["React/Redux", "HTML/CSS", "WebApi", "Frameworks (Bootstrap)"]
        }
    }
    render(){
        let {skills_1 , skills_2} = this.state
        return(
            <section id="about" style={{minHeight: '80vh'}}> 
                <div className="row">

                    <div className="three columns">
                        <img className="profile-pic"  src="images/profilepic.jpg" alt="" />
                    </div>

                    <div className="nine columns main-col">

                        <h2>About Me</h2>

                        <p style={{marginLeft: "1em"}}>
                            Full Stack Web Developer with a passion for learning new languages and technologies. Having arrived in the United States from Vietnam seven years ago, I have an understanding of different cultures and can easily adapt to any work environment. Not only do I thrive in helping others and being a part of a team, but I have strong problem-solving skills, meet deadlines and am able to deliver quality products for clients.
                        </p>

                        <div className="row">

                            <div className="columns contact-details">

                                <h2>Contact Details</h2>
                                <p className="address" style={{marginLeft: "1em"}}>
                                    <span>
                                        <i className="fas fa-map-marker"></i> Houston, Texas
                                    </span> <br/>
                                    <span>
                                        <i className="fas fa-envelope"></i> vienpham2019@gmail.com
                                    </span>
                                </p>

                            </div>

                            <Resume /> 

                        </div> 

                        <div className="rows" style={{maxWidth: '30em'}}>
                            <h2>My Skills</h2>
                            <div className="columns skills">
                                <ul >
                                    {skills_1.map(s => 
                                       <li><i className="fas fa-circle"></i> {s}</li>
                                    )}
                                </ul>
                            </div>
                            <div className="columns skills">
                                <ul >
                                    {skills_2.map(s => 
                                       <li><i className="fas fa-circle"></i> {s}</li>
                                    )}
                                </ul>
                            </div>
                        </div>

                    </div> 
                </div>
            </section>
        )
    }
}

export default About