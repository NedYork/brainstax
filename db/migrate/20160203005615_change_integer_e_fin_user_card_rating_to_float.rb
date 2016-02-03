class ChangeIntegerEFinUserCardRatingToFloat < ActiveRecord::Migration
  def change
    change_column(:user_card_ratings, :ef, :float)
  end
end
