# This migration comes from piggybak (originally 20120718142841)
class ModifyCredits < ActiveRecord::Migration[4.2]
  def change
    rename_table :credits, :adjustments
    add_column :adjustments, :note, :text
  end
end
