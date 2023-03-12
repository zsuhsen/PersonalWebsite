import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';



import './App.css';

import Home from './components/Home/Home';
import About from './components/About/About';
import ReactTutorial from './components/ReactTutorial/ReactTutorial';

const App = () => {
  return (
    <div className='app-container'>
      <Router>
          <div className='app-header'>
            <div className='routes'>
              <span><Link to="/">Home</Link></span> |&nbsp;
              <span><Link to="/about">About Zach</Link></span> |&nbsp;
              <span><Link to="/reacttutorial">React Tutorial</Link></span>
            </div>
          </div>

          <div className='app-body'>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/reacttutorial">
                <ReactTutorial />
              </Route>
            </Switch>
          </div>

          <div className='app-footer'>
            <div className='contact-info'>
              <span>Email: zsuhsen@gmail.com | Cell: (651) 328-7806</span>
              <span>https://www.linkedin.com/in/zsuhsen/</span>
            </div>
          </div>
        </Router>
      
    </div>
  );
}

export default App; 

