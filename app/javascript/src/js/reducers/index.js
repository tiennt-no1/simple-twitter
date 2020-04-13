import { ADD_ARTICLE, FOUND_BAD_WORD  } from "../constants/action-types";

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
    }
    return state;
  };
  
  export default rootReducer;