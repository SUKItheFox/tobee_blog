# This migration comes from piggybak (originally 20111228231806)
class CreatePaymentMethods < ActiveRecord::Migration[4.2]
  def change
    create_table :payment_methods do |t|
      t.string :description, :null => false
      t.string :klass, :null => false
      t.boolean :active, :null => false, :default => false

      t.timestamps
    end
  end
end
