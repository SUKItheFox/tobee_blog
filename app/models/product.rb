class Product < ApplicationRecord
	acts_as_sellable
	attr_accessible :piggybak_sellable_attributes
end
