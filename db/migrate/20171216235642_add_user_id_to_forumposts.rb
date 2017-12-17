class AddUserIdToForumposts < ActiveRecord::Migration[5.1]
  def change
    add_column :forumposts, :user_id, :integer
  end
end
