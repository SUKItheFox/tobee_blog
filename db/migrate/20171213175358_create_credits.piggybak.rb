# This migration comes from piggybak (originally 20120106010412)
class CreateCredits < ActiveRecord::Migration[4.2]
  def change
    create_table :credits do |t|
      t.references :order

      t.string :source_type
      t.integer :source_id

      t.decimal :total

      t.timestamps
    end
  end
end
