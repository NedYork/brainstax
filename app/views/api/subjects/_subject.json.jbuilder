json.extract!(subject, :id, :author_id, :title)

json.decks(subject.decks)
