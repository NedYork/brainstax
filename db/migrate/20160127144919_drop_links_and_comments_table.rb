class DropLinksAndCommentsTable < ActiveRecord::Migration
  def change
    drop_table :links, :comments
  end
end
