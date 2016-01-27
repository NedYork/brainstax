class CreateSubjects < ActiveRecord::Migration
  def change
    create_table :subjects do |t|
      t.integer :author_id
      t.string :title, null: false, index: true

      t.timestamps null: false
    end
  end
end
