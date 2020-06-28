import React , {Component} from 'react'

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
                <div class="row">

                    <div class="three columns">
                        <img class="profile-pic"  src="images/profilepic.jpg" alt="" />
                    </div>

                    <div class="nine columns main-col">

                        <h2>About Me</h2>

                        <p style={{marginLeft: "1em"}}>
                            Full Stack Web Developer with a passion for learning new languages and technologies. Having arrived in the United States from Vietnam seven years ago, I have an understanding of different cultures and can easily adapt to any work environment. Not only do I thrive in helping others and being a part of a team, but I have strong problem-solving skills, meet deadlines and am able to deliver quality products for clients.
                        </p>

                        <div class="row">

                            <div class="columns contact-details">

                                <h2>Contact Details</h2>
                                <p class="address" style={{marginLeft: "1em"}}>
                                    <span>
                                        <i class="fas fa-map-marker"></i> Houston, Texas
                                    </span> <br/>
                                    <span>
                                        <i class="fas fa-phone"></i> (502) 296 0606
                                    </span><br/>
                                    <span>
                                        <i class="fas fa-envelope"></i> vienpham2019@gmail.com
                                    </span>
                                </p>

                            </div>

                            <div class="columns download">
                                <p>
                                    <a href="#" class="button"><i class="fa fa-download"></i>Download Resume</a>
                                </p>
                            </div>

                        </div> 

                        <div className="rows" style={{maxWidth: '30em'}}>
                            <h2>My Skills</h2>
                            <div className="columns skills">
                                <ul >
                                    {skills_1.map(s => 
                                       <li><i class="fas fa-circle"></i> {s}</li>
                                    )}
                                </ul>
                            </div>
                            <div className="columns skills">
                                <ul >
                                    {skills_2.map(s => 
                                       <li><i class="fas fa-circle"></i> {s}</li>
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