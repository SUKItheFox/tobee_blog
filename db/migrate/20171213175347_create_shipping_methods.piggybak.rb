# This migration comes from piggybak (originally 20111228231756)
class CreateShippingMethods < ActiveRecord::Migration[4.2]
  def change
    create_table :shipping_methods do |t|
      t.string :description, :null => false
      t.string :klass, :null => false
      t.boolean :active, :null => false, :default => false
    end
  end
end
