import React from "react";
import classes from './Home.module.css'
import Card from './Card'
const Home = props => {
	const options = ["ocr","convertpdf","splitpdf","mergepdf"]
  return <div className="ui grid">
            <div className="two wide column"></div>
		        <div className="twelve wide column">
		          <div className={classes.homeTitle}>One Stop Solution For All Your PDF Need</div>
		          <div className={classes.homePage}>
		            {
		            	options.map(function(item,i){
		            		return <Card setOptionSelected={props.setOptionSelected} key={i} cardTitle={item} setDescriptionDetails={props.setDescriptionDetails}/>
		            	})
		            }
		          </div>
		        </div>
		        <div className="two wide column"></div>
					  
					</div>
}
export default Home