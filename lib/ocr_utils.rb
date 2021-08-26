class OcrUtil
	OCR_SPACE_API_KEY = "e714ced06488957"
	def exec(params)
		input_file_path = "#{Rails.root}/tmp/ocr/sample.pdf"
        resource = OcrSpace::Resource.new(apikey: OCR_SPACE_API_KEY)
        file_content = params[:file].tempfile.read.force_encoding("UTF-8")
        File.open(input_file_path, 'w') { |file| file.write(file_content) }
        response = resource.convert file: input_file_path
        puts "------------------------"
        p response
    # output_file_path = "#{Rails.root}/tmp/ocr/sample.txt"
    # File.open(output_file_path, 'w') { |file| file.write(file_content) }
    # File.delete(input_file_path) if File.exist?(output_file_path)
  end
end