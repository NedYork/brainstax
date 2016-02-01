class Deck < ActiveRecord::Base
  validates :author_id, :name, presence: true

  belongs_to(
    :subject,
    class_name: "Subject",
    foreign_key: :subject_id,
    primary_key: :id
  )

  belongs_to(
    :author,
    class_name: "User",
    foreign_key: :user_id,
    primary_key: :id
  )

  has_many :cards
end
