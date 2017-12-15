class CreatePiggybakTaxonomyNavigationNodes < ActiveRecord::Migration[5.1]
  def change
    create_table :piggybak_taxonomy_navigation_nodes do |t|
      t.string :name
    end
  end
end
