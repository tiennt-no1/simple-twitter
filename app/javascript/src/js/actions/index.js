import {ADD_ARTICLE, DELETE_TWEET, RE_TWEET, TWEET_CREATED} from "../constants/action-types";

function addArticle(payload) {
  return {type: ADD_ARTICLE, payload}
};

const deleteOptions = {
  method: 'DELETE'
};


const putOptions = {
  method: 'PUT'
};


const postOptions = {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
};

function fetchTweets(currentPage) {
  return function (dispatch) {
    return fetch(`/tweets.json?currentPage=${currentPage}`)
      .then(response => response.json())
      .then(json => {
        dispatch({type: ADD_ARTICLE, payload: json});
      });
  };
}


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


function reTweet(id) {
  return function (dispatch) {
    return fetch(`/tweets/${id}/retweet`, putOptions)
      .then(response => response.json())
      .then(json => {
        json.tweet_id = id
        dispatch({type: RE_TWEET, payload: json});
      });
  };
}

function createNew(content) {
  return function (dispatch) {
    debugger
    const body_params = JSON.stringify({ content })
    return fetch(`/tweets`, _.merge(postOptions, {body: body_params}))
      .then(response => response.json())
      .then(json => {
        dispatch({type: TWEET_CREATED, payload: json});
      });
  };
}


export {addArticle, fetchTweets, deleteTweet, reTweet, createNew}