class CreateUserCardRatings < ActiveRecord::Migration
  def change
    create_table :user_card_ratings do |t|
      t.integer :user_id, null: false
      t.integer :card_id, null: false
      t.integer :ef, null: false, default: 1
      t.timestamps null: false
    end
  end
end
