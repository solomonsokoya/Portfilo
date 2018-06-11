import React, {Component} from 'react';
import {Image, Card} from 'semantic-ui-react';
import ex from '../images/centered-paragraph.png'
import Nav from './nav'

export default class Projects extends Component{

  render(){

    return(

      <div>
      <Nav/>

      <Card.Group centered>
        <Card color = 'grey'>
          <Image size= 'massive' src={ex} />
          <Card.Content>
            <Card.Header>Cee-Lo App</Card.Header>
            <Card.Meta>March 2018</Card.Meta>
            <Card.Description>Japenese dice game</Card.Description>
         </Card.Content>
        </Card>
        <Card color = 'grey'>
          <Image size= 'massive' src={ex} />
          <Card.Content>
            <Card.Header>Giggs App</Card.Header>
            <Card.Meta>April 2018</Card.Meta>
            <Card.Description>Bridge the gap between recruiter and workers.</Card.Description>
         </Card.Content>
        </Card>
        <Card color = 'grey'>
          <Image size= 'massive' src={ex} />
          <Card.Content>
            <Card.Header>Drink Up App</Card.Header>
            <Card.Meta>May 2018</Card.Meta>
            <Card.Description>Cocktail database where users can find recipes to their favorite drink</Card.Description>
         </Card.Content>
        </Card>

      </Card.Group>
      </div>
      )

  }
}
