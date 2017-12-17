class Forumcomment < ApplicationRecord
  belongs_to :forumpost
  belongs_to :user
end
