import React, {Component} from 'react';
import Nav from './nav'
import Aboutme from './aboutme'
import Footer from './footer'



export default class Home extends Component {
constructor(props){
    super(props)

    this.handleRoutes = this.handleRoutes.bind(this);
  }

  handleRoutes(e){
    this.props.history.push(e)
  }

  render(){
    console.log(this.props.history)
    return(
      <div className = 'gridContainer'>
        <Nav routeTo = {this.handleRoutes}/>
        <Aboutme/>
        <Footer/>
      </div>
      )
  }
}
