import React, {Component} from 'react';
import { Image, Header, Container} from 'semantic-ui-react';
import Me from '../images/me.jpg'


export default class AboutMe extends Component {

  render(){

    return(
      <div className='middleChild'>
        <Image circular centered size='small' src = {Me}/>
        <Header as='h2' icon textAlign='center'>
          <Header.Content>Solomon Sokoya</Header.Content>
        </Header>
        <Container textAlign='center'> Web developer with a background in Computer Engineering. My enthusiasm in my travel experience led me to General Assembly where I was thoroughly immersed in the field. I am proficient in <span>Javascript</span> and acquired front-end skills in <span>CSS3</span>, <span>HTML5</span>, <span>JQuery</span>, <span>React.js</span>, and back-end skills in <span>Rails</span>, <span>Node.js</span>, <span> Firebase </span>, and <span>Express</span>. I was able to work in a community with peers who continue to push me to become a well-rounded Web Developer. I am looking to bring my experiences to an organization that encourages growth and professional development.</Container>
      </div>
      )
      }
    }
