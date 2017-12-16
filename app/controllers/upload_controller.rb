class UploadController < ApplicationController
	
  def index
  	
  end

  def show
  	
  end

  def uploadFile
  	uploadedFile = params[:upload][:file]
  	File.open(Rails.root.join('public','files', uploadedFile.original_filename), 'wb') do |f|
  		f.write(uploadedFile.read)
  	end
  	redirect_to current_user	

  end

  def downloadFile
  	fileName = params[:download][:file].original_filename
  	send_file Rails.root.join('public','files', fileName)
  end	
end
