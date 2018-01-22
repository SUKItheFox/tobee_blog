class CommentsController < ApplicationController
	before_action :authenticate_user!
	
	def new
  		@post = Post.new(params[:post])
	end



	def as_json(options = {})
    	super(options.merge(include: :user))
  	end
		
	def create
	    @post = Post.find(params[:post_id])
	    @comment = @post.comments.create(comment_params.merge(user_id: current_user.id))    
	    redirect_to post_path(@post)
	end

	def destroy
		@post = Post.find(params[:post_id])
		@comment = @post.comments.where(user_id: current_user.id).find(params[:id])
		@comment.destroy

		redirect_to post_path(@post)	
	end	

	private 

	def comment_params
	   params.require(:comment).permit(:user_id, :name, :body, :username)
	end

	def correct_user
	   @comment = current_user.comments.find_by(id: params[:id])
	     if @comment.nil?
	       flash[:alert] = "Not your comment!"
	       redirect_to :back
	     end
	end
end
