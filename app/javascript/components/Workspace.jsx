import React from 'react'
import classes from './Workspace.module.css'
import Description from './Description'
import MainSpace from './MainSpace'
import Home from './Home'
import { Menu } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
const Workspace = props => {
  
  return (<div className={classes.workspace}>
          {
            (props.optionSelected === "") ? 
              <div><Home setOptionSelected={props.setOptionSelected} setDescriptionDetails={props.setDescriptionDetails}/></div>
            :
              <div>
                <Description header={props.header} description={props.description}/>
                <MainSpace optionSelected={props.optionSelected}/>
              </div>
          }
          </div>
         )  
};
export default Workspace;