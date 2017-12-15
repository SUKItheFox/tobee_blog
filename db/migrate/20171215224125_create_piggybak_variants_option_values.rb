class CreatePiggybakVariantsOptionValues < ActiveRecord::Migration[5.1]
  def change
    create_table :piggybak_variants_option_values do |t|
      t.string :name
    end
  end
end
