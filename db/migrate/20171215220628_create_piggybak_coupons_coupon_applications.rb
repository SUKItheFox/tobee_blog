class CreatePiggybakCouponsCouponApplications < ActiveRecord::Migration[5.1]
  def change
    create_table :piggybak_coupons_coupon_applications do |t|
      t.string :name
    end
  end
end
