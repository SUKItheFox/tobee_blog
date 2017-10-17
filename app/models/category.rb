class Category < ApplicationRecord
	has_many :post
	acts_as_tree

	def ancestors_name
		if parent
			parent.ancestors_name + parent.name + ':'
		else
			""
		end
	end

	def long_name
		ancestors_name + name
	end				
end
