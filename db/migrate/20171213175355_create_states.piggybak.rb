# This migration comes from piggybak (originally 20120102162415)
class CreateStates < ActiveRecord::Migration[4.2]
  def change
    create_table :states do |t|
      t.string :name
      t.string :abbr
      t.references :country
    end
  end
end
