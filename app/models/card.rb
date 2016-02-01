class Card < ActiveRecord::Base
  belongs_to :deck
  # belongs_to :user
  has_many(
    :ratings,
    class_name: "UserCardRating",
    foreign_key: card_id,
    id: id
  )

  has_many(
    :users,
    through: :ratings,
    source: :user
  )

end
