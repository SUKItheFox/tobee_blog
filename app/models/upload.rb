class Upload < ActiveRecord::Base
	
	mount_uploader :userfile, UserfileUploader

	def userfile
	end	
end
