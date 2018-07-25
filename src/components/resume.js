import React, {Component} from 'react';
import {Document, Page} from 'react-pdf';
import Nav from './nav';
import Footer from './footer';
import Pdf from '../images/DevResume.pdf'
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
    let scaleNum = 0.1;
    const {pageNumber} = this.state;
    return (<div className='gridContainer'>
      <Nav/>

      <div className='middleChild'>
        <Document scale ={scaleNum} height = {200}file={Pdf} onLoadSuccess={this.onDocumentLoad}>
          <Page pageNumber={pageNumber} scale ={0.8}/>
        </Document>
      </div>
      <Footer/>
    </div>)
  }
}

export default Resume
