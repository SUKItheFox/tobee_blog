class Forumpost < ApplicationRecord
	belongs_to :user
	has_many :forumcomments
end
