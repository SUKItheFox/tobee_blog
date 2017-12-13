# This migration comes from piggybak (originally 20120717022155)
class CreateOrderNotes < ActiveRecord::Migration[4.2]
  def change
    create_table :order_notes do |t|
      t.references :order, :null => false
      t.references :user, :null => false
      t.text :note
      t.timestamps
    end  
  end
end
