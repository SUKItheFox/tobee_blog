class Option < ApplicationRecord
	belongs_to :optable, polymorphic: true
end
