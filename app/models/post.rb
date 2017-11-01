class Post < ApplicationRecord
	has_many :comments, dependent: :destroy
	belongs_to :category, :language_category, presence: true
	validates :title, presence: true, length: { minimum: 5 }
	validates :body, presence: true
	
end
