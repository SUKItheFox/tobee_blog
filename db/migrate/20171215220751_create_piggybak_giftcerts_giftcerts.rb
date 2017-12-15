class CreatePiggybakGiftcertsGiftcerts < ActiveRecord::Migration[5.1]
  def change
    create_table :piggybak_giftcerts_giftcerts do |t|
      t.string :name
    end
  end
end
