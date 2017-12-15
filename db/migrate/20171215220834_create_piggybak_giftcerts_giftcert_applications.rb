class CreatePiggybakGiftcertsGiftcertApplications < ActiveRecord::Migration[5.1]
  def change
    create_table :piggybak_giftcerts_giftcert_applications do |t|
      t.string :name
    end
  end
end
