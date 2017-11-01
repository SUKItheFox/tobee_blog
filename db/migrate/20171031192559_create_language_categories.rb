class CreateLanguageCategories < ActiveRecord::Migration[5.1]
  def change
    create_table :language_categories do |t|
      t.string :name
      t.string :category_id, null: false
      
    end
  end
end
