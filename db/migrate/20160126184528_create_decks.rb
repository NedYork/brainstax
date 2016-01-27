class CreateDecks < ActiveRecord::Migration
  def change
    create_table :decks do |t|
      t.string :name, null: false, index: true
      t.integer :subject_id, index: true;
      t.integer :author_id, null: false, index: true
      t.integer :user_id, index: true

      t.timestamps null: false
    end
  end
end
