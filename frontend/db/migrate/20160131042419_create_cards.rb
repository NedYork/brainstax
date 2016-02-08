class CreateCards < ActiveRecord::Migration
  def change
    create_table :cards do |t|
      t.string :front, null: false
      t.text :back, null: false
      t.integer :deck_id, null: false
      t.float :ef_value, default: 1.0

      t.timestamps null: false
    end
  end
end
