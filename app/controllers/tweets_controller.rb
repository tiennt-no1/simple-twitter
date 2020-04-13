class TweetsController < ApplicationController
  before_action :find_tweet,  only: [:destroy, :retweet]
  def index
    return render :json => Tweet.all.order(:retweets).limit(10) if params[:format] == 'json'
  end

  def destroy
    if @tweet
      @tweet.delete
      render json: {success: true}
    else
      render json: {success: false}
    end
  end

  def retweet
    if @tweet
      @tweet.do_retweet
      render json: {success: true, tweet: @tweet}
    else
      render json: {success: false}
    end
  end

  private

  def find_tweet
    tweet_id = params[:id] || params[:tweet_id]
    @tweet = Tweet.find(tweet_id)
  end
end
