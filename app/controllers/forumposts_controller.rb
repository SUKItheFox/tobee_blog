class ForumpostsController < ApplicationController
	before_action :find_forumpost, only: [:show, :edit, :update, :destroy]
	before_action :authenticate_user!, except: [:index, :show]


	def index
		@forumposts = Forumpost.all.order("created_at DESC") 
	end	

	def show
		@forumpost = Forumpost.find(params[:id])
	end

	def new
		@forumpost = current_user.forumposts.build
	end	 

	def create
		@forumpost = current_user.forumposts.build(forumpost_params)

		if @forumpost.save
			redirect_to @forumpost
		else
			render 'new'
		end	
	end		

	def edit
	end 
	
	def update
		if @forumpost.update(forumpost_params)
			redirect_to @forumpost
		else
			render 'edit'
		end
	end

	def destroy
		@forumpost.destroy
		redirect_to forum_path
	end


	private

	def find_forumpost
		@forumpost = Forumpost.find(params[:id])
	end	

	def forumpost_params
		params.require(:forumpost).permit(:title, :content)
	end	
end
