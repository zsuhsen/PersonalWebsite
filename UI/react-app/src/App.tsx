import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import './App.scss';

import Home from './components/Home/Home';
import About from './components/About/About';
import ReactTutorial from './components/ReactTutorial/ReactTutorial';
import Logo from './assets/svg-components/Logo';
import { ComponentProvider, ComponentProviders } from './providers/ComponentProvider';
import Tooltip from './common/Tooltip/Tooltip';
import ContactMe from './components/ContactMe/ContactMe';
import FlyIn from './common/FlyIn/FlyIn';

class App extends React.Component {
  private loaded: boolean = false;
  private showContactMe: boolean = false;
  private providers: ComponentProviders;

  private selectedRoute: number = 1;
  private routes: any = {
    home: '/',
    about: '/about',
    reactTutorial: '/reacttutorial'
  };

  constructor(props: any) {
    super(props);

    this.setInitialRoute();
  }

  setInitialRoute(): void {
    if (window.location.pathname !== this.routes.home) {
      window.location.pathname = this.routes.home;
    }

    this.selectedRoute = 1;
  }

  routeClick(route: number): void {
    this.selectedRoute = route;
    this.forceUpdate();
  }

  initProviders(providers?: ComponentProviders): void {
    if (this.loaded) {
        return;
    }
    
    if (providers) {
        this.providers = providers;
    }

    this.loaded = true;
  }

  toggleContactMe(): void {
    this.showContactMe = !this.showContactMe;
    this.forceUpdate();
  }

  render(): React.ReactNode {
    return (
      <div className='app-container'>
        <ComponentProvider initProviders={this.initProviders.bind(this)}>
          <div>
            <Router>
              <div className='nav-bar'>
                <div className='logo'>
                  <Tooltip message='Contact Me!' direction='right' styleOverrides={{color: '#575556'}}>
                    <Logo click={this.toggleContactMe.bind(this)} width={125} height={125}/>
                  </Tooltip>
                  <FlyIn open={this.showContactMe} width='50%' close={ this.toggleContactMe.bind(this) }>
                    <ContactMe></ContactMe>
                  </FlyIn>
                </div>
                <ul>
                  <li><Link className={(this.selectedRoute === 1 ? 'selected' : '')} onClick={() => this.routeClick(1)} to={this.routes.home}>Home</Link></li>
                  <li><Link className={(this.selectedRoute === 2 ? 'selected' : '')} onClick={() => this.routeClick(2)} to={this.routes.about}>About Zach</Link></li>
                  <li><Link className={(this.selectedRoute === 3 ? 'selected' : '')} onClick={() => this.routeClick(3)} to={this.routes.reactTutorial}>React Tutorial</Link></li>
                </ul>
              </div>
      
              <div className='app-body'>
                <Switch>
                  <Route exact path={this.routes.home}>
                    <Home />
                  </Route>
                  <Route path={this.routes.about}>
                    <About providers={this.providers} />
                  </Route>
                  <Route path={this.routes.reactTutorial}>
                    <ReactTutorial />
                  </Route>
                </Switch>
              </div>
            </Router>

            <div className='app-footer'>
              <div className='contact-info'>
                <Tooltip message='This does not have a function.' direction='right' styleOverrides={{color: '#575556'}}>
                  <Logo width={65} height={65}/>
                </Tooltip>
                <span className='padding-below'>zsuhsen@gmail.com | (651) 328-7806</span>
                <span>https://www.linkedin.com/in/zsuhsen/</span>
              </div>
            </div>
          </div>
        </ComponentProvider>
      </div>
    );
  }
}

export default App; 

