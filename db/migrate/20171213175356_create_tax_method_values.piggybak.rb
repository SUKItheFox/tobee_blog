# This migration comes from piggybak (originally 20120102162703)
class CreateTaxMethodValues < ActiveRecord::Migration[4.2]
  def change
    create_table :tax_method_values do |t|
      t.references :tax_method
      t.string :key
      t.string :value
    end
  end
end
