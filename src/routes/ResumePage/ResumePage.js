import React, { Component } from "react";

// throttle
import throttle from "lodash.throttle"

// css
import "../../assets/css/everything.css";

// pdf
import Resume from "../../assets/img/Resume.pdf";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default class ResumePage extends Component {
  state = {
    numPages: null,
    PDFWidth: null
  };
  myInput = React.createRef()

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  componentDidMount() {
    // setting width at initial
    this.setPDFWidth()
    // event listener when window is resized
    window.addEventListener('resize', this.setPDFWidth)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setPDFWidth)
  }

  setPDFWidth = () => {
    const width = this.myInput.current.offsetWidth
    this.setState({ PDFWidth: width })
  }

  render() {
    const { numPages, PDFWidth } = this.state;
  
    return (
      <section className="resumePage">
        <div ref={this.myInput}>
          <Document
            file={Resume}
            onLoadSuccess={this.onDocumentLoadSuccess}
          >
            {[1,2].map(page => (
              <Page
              pageNumber={page}
              width={PDFWidth} />
            ))}
          </Document>
        </div>
      </section>
    );
  }  
}