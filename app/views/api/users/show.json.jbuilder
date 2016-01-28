json.extract!(@user, :id, :username)
json.subjects(@user.subjects) do |subject|
  json.extract!(subject, :id, :title, :author_id)
end
