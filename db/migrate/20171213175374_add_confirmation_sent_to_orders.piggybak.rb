# This migration comes from piggybak (originally 20130516200305)
class AddConfirmationSentToOrders < ActiveRecord::Migration[4.2]
  def change
    add_column :orders, :confirmation_sent, :boolean, :default => false
  end
end
