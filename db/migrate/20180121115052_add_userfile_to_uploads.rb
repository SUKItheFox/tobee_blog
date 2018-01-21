class AddUserfileToUploads < ActiveRecord::Migration[5.1]
  def change
    add_column :uploads, :userfile, :string
  end
end
