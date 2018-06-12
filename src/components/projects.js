import React, {Component} from 'react';
import {Image, Card, Transition} from 'semantic-ui-react';

import ceeLo from '../images/cee-lo.png'
import gigs from '../images/gigs.png'
import drinkUp from '../images/drinkup.png'
import Nav from './nav'
import Footer from './footer'

export default class Projects extends Component{
  constructor(props){
    super(props)
    this.state = {
      visible: true
    }
  }

  componentDidMount(){
    this.setState({
      visible: false
    })
  }

  render(){


    return(


      <div className='gridContainer'>
      <Nav/>

      <Card.Group centered className='middleChild' >
        <Transition animation='pulse' visible = {this.state.visible} duration='2000'>
        <Card color = 'grey' onClick  = {() => (window.location.replace("https://solomonsokoya.github.io/Cee-Lo/"))}>
          <Image size= 'massive' src={ceeLo} />
          <Card.Content textAlign='center'>
            <Card.Header className = 'projectHeader'>Cee-Lo App</Card.Header>
            <Card.Meta>March 2018</Card.Meta>
            <Card.Description>Japenese dice game</Card.Description>
         </Card.Content>
        </Card>
         </Transition>

         <Transition animation='pulse' visible = {this.state.visible} duration='2000'>
        <Card color = 'grey' onClick = {() => (window.location.replace("https://github.com/solomonsokoya/Giggs"))}>
          <Image size= 'massive' src={gigs} />
          <Card.Content textAlign='center'>
            <Card.Header className = 'projectHeader'>Giggs App</Card.Header>
            <Card.Meta>April 2018</Card.Meta>
            <Card.Description>Bridge the gap between recruiter and workers.</Card.Description>
         </Card.Content>
        </Card>
        </Transition>

        <Transition animation='pulse' visible = {this.state.visible} duration='2000'>
        <Card color = 'grey' onClick = {() => (window.location.replace("https://serene-badlands-82486.herokuapp.com"))}>
          <Image size= 'massive' src={drinkUp} />
          <Card.Content textAlign='center'>
            <Card.Header className = 'projectHeader'>Drink Up App</Card.Header>
            <Card.Meta>May 2018</Card.Meta>
            <Card.Description>Cocktail database where users can find recipes to their favorite drink</Card.Description>
         </Card.Content>
        </Card>
        </Transition>
      </Card.Group>
      <Footer/>
      </div>
      )

  }
}
