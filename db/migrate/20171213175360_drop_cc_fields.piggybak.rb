# This migration comes from piggybak (originally 20120111195534)
class DropCcFields < ActiveRecord::Migration[4.2]
  def up
    remove_column :payments, :number
    remove_column :payments, :verification_value
  end

  def down
    add_column :payments, :number, :string
    add_column :payments, :verification_value, :string
  end
end
