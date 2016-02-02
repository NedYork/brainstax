json.extract!(deck, :id, :subject_id, :author_id, :name)

json.cards(deck.cards)
