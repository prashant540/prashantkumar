import React from 'react'
import classes from './Workspace.module.css'
import Description from './Description'
import MainSpace from './MainSpace'
import Home from './Home'
import { Menu } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
const Workspace = props => {
  
	function setDescription() {
    let header = "header";
    let description = "description";
		let option = props.optionSelected;
		switch (option) {
      case "ocr":
        header = "OCR"
        description = "OCR stands for Optical Character Recongnition. Using this option you can upload any PDF files( scanned /true PDF) and generate text output of the PDF file."; break;
      case "pdfconvert":
        header = "Convert a file to PDF";
        description = "Using this option you can convert any of the given non-PDF file to PDF"; break;
      case "splitpdf":
        header = "Split a PDF file";
        description = "Using this option you can split a PDF into multiple PDFs"; break;
      case "mergepdf":
        header = "Merge PDFs";
        description = "Using this option you can merge multiple PDFs into a single PDF"; break;
      default: 
        header = "Home"
        description = "Home"
    }
    return [header,description];
	}
	let description = setDescription();
  return (<div className={classes.workspace}>
          {
            (props.optionSelected === "") ? 
              <div> <Home/> </div>
            :
              <div>
                <Description header={description[0]} description={description[1]}/>
                <MainSpace optionSelected={props.optionSelected}/>
              </div>
          }
          </div>
         )  
};
export default Workspace;