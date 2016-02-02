json.array!(@decks) do |deck|

  json.extract!(deck, :id, :author_id, :subject_id, :name)
end
