json.array!(@subjects) do |subject|
  json.extract!(subject, :id, :author_id, :title)
end
