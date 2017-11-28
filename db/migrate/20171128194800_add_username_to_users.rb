class AddUsernameToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :username, :string
    # Virtual attribute for authenticating by either username or email
	# This is in addition to a real persisted field like 'username'
	attr_accessor :login
  end
end
