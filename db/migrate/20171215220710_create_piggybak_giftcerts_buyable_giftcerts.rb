class CreatePiggybakGiftcertsBuyableGiftcerts < ActiveRecord::Migration[5.1]
  def change
    create_table :piggybak_giftcerts_buyable_giftcerts do |t|
      t.string :name
    end
  end
end
