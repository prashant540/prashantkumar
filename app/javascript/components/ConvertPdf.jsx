import React from "react";
import classes from './ConvertPdf.module.css';
import FileUpload  from './FileUpload';
const ConvertPdf = props => {
	const acceptedExtension = ".txt,.doc";
	const multiple = false;
  const [isInprogress,setIsInProgress] = React.useState(false);
	const [isFileReady,setIsFileReady] = React.useState(false);
	const fileDropText = "Drag 'n' drop a file here to initate pdf conversion, or click to select the file";
  return  <div className={classes.convertPdfPage}>
            <div>
						  <div className="ui grid">
						    <div className="three wide column"></div>
						    <div className="ten wide column">
						      <div className={classes.convertPdfContent}>
							      <div>
							        <FileUpload buttonName="Upload file to Convert" acceptedExtension={acceptedExtension} multiple={false} setIsInProgress={setIsInProgress} setIsFileReady={setIsFileReady} fileDropText={fileDropText} action="convert"/>
							      </div>
							      {
							    	  isInprogress ? 
							    	    (<div className={classes.convertPdfContentDiv}>
							    		     <div className="ui active inverted dimmer">
	                         <div className="ui text loader">Loading</div>
	                       </div>
	                      </div>)
	                      : (<div className={classes.convertPdfContentDiv}></div>)
							      }
								    {
								    	isFileReady? 
								    	(
		                    <div className={classes.convertPdfContentDiv}>
									    		<a href="/download" target="_blank"><i className="download icon"></i>Download</a>
									    	</div>)
								    	: (<div className={classes.convertPdfContentDiv}></div>)
								    }
								  </div>
						    </div>

						    <div className="three wide column"></div> 
						    </div>
						  </div>
			  	</div>
}
export default ConvertPdf