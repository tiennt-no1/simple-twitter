import { ADD_ARTICLE, FOUND_BAD_WORD,  DELETE_TWEET } from "../constants/action-types";
import _ from 'lodash'

const fetch_tweets = () => {

  $.get( "/tweets.json", function( data ) {
    return data
  });
}

const initialState = {
    tweets: [],
    errorMessage: null,
  };
  
  function rootReducer(state = initialState, action) {
    if (action.type === ADD_ARTICLE) {
        return Object.assign({}, state, {
            tweets: state.tweets.concat(action.payload)
          });
    }else if (action.type === DELETE_TWEET) {
      debugger
      if(action.payload.success){
        let tweets = _.cloneDeep(state.tweets)
        _.remove(tweets, (tweet) => { return tweet.id === action.payload.deleted_id})
        return Object.assign({}, state, {
          tweets: tweets
        });
      }
    }
    return state;
  };
  
  export default rootReducer;