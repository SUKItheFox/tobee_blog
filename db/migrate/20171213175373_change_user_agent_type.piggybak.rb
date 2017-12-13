# This migration comes from piggybak (originally 20121210211600)
class ChangeUserAgentType < ActiveRecord::Migration[4.2]
  def up
    change_column :orders, :user_agent, :text
  end

  def down
    change_column :orders, :user_agent, :string
  end
end
