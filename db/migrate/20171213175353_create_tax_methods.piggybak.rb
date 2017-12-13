# This migration comes from piggybak (originally 20120102154050)
class CreateTaxMethods < ActiveRecord::Migration[4.2]
  def change
    create_table :tax_methods do |t|
      t.string :description, :null => false
      t.string :klass, :null => false
      t.boolean :active, :null => false, :default => false
    end
  end
end
