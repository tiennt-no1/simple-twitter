import { ADD_ARTICLE, FETCH_TWEETS } from "../constants/action-types";

function addArticle(payload) {
    return { type: ADD_ARTICLE, payload }
};


function fetch_tweets() {
    return { type: FETCH_TWEETS, payload: null}
};

export {addArticle, fetch_tweets}