import React, {Component} from 'react';
import {Document, Page} from 'react-pdf';
import Nav from './nav';
import Footer from './footer';
import Pdf from '../images/DevResume.pdf'
import {Image, Header, Container} from 'semantic-ui-react';
class Resume extends Component {
  constructor(props) {
    super(props)
    this.state = {
      numPages: null,
      pageNumber: 1
    }

  }

  onDocumentLoad = ({numPages}) => {
    this.setState({numPages});
  }
  render() {

    const {pageNumber} = this.state;
    return (<div className='gridContainer'>
      <Nav/>

      <div className='middleChild'>
        <Document file={Pdf} onLoadSuccess={this.onDocumentLoad}>
          <Page pageNumber={pageNumber}/>
        </Document>
      </div>
      <Footer/>
    </div>)
  }
}

export default Resume
