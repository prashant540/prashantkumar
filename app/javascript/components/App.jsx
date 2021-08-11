import React,{useState} from 'react'
import {Fragment} from 'react';
import Header from './Layout/Header'
import ReactDOM from 'react-dom';
import Workspace from './Workspace'
import classes from './App.module.css'
function App() {
	const [description, setDescription] = React.useState("");
	const [optionSelected, setOptionSelected] = useState("");
  return (
  	<div className={classes.app}>
      <Header optionSelected={optionSelected} setOptionSelected={setOptionSelected}/>
      <Workspace optionSelected={optionSelected}/>
    </div>
  );
}

export default App;
