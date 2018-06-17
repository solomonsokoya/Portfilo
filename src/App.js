import React, {Component} from 'react';
import Home from './components/home';
import Projects from './components/projects'
import {Route, Switch, HashRouter } from 'react-router-dom';



export default class MenuExampleSecondary extends Component {




  render(){

    return(

       <div>
          <main>
          <HashRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/projects" component={Projects}/>
          </Switch>
          </HashRouter>
          </main>
        </div>

      )
    }
}