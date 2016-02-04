require "CSV"

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

  has_many :cards, dependent: :destroy

  def create_cards_from_file(file)
    # CSV.read(file.tempfile).map do |entry|
    #   self.cards.create!(front: entry.first, back: entry.last)
    # end
    entries = CSV.read(file.tempfile).map do |entry|
      {front: entry.first, back: entry.last, deck_id: self.id}
    end

    Card.create(entries)
  end

  # has_attached_file :cardlist
  # # validates_attachment_content_type :csv, content_type: /\Aimage\/.*\Z/
end
