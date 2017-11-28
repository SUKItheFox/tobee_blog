class Admin < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :trackable, :timeoutable, :lockable 


  def self.find_for_database_authentication warden_conditions
	conditions = warden_conditions.dup
	login = conditions.delete(:login)
	where(conditions).where(["lower(username) = :value OR lower(email) = :value", {value: login.strip.downcase}]).first
  end
  
end

