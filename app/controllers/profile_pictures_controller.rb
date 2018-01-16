class ProfilePicturesController < ActionController::Base
	class ProfilePicture; end
	def create
	  	
	  ProfilePicture.create(
	    avatar_id: params[:avatar_id],
	    user_id: current_user         # or however you retrieve the current user
	  )
	  flash[:notice] = 'Avatar updated.' # just a suggestion
	  redirect_to :back                  # just a suggestion
	end
  
end