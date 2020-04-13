
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTweets } from "../actions/index";
import Tweet from "./Tweet";

const mapStateToProps = state => {
  return {
    tweets: state.tweets,
    currentPage: state.currentPage
  };
};


class ConnectedList extends Component {

  isBottom(el) {
    return el.getBoundingClientRect().bottom <= window.innerHeight;
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.trackScrolling);
  }

  trackScrolling = () => {
    const wrappedElement = document.getElementById('root');
    if (this.isBottom(wrappedElement)) {
      alert('header bottom reached');
      const {fetchTweets, currentPage} = this.props
      fetchTweets(currentPage)
    }
  };

  componentDidMount() {
    const {fetchTweets, currentPage} = this.props
    fetchTweets(currentPage)
    document.addEventListener('scroll', this.trackScrolling);
  }

  render() {
    const {tweets} = this.props
    return (<div className="container">
      {tweets.map(el => (
        <Tweet  key={el.id} content={el.content}  retweets={el.retweets} id={el.id}></Tweet>
      ))}
    </div>)
  }
}

const List = connect(
    mapStateToProps,
    { fetchTweets }
  )(ConnectedList);

export default List;