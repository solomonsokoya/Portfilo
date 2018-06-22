import React, {Component} from 'react';
import {Image, Card, Transition, Dimmer, Icon} from 'semantic-ui-react';

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

  handleShow1 = () => this.setState({ active1: true });
  handleHide1 = () => this.setState({ active1: false });
  handleShow2 = () => this.setState({ active2: true });
  handleHide2 = () => this.setState({ active2: false });
  handleShow3 = () => this.setState({ active3: true });
  handleHide3 = () => this.setState({ active3: false });

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
        <Card color = 'grey' onClick = {() => (window.location.replace("https://github.com/solomonsokoya/Cee-Lo"))}>
          <Dimmer.Dimmable
        as={Image}
        dimmed={this.state.active1}
        dimmer={{ active: this.state.active1, content: ( <div>
        <Icon name = 'js'/>
        <Icon name = 'css3'/>
        <Icon name = 'html5'/>
        <Icon name = 'node'/>
        <Icon name = 'github'/>
      </div>)}}
        onMouseEnter={this.handleShow1}
        onMouseLeave={this.handleHide1}
        size='massive'
        src={ceeLo}
      />
          <Card.Content textAlign='center'>
            <Card.Header className = 'projectHeader'>Cee-Lo App</Card.Header>
            <Card.Meta>March 2018</Card.Meta>
            <Card.Description>Japenese dice game using JQuery, Javascript, HTML, CSS, and Node.js.</Card.Description>
         </Card.Content>
        </Card>
         </Transition>

         <Transition animation='pulse' visible = {this.state.visible} duration='2000'>
        <Card color = 'grey' onClick = {() => (window.location.replace("https://github.com/solomonsokoya/Giggs"))}>
             <Dimmer.Dimmable
        as={Image}
        dimmed={this.state.active2}
        dimmer={{ active: this.state.active2, content: ( <div>
        <Icon name = 'github'/>
        <Icon name = 'npm'/>
        <Icon name = 'js'/>
        <Icon name = 'node'/>
      </div>)}}
        onMouseEnter={this.handleShow2}
        onMouseLeave={this.handleHide2}
        size='massive'
        src={gigs}
      />
          <Card.Content textAlign='center'>
            <Card.Header className = 'projectHeader'>Giggs App</Card.Header>
            <Card.Meta>April 2018</Card.Meta>
            <Card.Description>Job posting app using Node.js, Express, EJS, and CSS3. Used the MVC framework to build my backend interactions. </Card.Description>
         </Card.Content>
        </Card>
        </Transition>

        <Transition animation='pulse' visible = {this.state.visible} duration='2000'>
        <Card color = 'grey' onClick = {() => (window.location.replace("https://github.com/solomonsokoya/DrinkUpRefactored"))}>
            <Dimmer.Dimmable
        as={Image}
        dimmed={this.state.active3}
        dimmer={{ active: this.state.active3, content: ( <div>
        <Icon name = 'react'/>
        <Icon name = 'node'/>
        <Icon name = 'js'/>
      </div>)}}
        onMouseEnter={this.handleShow3}
        onMouseLeave={this.handleHide3}
        size='massive'
        src={drinkUp}
      />
          <Card.Content textAlign='center'>
            <Card.Header className = 'projectHeader'>Drink Up App</Card.Header>
            <Card.Meta>May 2018</Card.Meta>
            <Card.Description> A full stack app where users can find recipes to their favorite drink. Made fetch calls to cocktailsDB API using Javascript, REACT, CSS, Node, and Express. </Card.Description>
         </Card.Content>
        </Card>
        </Transition>
      </Card.Group>
      <Footer/>
      </div>
      )

  }
}
