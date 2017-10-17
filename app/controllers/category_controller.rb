class CategoryController < ApplicationController

	def index
        @categories = Category.all.order("created_at DESC")
    end
    def new
        @category = Category.new
    end
    def create
        @category = Workcategory.new(post_params)
        if @category.save
            flash[:notice] = "Category created"
            redirect_to(:action=>'index', :category_id => @category.id)
        else
            @categories = Categories.order()
            render('new')
        end
    end

    def edit
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
