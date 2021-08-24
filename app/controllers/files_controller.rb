class FilesController < ApplicationController
  def ocr
  	puts "========triggered OCR request============="
  	puts params
  	render :json => "success".to_json, :status => 200
  end

  def download
  	file_path = "#{Rails.root}/tmp/ocr/sample.txt"
  	send_file file_path, :disposition => 'attachment'
  end

	def convert
	
  	puts params
  	render :json => "success".to_json, :status => 200
	end

	def merge
		
  	puts params
  	render :json => "success".to_json, :status => 200
	end

	def split

  	puts params
  	render :json => "success".to_json, :status => 200
	end
end
