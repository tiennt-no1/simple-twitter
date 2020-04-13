import { ADD_ARTICLE,  DELETE_TWEET, RE_TWEET, TWEET_CREATED } from "../constants/action-types";
import _ from 'lodash'

const initialState = {
    tweets: [],
    errorMessage: null,
    currentPage: 1
  };
  
  function rootReducer(state = initialState, action) {
    if (action.type === ADD_ARTICLE) {
        return Object.assign({}, state, {
            tweets: state.tweets.concat(action.payload),
            currentPage: state.currentPage+1
          });
    }else if (action.type === DELETE_TWEET) {
      if(action.payload.success){
        let tweets = _.cloneDeep(state.tweets)
        _.remove(tweets, (tweet) => { return tweet.id === action.payload.deleted_id})
        return Object.assign({}, state, {
          tweets: tweets
        });
      }
    }

    else if (action.type === RE_TWEET) {
      if(action.payload.success){
        let tweets = _.cloneDeep(state.tweets)
        let tweet = _.find(tweets, (t) => {return t.id === action.payload.tweet_id})
        tweet.retweets += 1
        return Object.assign({}, state, {
          tweets: tweets
        });
      }
    }

    else if (action.type === TWEET_CREATED) {
      if(action.payload.success){
        let tweets = _.cloneDeep(state.tweets)
        const newTweets = _([action.payload.tweet]).concat(tweets)
        return Object.assign({}, state, {
          tweets: newTweets
        });
      }
    }
    return state;
  };
  
  export default rootReducer;