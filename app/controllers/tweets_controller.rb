class TweetsController < ApplicationController
  before_action :find_tweet,  only: [:destroy, :retweet]
  def index
    if params[:format] == 'json'
      page = params[:currentPage] || 1
      return render :json => Tweet.order(retweets: :desc).paginate(page: page, per_page: 10)
    end
  end

  def create
    if tweet = Tweet.create!(content: params[:content])
      render json: {success: true, tweet: tweet}
    else
      render json: {success: false}
    end
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
