class CreateAvatars < ActiveRecord::Migration[5.1]
  def change
    create_table :avatars do |t|
    	t.string :name
    	
    end
  end
end
