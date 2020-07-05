import React , {Component} from 'react'

class Header extends Component {
    render(){
        return(
            <header id="home">
                <nav id="nav-wrap">

                    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                    <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>

                    <ul id="nav" className="nav">
                        <li className="current">
                            <a className="smoothscroll" href="#home">
                                <i className="fas fa-home"></i> Home
                            </a>
                        </li>
                        <li>
                            <a className="smoothscroll" href="#about">
                                <i className="fas fa-address-card"></i> About
                            </a>
                        </li>
                        <li>
                            <a className="smoothscroll" href="#projects">
                                <i className="fas fa-file"></i> Projects
                            </a>
                        </li>
                    </ul>

                </nav> 

                <div className="row banner">
                    <div className="banner-text">
                        <h1 
                            className="responsive-headline animate__animated animate__fadeInLeft"
                            style={{animationDuration: '2s'}}
                        >Hi. I'm Vien Pham</h1>
                        <h2 
                            className="animate__animated animate__fadeInRight"
                            style={{animationDuration: '2s'}}
                        >A Web Developer</h2>
                        <hr />
                        <ul className="social">
                            <li 
                                className="animate__animated animate__fadeInUpBig" 
                                style={{animationDuration: '2s', animationDelay: '0.2s'}}
                            >
                                <a href="https://medium.com/@vienpham2019" target="_">
                                    <i className="fab fa-blogger-b"></i>
                                </a>
                            </li>
                            <li
                                className="animate__animated animate__fadeInUpBig" 
                                style={{animationDuration: '2s', animationDelay: '0.4s'}}
                            >
                                <a href="https://www.linkedin.com/in/vien-pham-7529931a5/" target="_">
                                    <i className="fa fa-linkedin"></i>
                                </a>
                            </li>
                            <li
                                className="animate__animated animate__fadeInUpBig" 
                                style={{animationDuration: '2s', animationDelay: '0.6s'}}
                            >
                                <a href="https://github.com/vienpham2019" target="_">
                                    <i className="fab fa-github"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <p className="scrolldown">
                    <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
                </p>
            </header>
        )
    }
}

export default Header