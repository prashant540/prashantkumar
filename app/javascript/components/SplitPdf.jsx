import React from "react";
import classes from './SplitPdf.module.css';
import FileUpload  from './FileUpload';
const SplitPdf = props => {
	const acceptedExtension = ".pdf";
	const multiple = false;
  const [isInprogress,setIsInProgress] = React.useState(false);
	const [isFileReady,setIsFileReady] = React.useState(false);
	const fileDropText = "Drag 'n' drop a file here to initate pdf split, or click to select the file";
  return  <div className={classes.splitPdfPage}>
            <div>
						  <div className="ui grid">
						    <div className="three wide column"></div>
						    <div className="ten wide column">
						      <div className={classes.splitPdfContent}>
							      <div>
							        <FileUpload buttonName="Upload file to split" acceptedExtension={acceptedExtension} multiple={false} setIsInProgress={setIsInProgress} setIsFileReady={setIsFileReady} fileDropText={fileDropText} action="split"/>
							      </div>
							      {
							    	  isInprogress ? 
							    	    (<div className={classes.splitPdfContentDiv}>
							    		     <div className="ui active inverted dimmer">
	                         <div className="ui text loader">Loading</div>
	                       </div>
	                      </div>)
	                      : (<div className={classes.splitPdfContentDiv}></div>)
							      }
								    {
								    	isFileReady? 
								    	(
		                    <div className={classes.splitPdfContentDiv}>
									    		<a href="/download" target="_blank"><i className="download icon"></i>Download</a>
									    	</div>)
								    	: (<div className={classes.splitPdfContentDiv}></div>)
								    }
								  </div>
						    </div>

						    <div className="three wide column"></div> 
						    </div>
						  </div>
			  	</div>
}
export default SplitPdf