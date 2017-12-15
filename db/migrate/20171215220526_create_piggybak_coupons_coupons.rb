class CreatePiggybakCouponsCoupons < ActiveRecord::Migration[5.1]
  def change
    create_table :piggybak_coupons_coupons do |t|
      t.string :name
    end
  end
end
