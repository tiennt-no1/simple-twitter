class TweetsController < ApplicationController
  def index
    return render :json => Tweet.all.order(:retweets).limit(10) if params[:format] == 'json'
  end
end
