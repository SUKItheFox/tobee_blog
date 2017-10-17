class Post < ApplicationRecord
	has_many :comments, dependent: :destroy
	belongs_to :category
	validates :title, presence: true, length: { minimum: 5 }
	validates :body, presence: true
	
end
