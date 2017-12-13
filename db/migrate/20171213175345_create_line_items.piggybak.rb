# This migration comes from piggybak (originally 20111227150432)
class CreateLineItems < ActiveRecord::Migration[4.2]
  def change
    create_table :line_items do |t|
      t.references :order, :null => false
      t.integer :quantity, :null => false
      t.references :variant, :null => false
      t.decimal :total
      t.timestamps
    end
  end
end
