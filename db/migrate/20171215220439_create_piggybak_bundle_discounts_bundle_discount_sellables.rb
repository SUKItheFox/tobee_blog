class CreatePiggybakBundleDiscountsBundleDiscountSellables < ActiveRecord::Migration[5.1]
  def change
    create_table :piggybak_bundle_discounts_bundle_discount_sellables do |t|
      t.string :name
    end
  end
end
