class UploadController < ApplicationController
	
  def index
  	
  end

  def create
    @upload = Upload.new(upload_params)
    
    if @upload.save
      redirect_to @upload, :notice => "Thanks for your upload!"
    else
      redirect_to root_path, :notice => "Something went wrong!"
    end 
    
  end

  def show
  	
  end

  
    
  def download
      upload = Upload.find(params[:id])
      send_file upload.uploaded.path,
                  :filename => upload.uploaded_file_name,
                  :type => upload.uploaded_content_type,
                  :disposition => 'attachment'
      flash[:notice] = "Your file has been downloaded"
  end	

  private
    def upload_params
      params.require(:upload).permit(:userfile, :id, :description)
    end 
end
