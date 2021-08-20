import React,{useState} from 'react'
import {Fragment} from 'react';
import ReactDOM from 'react-dom';
import classes from './Card.module.css'
import ocrImage from '../../assets/images/ocr.png'
import convertPdf from '../../assets/images/convertpdf.png'
import splitPdf from '../../assets/images/splitpdf-1.png'
import mergePdf from '../../assets/images/mergepdf.png'
function Card(props) {
	const itemMap = {"ocr" : {"title" : "OCR PDF", "image" : ocrImage, "style": classes.ocrCardStyle }, "convertpdf" : {"title" : "Convert to PDF","image" : convertPdf, "style": classes.pdfConvertStyle}, "mergepdf" : {"title" : "Merge PDFs", "image" : mergePdf, "style" : classes.mergePdfStyle}, "splitpdf" : {"title" : "Split PDF", "image" : splitPdf, "style" : classes.splitPdfStyle}}
  function setOption(value){

  	props.setOptionSelected(value);
  	props.setDescriptionDetails(value);
  }
  return (
  	<div className={classes.card} onClick={() => setOption(props.cardTitle)}>
  	  <div className={classes.cardTitle}>{itemMap[props.cardTitle]["title"]}</div>
      <hr className={classes.horizontalLine}/>
      <div className={classes.cardValue}>
        <img className={itemMap[props.cardTitle]["style"]} src={itemMap[props.cardTitle]["image"]}/>
      </div>
    </div>
  );
}

export default Card;
