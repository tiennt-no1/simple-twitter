import { ADD_ARTICLE, FOUND_BAD_WORD,  FETCH_TWEETS  } from "../constants/action-types";

const fetch_tweets = () => {

  $.get( "/tweets.json", function( data ) {
    return data
  });
}

const initialState = {
    articles: [],
    errorMessage: null,
  };
  
  function rootReducer(state = initialState, action) {
    if (action.type === ADD_ARTICLE) {
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
          });
    }else if (action.type === FOUND_BAD_WORD) {
      return Object.assign({}, state, {
        errorMessage: "Invalid, The title include bad word!"
      });
    }else if (action.type === FETCH_TWEETS) {
      return Object.assign({}, state, {
        articles: state.articles.concat(action.payload)
      });
    }
    return state;
  };
  
  export default rootReducer;