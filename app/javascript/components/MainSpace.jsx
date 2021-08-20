
import React from "react";
import classes from './MainSpace.module.css';
import Ocr from './Ocr'
import ConvertPdf from './ConvertPdf'
import SplitPdf from './SplitPdf'
import MergePdf from './MergePdf'
const MainSpace = props => {
	function setSelectedComponent(selected){
		switch (selected) {
			case "ocr":
        return <Ocr/> ;
      case "convertpdf":
        return <ConvertPdf/> ;
      case "splitpdf":
        return <SplitPdf/> ;
      case "mergepdf":
        return <MergePdf/> ;
      default: 
        return <Ocr/> ;
      }
	};
	return  <div className="ui grid">
            <div className="two wide column"></div>
            <div className="twelve wide column">
              <div>
                 {setSelectedComponent(props.optionSelected)}
              </div>
           </div>
          <div className="two wide column"></div>
        </div>
}
export default MainSpace