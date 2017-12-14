class Product < ApplicationRecord
	validates_presence_of :user_id
	belongs_to :user
	
	acts_as_sellable
	attr_accessible :piggybak_sellable_attributes
end
