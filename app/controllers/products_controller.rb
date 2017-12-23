class ProductsController < ApplicationController
  layout "product", except: [:index, :rss]
  before_action :authenticate_user!, except: [:index, :show]
  before_action :must_be_admin, only: [:edit, :new, :create, :update, :destroy]


  def index
    @products = Product.all.order("created_at DESC") 
  end 

  def show
    @product = Product.find(params[:id])
  end

  def new
    @product = Product.new
  end  

  def create
    
    @product = Product.new(product_params)

    if @product.save!
      flash[:notice] = "Successfully created product!"
      redirect_to shop_path
    else
      render 'new'
    end 
  end   

  def edit
    @product = Product.find(params[:id])  
  end 
  
  def update
    @product = Product.find(params[:id])

    if @product.update(params[:product].permit(:name, :description, :id))
      redirect_to @product
    else
      render 'edit'
    end
  end

  def destroy
    @product = Product.find(params[:id])
    
    @product.destroy
    redirect_to shop_path
  end


  private  

  def product_params
    params.require(:product).permit(:name, :description)
  end 

  def must_be_admin
    unless current_user.has_role? :admin
      redirect_to root_path, notice: "Access Denied, Sorry!"
    end
  end

end

		
