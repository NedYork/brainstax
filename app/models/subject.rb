class Subject < ActiveRecord::Base
  validates :title, presence: true

  belongs_to(
    :user,
    class_name: "User",
    foreign_key: :author_id,
    primary_key: :id
  )

  has_many(
    :decks,
    class_name: "Deck",
    foreign_key: :subject_id,
    primary_key: :id,
    dependent: :destroy
  )
end
