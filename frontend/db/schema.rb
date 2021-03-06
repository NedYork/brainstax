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

ActiveRecord::Schema.define(version: 20160205182426) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cards", force: :cascade do |t|
    t.string   "front",                    null: false
    t.text     "back",                     null: false
    t.integer  "deck_id",                  null: false
    t.float    "ef_value",   default: 1.0
    t.datetime "created_at",               null: false
    t.datetime "updated_at",               null: false
  end

  create_table "decks", force: :cascade do |t|
    t.string   "name",       null: false
    t.integer  "subject_id"
    t.integer  "author_id",  null: false
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "decks", ["author_id"], name: "index_decks_on_author_id", using: :btree
  add_index "decks", ["name"], name: "index_decks_on_name", using: :btree
  add_index "decks", ["subject_id"], name: "index_decks_on_subject_id", using: :btree
  add_index "decks", ["user_id"], name: "index_decks_on_user_id", using: :btree

  create_table "subjects", force: :cascade do |t|
    t.integer  "author_id"
    t.string   "title",      null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "subjects", ["title"], name: "index_subjects_on_title", using: :btree

  create_table "user_card_ratings", force: :cascade do |t|
    t.integer  "user_id",                  null: false
    t.integer  "card_id",                  null: false
    t.float    "ef",         default: 1.0, null: false
    t.datetime "created_at",               null: false
    t.datetime "updated_at",               null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "uid"
    t.string   "provider"
  end

  add_index "users", ["uid", "provider"], name: "index_users_on_uid_and_provider", unique: true, using: :btree

end
