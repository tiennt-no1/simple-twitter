# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
(1..100).each do |i|
    Tweet.create([
        { content: "...........................primary content #{i}" }
    ])
end


puts "shard 1"

ActiveRecord::Base.connects_to(database: { writing: :shard1, reading: :shard1_replica }) do
    (1..100).each do |i|
        Tweet.create([
            { content: "...........................shard1 content #{i}" }
        ])
    end
    
end


