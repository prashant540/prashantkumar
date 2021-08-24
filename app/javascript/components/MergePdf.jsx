import React from "react";
import classes from './MergePdf.module.css';
import FileUpload  from './FileUpload';
const MergePdf = props => {
	const acceptedExtension = ".pdf";
	const multiple = false;
  const [isInprogress,setIsInProgress] = React.useState(false);
	const [isFileReady,setIsFileReady] = React.useState(false);
  return  <div className={classes.mergePdfPage}>
            <div>
						  <div className="ui grid">
						    <div className="three wide column"></div>
						    <div className="ten wide column">
						      <div className={classes.mergePdfContent}>
							      <div>
							        <FileUpload buttonName="Upload files to Merge" acceptedExtension={acceptedExtension} multiple={true} setIsInProgress={setIsInProgress} setIsFileReady={setIsFileReady} action="merge"/>
							      </div>
							      {
							    	  isInprogress ? 
							    	    (<div className={classes.mergePdfContentDiv}>
							    		     <div className="ui active inverted dimmer">
	                         <div className="ui text loader">Loading</div>
	                       </div>
	                      </div>)
	                      : (<div className={classes.mergePdfContentDiv}></div>)
							      }
								    {
								    	isFileReady? 
								    	(
		                    <div className={classes.mergePdfContentDiv}>
									    		<a href="/download" target="_blank"><i className="download icon"></i>Download</a>
									    	</div>)
								    	: (<div className={classes.mergePdfContentDiv}></div>)
								    }
								  </div>
						    </div>

						    <div className="three wide column"></div> 
						    </div>
						  </div>
			  	</div>
}
export default MergePdf