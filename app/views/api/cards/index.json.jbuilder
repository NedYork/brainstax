json.array!(@cards) do |card|
  json.extract!(card, :id, :front, :back, :deck_id)
end
