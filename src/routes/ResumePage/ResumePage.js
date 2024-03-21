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
    pageNumber: '1-' + this.state.numPages, // Set to a range from the first page to the last page
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
    window.addEventListener('resize', throttle(this.setPDFWidth, 500))
  }

  componentWillUnmount() {
    window.removeEventListener('resize', throttle(this.setPDFWidth, 500))
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
            {[...Array(numPages)].map((_, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} width={PDFWidth} />
            ))}
          </Document>
        </div>
      </section>
    );
  }  
}
