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
	const menuItems = [{"itemName": "ocr", "className" : classes.ocrbutton , "title" : "OCR PDF"}, {"itemName": "convertpdf", "className" : classes.pdfconvertbutton, "title" : "CONVERT TO PDF"}, {"itemName" : "splitpdf", "className" : classes.splitpdfbutton, "title" : "SPLIT PDF"},{"itemName": "mergepdf", "className" : classes.mergepdfbutton,"title" : "MERGE PDFs"}]
  const headerClassName = `ui four item menu ${classes.headerMenu}`;
  return  (<div className={classes.header}>
					  <div className="ui grid">
						  <div className="three wide column">
						  </div>
						  <div className="ten wide column">
						     <div className={classes.logo} onClick={() => setValue("")}>PDF-TOOLS</div>
						  </div>
						  <div className="three wide column">
						  </div>
			  	  </div>
			  	  <div className={headerClassName}>
					    { 
					      menuItems.map(function(item,i){
					        return <a className="item" key={i} onClick={() => setValue(item["itemName"])}>{item["title"]}</a>
					      })
					    }
					  </div>
          </div>
        )
};
export default Header;