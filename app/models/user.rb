class User < ApplicationRecord
  

  rolify :before_add => :before_add_method
  belongs_to :role, optional: true
  has_one :profile_picture
  has_one :avatar, through: :profile_picture
  has_many :uploads

  


  def before_add_method(role)
    # do something before it gets added
    assign_default_role
  end


  
  def admin?
    user_id == 1 # If you have id == 0 for admin
  end


  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable


  validates :username, presence: true 

  has_many :conversations, :foreign_key => :sender_id       
 
  

  
  attr_accessor :login  

  has_many :comments
  has_many :forumposts
  has_many :forumcomments
  has_many :products

  acts_as_orderer

  private

    def assign_default_role
      self.add_role(:newuser) if self.roles.blank?      
    end


     

    def user_params
      params.require(:user).permit(:name, :username, :email, :password, :password_confirmation, :role, :avatar)
    end

    

    def self.find_first_by_auth_conditions(warden_conditions)
      conditions = warden_conditions.dup
      if login = conditions.delete(:login)
        where(conditions).where(["lower(username) = :value OR lower(email) = :value", { :value => login.downcase }]).first
      else
        where(conditions).first
      end
    end  
end

