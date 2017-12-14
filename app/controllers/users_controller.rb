class UsersController < ApplicationController

  def show
  	@user = User.find(params[:id])
  	
  end

  


  def index
    @users = User.all
  end

  def new
    @user = User.new
  end

  def edit
    @profile = current_user.profile
  end
  def can?
  end

  def cannot?
  end 

end
