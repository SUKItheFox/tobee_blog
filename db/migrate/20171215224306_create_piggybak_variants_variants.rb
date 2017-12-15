class CreatePiggybakVariantsVariants < ActiveRecord::Migration[5.1]
  def change
    create_table :piggybak_variants_variants do |t|
      t.string :name
    end
  end
end
