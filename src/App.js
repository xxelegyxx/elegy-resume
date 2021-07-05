import './App.css';
import React from 'react';
import NavMenu from './Components/NavMenu';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

function App() {

  return (
   <div>
     <Router>
        <NavMenu/>
        <Switch>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/projects">
            <Projects/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route> 
        </Switch>

        
        
        
     </Router>
    
     {/* <h1>Elegy</h1> */}
    
     
   </div>
  );
}

export default App;
