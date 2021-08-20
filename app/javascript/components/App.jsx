import React,{useState} from 'react'
import {Fragment} from 'react';
import Header from './Layout/Header'
import ReactDOM from 'react-dom';
import Workspace from './Workspace'
import classes from './App.module.css'
function App() {
	const [header,setHeader] = React.useState("");
	const [description, setDescription] = React.useState("");
	const [optionSelected, setOptionSelected] = useState("");
	function setDescriptionDetails(option) {
		let headerTitle = "";
		let descriptionTitle ="";
		switch (option) {
      case "ocr":
        headerTitle = "OCR"
        descriptionTitle = "OCR stands for Optical Character Recongnition. Using this option you can upload any PDF files( scanned /true PDF) and generate text output of the PDF file."; break;
      case "convertpdf":
        headerTitle = "Convert a file to PDF";
        descriptionTitle = "Using this option you can convert any of the given non-PDF file to PDF"; break;
      case "splitpdf":
        headerTitle = "Split a PDF file";
        descriptionTitle = "Using this option you can split a PDF into multiple PDFs"; break;
      case "mergepdf":
        headerTitle = "Merge PDFs";
        descriptionTitle = "Using this option you can merge multiple PDFs into a single PDF"; break;
      case "":
        headerTitle = "Home"
        descriptionTitle = "Home"
    }
    setHeader(headerTitle);
    setDescription(descriptionTitle);
	}
  return (
  	<div className={classes.app}>
      <Header optionSelected={optionSelected} setOptionSelected={setOptionSelected} setDescriptionDetails={setDescriptionDetails}/>
      <Workspace optionSelected={optionSelected} header={header} description={description} setOptionSelected={setOptionSelected} setDescriptionDetails={setDescriptionDetails}/>
    </div>
  );
}

export default App;
