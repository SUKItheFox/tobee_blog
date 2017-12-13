# This migration comes from piggybak (originally 20120102162414)
require "countries"

class CreateCountries < ActiveRecord::Migration[4.2]
  def change
    create_table :countries do |t|
      t.string :name
      t.string :abbr
    end
  end
end
