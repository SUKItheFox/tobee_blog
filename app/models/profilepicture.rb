class ProfilePicture < ActiveRecord::Base
  belongs_to :user
  belongs_to :avatar
  attribute :user_id 
  attribute :avatar_id

  
end