# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20171216235642) do

  create_table "adjustments", force: :cascade do |t|
    t.string "source_type"
    t.integer "source_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.text "note"
  end

  create_table "admins", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.integer "sign_in_count", default: 0
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.integer "failed_attempts", default: 0
    t.string "unlock_token"
    t.datetime "locked_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_admins_on_email", unique: true
    t.index [nil], name: "index_admins_on_reset_password_token", unique: true
  end

  create_table "categories", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "comments", force: :cascade do |t|
    t.string "name"
    t.text "body"
    t.integer "post_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "user_id"
    t.index ["post_id"], name: "index_comments_on_post_id"
    t.index ["user_id"], name: "index_comments_on_user_id"
  end

  create_table "conversations", force: :cascade do |t|
    t.integer "sender_id"
    t.integer "recipient_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["recipient_id"], name: "index_conversations_on_recipient_id"
    t.index ["sender_id"], name: "index_conversations_on_sender_id"
  end

  create_table "forumposts", force: :cascade do |t|
    t.string "title"
    t.text "content"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "user_id"
  end

  create_table "language_categories", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "messages", force: :cascade do |t|
    t.text "body"
    t.integer "conversation_id"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["conversation_id"], name: "index_messages_on_conversation_id"
    t.index ["user_id"], name: "index_messages_on_user_id"
  end

  create_table "options", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "piggybak_addresses", force: :cascade do |t|
    t.string "firstname", null: false
    t.string "lastname", null: false
    t.string "address1", null: false
    t.string "address2"
    t.string "city", null: false
    t.string "state_id", null: false
    t.integer "country_id", null: false
    t.string "zip", null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "piggybak_bundle_discounts_bundle_discount_sellables", force: :cascade do |t|
    t.string "name"
  end

  create_table "piggybak_bundle_discounts_bundle_discounts", force: :cascade do |t|
    t.string "name"
  end

  create_table "piggybak_countries", force: :cascade do |t|
    t.string "name"
    t.string "abbr"
    t.boolean "active_shipping", default: false
    t.boolean "active_billing", default: false
  end

  create_table "piggybak_coupons_coupon_applications", force: :cascade do |t|
    t.string "name"
  end

  create_table "piggybak_coupons_coupons", force: :cascade do |t|
    t.string "name"
  end

  create_table "piggybak_giftcerts_buyable_giftcerts", force: :cascade do |t|
    t.string "name"
  end

  create_table "piggybak_giftcerts_giftcert_applications", force: :cascade do |t|
    t.string "name"
  end

  create_table "piggybak_giftcerts_giftcerts", force: :cascade do |t|
    t.string "name"
  end

  create_table "piggybak_line_items", force: :cascade do |t|
    t.integer "order_id", null: false
    t.integer "quantity", null: false
    t.integer "sellable_id"
    t.decimal "price", precision: 10, scale: 2
    t.datetime "created_at"
    t.datetime "updated_at"
    t.decimal "unit_price", precision: 10, scale: 2, default: "0.0", null: false
    t.string "description", default: "", null: false
    t.string "line_item_type", default: "sellable", null: false
  end

  create_table "piggybak_order_notes", force: :cascade do |t|
    t.integer "order_id", null: false
    t.integer "user_id", null: false
    t.text "note"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "piggybak_orders", force: :cascade do |t|
    t.integer "billing_address_id", null: false
    t.integer "shipping_address_id", null: false
    t.integer "user_id"
    t.string "email", null: false
    t.string "phone", null: false
    t.decimal "total", precision: 10, scale: 2, null: false
    t.decimal "total_due", precision: 10, scale: 2, null: false
    t.string "status", null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string "ip_address"
    t.text "user_agent"
    t.boolean "to_be_cancelled", default: false
    t.boolean "confirmation_sent", default: false
  end

  create_table "piggybak_payment_method_values", force: :cascade do |t|
    t.integer "payment_method_id"
    t.string "key"
    t.string "value"
  end

  create_table "piggybak_payment_methods", force: :cascade do |t|
    t.string "description", null: false
    t.string "klass", null: false
    t.boolean "active", default: false, null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "piggybak_payments", force: :cascade do |t|
    t.integer "payment_method_id"
    t.string "status", default: "paid", null: false
    t.integer "month"
    t.integer "year"
    t.string "transaction_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string "masked_number"
    t.integer "line_item_id"
  end

  create_table "piggybak_sellables", force: :cascade do |t|
    t.string "sku", null: false
    t.string "description", null: false
    t.decimal "price", precision: 10, scale: 2, null: false
    t.integer "quantity", default: 0, null: false
    t.integer "item_id", null: false
    t.string "item_type", null: false
    t.boolean "active", default: false, null: false
    t.boolean "unlimited_inventory", default: false, null: false
  end

  create_table "piggybak_shipments", force: :cascade do |t|
    t.integer "shipping_method_id", null: false
    t.string "status", default: "new", null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer "line_item_id"
  end

  create_table "piggybak_shipping_method_values", force: :cascade do |t|
    t.integer "shipping_method_id"
    t.string "key"
    t.string "value"
  end

  create_table "piggybak_shipping_methods", force: :cascade do |t|
    t.string "description", null: false
    t.string "klass", null: false
    t.boolean "active", default: false, null: false
  end

  create_table "piggybak_states", force: :cascade do |t|
    t.string "name"
    t.string "abbr"
    t.integer "country_id"
  end

  create_table "piggybak_tax_method_values", force: :cascade do |t|
    t.integer "tax_method_id"
    t.string "key"
    t.string "value"
  end

  create_table "piggybak_tax_methods", force: :cascade do |t|
    t.string "description", null: false
    t.string "klass", null: false
    t.boolean "active", default: false, null: false
  end

  create_table "piggybak_taxonomy_navigation_nodes", force: :cascade do |t|
    t.string "name"
  end

  create_table "piggybak_taxonomy_sellable_taxonomies", force: :cascade do |t|
    t.string "name"
  end

  create_table "piggybak_variants_option_configurations", force: :cascade do |t|
    t.string "name"
  end

  create_table "piggybak_variants_option_values", force: :cascade do |t|
    t.string "name"
  end

  create_table "piggybak_variants_options", force: :cascade do |t|
    t.string "name"
  end

  create_table "piggybak_variants_variants", force: :cascade do |t|
    t.string "name"
  end

  create_table "posts", force: :cascade do |t|
    t.string "title"
    t.text "body"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "category_id"
    t.integer "language_category_id"
  end

  create_table "products", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "roles", force: :cascade do |t|
    t.string "name"
    t.string "resource_type"
    t.integer "resource_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["name", "resource_type", "resource_id"], name: "index_roles_on_name_and_resource_type_and_resource_id"
    t.index ["name"], name: "index_roles_on_name"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "username"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  create_table "users_roles", id: false, force: :cascade do |t|
    t.integer "user_id"
    t.integer "role_id"
    t.index ["user_id", "role_id"], name: "index_users_roles_on_user_id_and_role_id"
  end

end
