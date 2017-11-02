class AddLanguageCategoryIdToPosts < ActiveRecord::Migration[5.1]
  def change
    add_column :posts, :language_category_id,  :integer    
  end
end
