class UsersController < ApplicationController

  def show
  	@user = User.find(params[:id])
  	
  end

  def index
    @user = User.all
  end

  def new
    @user = User.new
  end

  def edit
    @profile = current_user.profile
  end

end
