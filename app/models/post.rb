

class Post < ApplicationRecord
	belongs_to :category 
	belongs_to :language_category 
	validates :category, presence: true
	validates :language_category, presence: true
	has_many :comments, dependent: :destroy 
	validates :title, presence: true, length: { minimum: 5 }
	validates :body, presence: true
	
end
