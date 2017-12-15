class CreatePiggybakTaxonomySellableTaxonomies < ActiveRecord::Migration[5.1]
  def change
    create_table :piggybak_taxonomy_sellable_taxonomies do |t|
      t.string :name
    end
  end
end
