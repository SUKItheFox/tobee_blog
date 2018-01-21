class Upload < ActiveRecord::Base
	belongs_to :user

	mount_uploader :userfile, UserfileUploader

	def userfile
	end	
end
