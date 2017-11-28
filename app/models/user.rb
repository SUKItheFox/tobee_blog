class User < ApplicationRecord

  

  rolify :before_add => :before_add_method



  def before_add_method(role)
    # do something before it gets added
  end

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
 
  after_create :assign_default_role

  def assign_default_role
    self.add_role(:newuser) if self.roles.blank?
  end

  def self.find_first_by_auth_conditions(warden_conditions)
    conditions = warden_conditions.dup
    if login = conditions.delete(:login)
      where(conditions).where(["lower(username) = :value OR lower(email) = :value", { :value => login.downcase }]).first
    else
      where(conditions).first
    end
  end  
  attr_accessor :login

  after_create :create_profile

  def create_profile
	self.profile.create
  end


  has_many :comments

  
end

