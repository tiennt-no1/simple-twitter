Rails.application.routes.draw do
  resources :tweets, only: [:index, :destroy]
  put 'tweets/:tweet_id/retweet', to: "tweets#retweet"
  root to: 'tweets#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
