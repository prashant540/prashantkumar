import React from 'react';
import classes from './Header.module.css'
import logoImage from '../../../assets/images/logo.jpg'
import { Button, Icon } from "semantic-ui-react";

const Header = props => {
  return  <div className={classes.header}>
					  <div className="ui grid">
						  <div className="two wide column">
						    <img src={logoImage} className={classes.logo}/>
						  </div>
						  <div className="twelve wide column">
						    <Button className="ocrbutton"><Icon name="copy outline icon" size='large' />OCR File </Button>
						    <Button className="pdfconvertbutton"><Icon name="file pdf outline icon" size='large' /> Convert to PDF</Button>
						    <Button className="splitpdfbutton"><Icon name="file pdf outline icon" size='large'/> Split a PDF</Button>
						    <Button className="mergepdfbutton"><Icon name="file pdf outline icon" size='large' /> Merge PDFs</Button>
						    <Button className="rotatepdfbutton"><Icon name="file pdf outline icon" size='large' />Rotate a PDF</Button>
						  </div>
						  <div className="two wide column">
						  </div>
			  	  </div>
          </div>
};
export default Header;