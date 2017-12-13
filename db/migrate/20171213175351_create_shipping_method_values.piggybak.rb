# This migration comes from piggybak (originally 20111228235852)
class CreateShippingMethodValues < ActiveRecord::Migration[4.2]
  def change
    create_table :shipping_method_values do |t|
      t.references :shipping_method
      t.string :key
      t.string :value
    end
  end
end
