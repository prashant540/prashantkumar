import React from "react";
import classes from './Ocr.module.css';
import FileUpload  from './FileUpload';
import { Button, Icon } from 'semantic-ui-react'
const Ocr = props => {
	const acceptedExtension = ".pdf"
	const multiple = false;
	const [isInprogress,setIsInProgress] = React.useState(false);
	const [isFileReady,setIsFileReady] = React.useState(false);
	const fileDropText = "Drag 'n' drop a file here to initate ocr process, or click to select the file"
  return  <div className={classes.ocrPage}>
            <div>
						  <div className="ui grid">
						    <div className="three wide column"></div>
						    <div className="ten wide column">
						      <div className={classes.ocrContent}>
							      <div>
							        <FileUpload buttonName="Upload file to ocr" acceptedExtension={acceptedExtension} multiple={false} setIsInProgress={setIsInProgress} setIsFileReady={setIsFileReady} fileDropText={fileDropText} action="ocr"/>
							      </div>
							      {
							    	  isInprogress ? 
							    	    (<div className={classes.ocrContentDiv}>
							    		     <div className="ui active inverted dimmer">
	                         <div className="ui text loader">Loading</div>
	                       </div>
	                      </div>)
	                      : (<div className={classes.ocrContentDiv}></div>)
							      }
								    {
								    	isFileReady? 
								    	(
		                    <div className={classes.ocrContentDiv}>
									    		<Button color='primary'>
                                                   <Icon name='download' /> Download
    											</Button>
									    	</div>)
								    	: (<div className={classes.ocrContentDiv}></div>)
								    }
								  </div>
						    </div>

						    <div className="three wide column"></div> 
						    </div>
						  </div>
			  	</div>
}
export default Ocr