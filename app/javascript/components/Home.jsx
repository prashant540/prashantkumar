import React from "react";
import classes from './Home.module.css'
import Card from './Card'
import Slider from "react-slick";
import ocrImage from '../../assets/images/ocr.png';
import convertPdfImage from '../../assets/images/convertpdf.png';
import splitPdfImage from '../../assets/images/splitpdf-1.png';
import mergePdfImage from '../../assets/images/mergepdf.png'
const Home = props => {
	const options = [{"itemName": "ocr","title" : "OCR a PDF file", "image" : ocrImage,"imageHeight": "100px", "imageWidth" : "100px", "description" : "OCR stands for Optical Character Recongnition. Using this option you can upload any PDF files( scanned /true PDF) and generate text output of the PDF file."},
	                 {"itemName": "convertpdf","title" : "Convert a file to PDF", "image" : convertPdfImage, "imageHeight": "100px", "imageWidth" : "218px", "description" : "Using this option you can convert any of the given non-PDF file to PDF"},
	                 {"itemName": "splitpdf","title" : "Split a PDF file into multiple", "image" : splitPdfImage, "imageHeight": "110px", "imageWidth" : "180px", "description" : "Using this option you can split a PDF into multiple PDFs"},
	                 {"itemName": "mergepdf","title" : "Merge multiple PDFs to one", "image" : mergePdfImage,"imageHeight": "120px", "imageWidth" : "150px", "description" : "Using this option you can merge multiple PDFs into a single PDF"}];
	const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  function setOption(value){
  	props.setOptionSelected(value);
  	props.setDescriptionDetails(value);
  }
  return <div className="ui grid">
            <div className="two wide column"></div>
		        <div className="twelve wide column">
		          <div className={classes.homeTitle}>One Stop Solution For All Your PDF Need</div>
		          <div className={classes.homePage}>
		            <Slider {...sliderSettings} className={classes.slider}>
				          {
				            options.map(function(item,i){
				              return  <div className="ui grid">
				                        <div className="four wide column">
				                          <div className={classes.item} onClick={() => setOption(item.itemName)}>
				                            <div className={classes.cardImageDiv}><img className={classes.cardImage} src={item.image}/></div>
				                          </div>
				                        </div>
				                        <div className="twelve wide column">
				              
				                            <div className={classes.cardTitle}>{item.title}</div>
				                            <br/>
				                            <br/>
				                            <br/>
				                          
				                            <div className={classes.cardDescription}>{item.description}</div>
				                         
				                        </div>
				                        <br/>
				                      </div>
				              })
				          }
			          </Slider>

		          </div>
		        </div>
		        <div className="two wide column"></div>
					  
					</div>
}
export default Home