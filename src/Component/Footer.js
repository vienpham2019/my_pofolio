import React , {Component} from 'react'

class Footer extends Component {
    render(){
        return(
            <footer>

                <div className="row">

                    <div className="twelve columns">

                        <ul className="social-links">
                            <li>
                                <a href="https://medium.com/@vienpham2019" target="_">
                                    <i className="fab fa-blogger-b"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/vien-pham-7529931a5/" target="_">
                                    <i className="fa fa-linkedin"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/vienpham2019" target="_">
                                    <i className="fab fa-github"></i>
                                </a>
                            </li>
                        </ul>

                    </div>

                    <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>

                </div>

            </footer>
        )
    }
}

export default Footer