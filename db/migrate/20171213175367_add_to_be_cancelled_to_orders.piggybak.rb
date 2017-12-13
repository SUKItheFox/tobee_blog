# This migration comes from piggybak (originally 20120815205207)
class AddToBeCancelledToOrders < ActiveRecord::Migration[4.2]
  def change
    add_column :orders, :to_be_cancelled, :boolean, :nil => false, :default => false
  end
end
