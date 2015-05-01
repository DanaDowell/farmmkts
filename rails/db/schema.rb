# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 20150429235823) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cities", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "markets", force: :cascade do |t|
    t.string   "title"
    t.string   "city"
    t.string   "dayweek"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
    t.time     "time_opens"
    t.time     "time_closes"
    t.date     "date_opens"
    t.date     "date_closes"
    t.string   "street_address"
  end

  create_table "profiles", force: :cascade do |t|
    t.integer  "market_id"
    t.integer  "vendor_qty"
    t.integer  "rating"
    t.string   "governing_body"
    t.boolean  "foodstamps"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

end
