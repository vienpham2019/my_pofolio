import React , {Component} from 'react'

class Header extends Component {
    render(){
        return(
            <header id="home">
                <nav id="nav-wrap">

                    <a class="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                    <a class="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>

                    <ul id="nav" class="nav">
                        <li class="current">
                            <a class="smoothscroll" href="#home">
                                <i class="fas fa-home"></i> Home
                            </a>
                        </li>
                        <li>
                            <a class="smoothscroll" href="#about">
                                <i class="fas fa-address-card"></i> About
                            </a>
                        </li>
                        <li>
                            <a class="smoothscroll" href="#projects">
                                <i class="fas fa-file"></i> Projects
                            </a>
                        </li>
                    </ul>

                </nav> 

                <div class="row banner">
                    <div class="banner-text">
                        <h1 
                            class="responsive-headline animate__animated animate__fadeInLeft"
                            style={{animationDuration: '2s'}}
                        >Hi. I'm Vien Pham</h1>
                        <h2 
                            className="animate__animated animate__fadeInRight"
                            style={{animationDuration: '2s'}}
                        >A Web Developer</h2>
                        <hr />
                        <ul className="social">
                            <li 
                                class="animate__animated animate__fadeInUpBig" 
                                style={{animationDuration: '2s', animationDelay: '0.2s'}}
                            >
                                <a href="https://medium.com/@vienpham2019" target="_">
                                    <i class="fab fa-blogger-b"></i>
                                </a>
                            </li>
                            <li
                                class="animate__animated animate__fadeInUpBig" 
                                style={{animationDuration: '2s', animationDelay: '0.4s'}}
                            >
                                <a href="https://www.linkedin.com/in/vien-pham-7529931a5/" target="_">
                                    <i class="fa fa-linkedin"></i>
                                </a>
                            </li>
                            <li
                                class="animate__animated animate__fadeInUpBig" 
                                style={{animationDuration: '2s', animationDelay: '0.6s'}}
                            >
                                <a href="https://github.com/vienpham2019" target="_">
                                    <i class="fab fa-github"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <p class="scrolldown">
                    <a class="smoothscroll" href="#about"><i class="icon-down-circle"></i></a>
                </p>
            </header>
        )
    }
}

export default Header