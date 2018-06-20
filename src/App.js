import React, {Component} from 'react';
import Home from './components/home';
import Projects from './components/projects';
import Resume from './components/resume';
import {Route, Switch, HashRouter} from 'react-router-dom';
import img from './images/gigs.png';

export default class MenuExampleSecondary extends Component {

  render() {

    return (<HashRouter>
      <div>
        <meta property="og:image" content={img}></meta>
        <main>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/resume" component={Resume}/>
          </Switch>
        </main>
      </div>
    </HashRouter>)
  }
}
