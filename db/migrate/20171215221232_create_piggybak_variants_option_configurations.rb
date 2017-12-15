class CreatePiggybakVariantsOptionConfigurations < ActiveRecord::Migration[5.1]
  def change
    create_table :piggybak_variants_option_configurations do |t|
      t.string :name
    end
  end
end
