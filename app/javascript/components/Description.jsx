
import React from "react";
import classes from './Description.module.css';
import ocrImage from '../../assets/images/ocr.png'
import { Icon } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'
const Description = props => {
    return(
      <div className="ui grid">
        <div className="two wide column"></div>
        <div className="twelve wide column">
          <div className="ui icon info message">
					  <Icon className="info circle icon"/>
					  <div className="content">
					    <div className="header">
					      {props.header}
					    </div>
					    <p>{props.description}</p>
					  </div>
					</div>
        </div>
        <div className="two wide column"></div>
      </div>
    );
}
export default Description