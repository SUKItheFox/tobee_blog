class UsersController < ApplicationController

  def show
  	@user = User.find(params[:id])
  	
  end

  def create
    @user = User.new(params[:newuser])
    @user.add_role(:newuser)

      if @user.save
        redirect_to users_path, :notice => "Welcome to To Bee family!"
      else
        render "new"
      end
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
