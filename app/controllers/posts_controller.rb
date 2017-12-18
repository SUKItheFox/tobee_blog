class PostsController < ApplicationController
	before_action :authenticate_user!, except: [:index, :show]
	before_action :must_be_admin, only: [:edit, :new, :create, :update, :destroy]

	
	def index
		if params[:category].present?
			@category_id = Category.find_by(name: params[:category]).id  
			@posts = Post.where(category_id: @category_id).order("created_at DESC")
			

		else	
			params[:category].blank? 
			@posts = Post.all			
			
		end		
	end
	
	
	def new
		@post = Post.new		
	end	

	def create
		@post = Post.new(post_params)
		
		if @post.save
			redirect_to @post
		else
			render 'new'
		end	
	end		
			

	def show
		@post = Post.find(params[:id])
		
	end	

	def edit
		@post = Post.find(params[:id])	
			
	end	

	def update
		@post = Post.find(params[:id])

		if @post.update(params[:post].permit(:title, :body, :id, :category_id))
			redirect_to @post
		else	
			render 'edit'
		end	
	end	

	def destroy
		@post = Post.find(params[:id])
		@post.destroy

		redirect_to root_path
	end	



	private
		def post_params
			params.require(:post).permit(:title, :body, :id, :category_id)
		end	



		def must_be_admin
		    unless current_user.has_role? :admin
		      redirect_to root_path, notice: "Access Denied, Sorry!"
		    end
		end

end
