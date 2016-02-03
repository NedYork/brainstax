json.array!(@cards) do |card|
  json.extract!(card, :id, :front, :back, :ef_value, :deck_id)
end
