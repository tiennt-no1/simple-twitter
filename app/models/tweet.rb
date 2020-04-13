class Tweet < ApplicationRecord
  validates_length_of :content, maximum: 140

  def do_retweet
    transaction do
      Tweet.create(content: content)
      update!(retweets: retweets + 1)
    end

  end
end
