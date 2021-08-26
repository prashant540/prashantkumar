import React,{useState,useCallback} from "react";
import {useDropzone} from 'react-dropzone'
import classes from './FileUpload.module.css'
import { Button } from "semantic-ui-react";
import axios from "axios";
const FileUpload = props => {
  const onDrop = useCallback(acceptedFiles => {
    fileChange(acceptedFiles);
  }, []);
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop, multiple: props.multiple})
  const uploadUrl = "/" + props.action;
  function fileChange(acceptedFiles) {
    console.log(acceptedFiles);
    props.setIsFileReady(false);
    if (acceptedFiles.length > 0) {
      for (let i = 0; i < acceptedFiles.length; i++) {
        props.setIsInProgress(true);
        uploadFile(acceptedFiles[i]);
      }
      acceptedFiles = [];
    }
  }

  function uploadFile(file) {
    let formData = new FormData();
    formData.append("file", file);
    axios.post(uploadUrl, formData)
      .then((response) => {
        if (response.status === 200) {
          setTimeout(function(){
            props.setIsInProgress(false);
            props.setIsFileReady(true);},2000
          );
          
        }else{
          props.setIsFileReady(false);
          props.setIsInProgress(false);
          // failureHandler(response, cardMessages.failed);
        }
      })
  }

  return(
   <div className={classes.fileUpload}>
      <div className={classes.fileDropInput}  {...getRootProps()}>
        <input {...getInputProps()} accept={props.acceptedExtension}/>
        {
          isDragActive ?
          <p>Drop the files here ...</p> :
          <p>{props.fileDropText}</p>
        }
      </div>
		</div>
	)
}
export default FileUpload