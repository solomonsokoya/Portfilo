import React, {Component} from 'react';
import {Document} from 'react-pdf';
import Nav from './nav';
import Footer from './footer';
import Pdf from '../images/DevResume.pdf'

class Resume extends Component {

  render() {
    return (<div className='gridContainer'>
      <Nav routeTo={this.handleRoutes}/>

      <div className='middleChild'>
        <Document file="https://files.acrobat.com/a/preview/849165fd-a408-4afa-8a61-a29cdcb00ec2"/>
      </div>
      <Footer/>
    </div>)
  }
}

export default Resume
