
import React from "react";
import classes from './Description.module.css';
const Description = props => {
  return <div className="ui grid">
					  <div className="two wide column"></div>
					  <div className="twelve wide column">
					    <div className="ui info message">
							  <div className="header">
							    {props.children}
							  </div>
							  <ul className="list">
							    
							  </ul>
							</div>
					  </div>
					  <div className="two wide column"></div>
					</div>
}
export default Description