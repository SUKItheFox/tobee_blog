class CategoryController < ApplicationController

	def index
        @all_categories = Category.find(:all, :order=>"name")
    end
    def new
        @category = Category.new
        @all.categories = Category.find(:all, :order=> "name")
    end

    def show
        @category = Category.find(params[:id])
        @posts    = @category.posts
    end    

    def create
        @category = Category.new(post_params)
        if @category.save
            flash[:notice] = "Category created"
            redirect_to(:action=>'index', :category_id => @category.id)
        else
            @categories = Categories.order()
            render('new')
        end
    end

    def edit
        @category = Category.find(params[:id])
        @all_categories = Category.find(:all, :order=>"name")
    end


    def update
    end

    def destroy
        @category.destroy
        redirect_to category_path
    end
    private
    def find_category
        @category=Category.find(params[:id])
    end
    def post_params
        params.require(:category).permit(:name)
    end
end
