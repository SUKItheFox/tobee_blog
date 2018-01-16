class Avatar < ActiveRecord::Base
  has_one :profile_picture
  attribute :filename
end