class ProductsController < ApplicationController


	def new
        @product = Product.new
        @all.products = Products.find(:all, :order=> "name")
    end

	def show
      @product = Product.find params[:id]
      @product.options
    end

    private
		def product_params
			params.require(:product).permit(:name, :id)
		end	
		
end
