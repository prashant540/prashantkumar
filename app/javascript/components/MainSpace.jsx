
import React from "react";
import classes from './MainSpace.module.css';
const MainSpace = props => {
  return <div className="ui grid">
					  <div className="two wide column"></div>
					  <div className="twelve wide column">
              <div className="ui segment">
								<div className="ui two column very relaxed grid">
								    <div className="column">
								      <p>A</p>
								      <p>B</p>
								      <p>C</p>
								      <p>D</p>
								    </div>
								    <div className="column">
								      <p>E</p>
								      <p>F</p>
								      <p>G</p>
								      <p>H</p>
								    </div>
								  </div>
								<div className="ui vertical divider">
								</div>
						  </div>
					  </div>
					  <div className="two wide column"></div>
					</div>
}
export default MainSpace