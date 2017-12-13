# This migration comes from piggybak (originally 20121008160425)
class RenameVariantsToSellables < ActiveRecord::Migration[4.2]
  def up
    rename_table :variants, :sellables
    rename_column :line_items, :variant_id, :sellable_id
  end

  def down
    rename_table :sellables, :variants
    rename_column :line_items, :sellable_id, :variant_id
  end
end