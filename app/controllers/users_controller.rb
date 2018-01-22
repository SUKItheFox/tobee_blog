class UsersController < ApplicationController
  before_action :authenticate_user!, only: [:edit, :update]
  
  before_action :set_user, only: [:edit, :update]

  attr_accessor  :email, :username

  
  def show
  	@user = User.find(params[:id])
  end

  def create

    @user = User.new(user[:newuser])
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
    @user = User.find(params[:id])
  end

  def update
    if @user.update(user_params)
      redirect_to @user
    else
      flash.now[:alert] =  "Something went wrong. Hope you don't mind trying again!"
      render :edit
    end
  end  

  def can?
  end

  def cannot?
  end 

  private
    def check_authorization
      unless current_user.id == params[:id].to_i
        redirect_to root_url
      end
    end    

    def set_user
     @user = User.find(params[:id])
    end  

    def user_params
      params.require(:user).permit(:id, :username, :role, :user_id, :email, :password, :password_confirmation, :upload )
    end

end
