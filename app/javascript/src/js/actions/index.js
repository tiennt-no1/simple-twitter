import {ADD_ARTICLE} from "../constants/action-types";

function addArticle(payload) {
  return {type: ADD_ARTICLE, payload}
};


function fetchTweets() {
  return function (dispatch) {
    return fetch("/tweets.json")
      .then(response => response.json())
      .then(json => {
        dispatch({type: ADD_ARTICLE, payload: json});
      });
  };
}

export {addArticle, fetchTweets}