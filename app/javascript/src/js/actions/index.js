import {ADD_ARTICLE, DELETE_TWEET} from "../constants/action-types";

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

const deleteOptions = {
  method: 'DELETE'
};


function deleteTweet(id) {
  return function (dispatch) {
    return fetch(`/tweets/${id}`, deleteOptions)
      .then(response => response.json())
      .then(json => {
        json.deleted_id = id
        dispatch({type: DELETE_TWEET, payload: json});
      });
  };
}

export {addArticle, fetchTweets, deleteTweet}