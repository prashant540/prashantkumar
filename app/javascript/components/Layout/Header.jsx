import React,{useState} from 'react';
import classes from './Header.module.css'
import logoImage from '../../../assets/images/logo.jpg'
import { Icon,Button} from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'
const Header = props => {
	function setValue(value){
     props.setOptionSelected(value);
	}
  return  <div className={classes.header}>
					  <div className="ui grid">
						  <div className="two wide column">
						    
						  </div>
						  <div className="twelve wide column">
						    <Button className="ocrbutton" onClick={() => setValue("ocr")}>OCR PDF</Button>
						    <Button className="pdfconvertbutton" onClick={() => setValue("pdfconvert")}>CONVERT TO PDF</Button>
						    <Button className="splitpdfbutton" onClick={() => setValue("splitpdf")}>SPLIT PDF</Button>
						    <Button className="mergepdfbutton" onClick={() => setValue("mergepdf")}>MERGE PDFs</Button>
						  </div>
						  <div className="two wide column">
						  </div>
			  	  </div>
          </div>
};
export default Header;