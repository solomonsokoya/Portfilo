import React, {Component} from 'react';
import Home from './components/home';
import Projects from './components/projects'
import {Route, Switch } from 'react-router-dom';



export default class MenuExampleSecondary extends Component {
constructor(props){
    super(props)

}



  render(){

    return(

       <div>
          <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/projects" component={Projects}/>
          </Switch>
          </main>
        </div>

      )
    }
}
