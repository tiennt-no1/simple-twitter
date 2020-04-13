
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTweets } from "../actions/index";
import Tweet from "./Tweet";

const mapStateToProps = state => {
  return { tweets: state.tweets };
};


class ConnectedList extends Component {

  componentDidMount() {
    this.props.fetchTweets()
  }

  render() {
    const {tweets} = this.props
    return (<div className="container">
      {tweets.map(el => (
        <Tweet  key={el.id} content={el.content}></Tweet>
      ))}
    </div>)
  }
}

const List = connect(
    mapStateToProps,
    { fetchTweets }
  )(ConnectedList);

export default List;