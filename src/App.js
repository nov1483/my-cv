import { Routes, Route, useLocation } from 'react-router-dom';
import { useTransition, animated } from "react-spring";

import About from './components/about';
import Footer from './components/footer';
import Header from './components/header-nav';
import Home from './components/home';
import Projects from './components/projects';
import Skills from './components/skills';
import Contacts from './components/contacts';
import './App.css';
import './media.css'

function App() {
  const location = useLocation()
  const transitions = useTransition(location, {
    from:{opacity: 0, transform : 'translateX(100%)',},
    enter:{opacity: 1, transform : 'translateX(0%)',},
    leave:{opacity: 0, transform : 'translateX(-100%)',},
  })

  return (
    <>
      <Header/>
      <main style={{position : 'relative'}}>
        { transitions((props, item) => (
          <animated.div className='animated' style={props}>
            <div style={{position : 'absolute', width : '100%',}}>
              <Routes location={item}>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/skills" element={<Skills/>} />
                <Route path="/projects" element={<Projects/>} />
                <Route path="/contacts" element={<Contacts/>} />
              </Routes>
            </div>
          </animated.div>))}
  
      </main>
      <Footer/>
    </>
  
  )
}

export default App;
