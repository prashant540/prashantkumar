import React from 'react'
import classes from './Workspace.module.css'
import Description from './Description'
import MainSpace from './MainSpace'
import { Menu } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
const Workspace = props => {
  return <div className={classes.workspace}>
            <Description/>
            <MainSpace/>
				 </div>
};
export default Workspace;