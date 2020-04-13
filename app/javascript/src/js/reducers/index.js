import { ADD_ARTICLE, FOUND_BAD_WORD,  FETCH_TWEETS  } from "../constants/action-types";

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
    }else if (action.type === FOUND_BAD_WORD) {
      return Object.assign({}, state, {
        errorMessage: "Invalid, The title include bad word!"
      });
    }else if (action.type === FETCH_TWEETS) {
      debugger
      const tweets = fetch_tweets()
      return Object.assign({}, state, {
        tweets: state.tweets.concat(tweets.data)
      });
    }
    return state;
  };
  
  export default rootReducer;