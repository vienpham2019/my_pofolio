import React , {Component} from 'react'

import Header from './Component/Header'
import About from './Component/About'
import Projects from './Component/Projects'
import Footer from './Component/Footer'

class App extends Component {
  render(){
    return(
      <div>
        <Header />
        <About />
        <Projects />
        <Footer /> 
      </div>
    )
  }
}

export default App 