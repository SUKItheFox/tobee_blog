class CreatePiggybakBundleDiscountsBundleDiscounts < ActiveRecord::Migration[5.1]
  def change
    create_table :piggybak_bundle_discounts_bundle_discounts do |t|
      t.string :name
    end
  end
end
