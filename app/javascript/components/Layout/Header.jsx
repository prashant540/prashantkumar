import React,{useState} from 'react';
import classes from './Header.module.css'
import logoImage from '../../../assets/images/logo.jpg'
import tool from '../../../assets/images/tool.png'
import { Icon,Button} from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'
const Header = props => {
	function setValue(value){
    props.setOptionSelected(value);
    props.setDescriptionDetails(value);
	}
  return  <div className={classes.header}>
					  <div className="ui grid">
						  <div className="three wide column">
						    <div className={classes.logo} onClick={() => setValue("")}>Pdf-Tools</div>
						  </div>
						  <div className="ten wide column">
						    <div className={classes.menuItems}>
							    <div className={classes.ocrbutton} onClick={() => setValue("ocr")}>OCR PDF</div>
							    <div className={classes.pdfconvertbutton} onClick={() => setValue("convertpdf")}>CONVERT TO PDF</div>
							    <div className={classes.splitpdfbutton} onClick={() => setValue("splitpdf")}>SPLIT PDF</div>
							    <div className={classes.mergepdfbutton} onClick={() => setValue("mergepdf")}>MERGE PDFs</div>
						    </div>
						  </div>
						  <div className="three wide column">
						  </div>
			  	  </div>
          </div>
};
export default Header;