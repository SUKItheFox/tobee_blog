class User < ApplicationRecord

  rolify :before_add => :before_add_method



  def before_add_method(role)
    # do something before it gets added
  end

  belongs_to :role

  def admin?
    role_id == 2 # If you have id == 0 for admin
  end


  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :conversations, :foreign_key => :sender_id       
 
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

  has_many :comments
  has_many :forumposts
  has_many :forumcomments

  acts_as_orderer

  
end

