require 'file_utils'
class PdfFilesController < ApplicationController
  def ocr
    response = OcrUtil.new.exec(params)
  	render :json => "success".to_json, :status => 200
  end

  def download
    
  end

	def convert
  	
	end

	def merge
		
	end

	def split
  
	end
end
