
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTweets } from "../actions/index";

const mapStateToProps = state => {
  return { tweets: state.tweets };
};


class ConnectedList extends Component {

  componentDidMount() {
    this.props.fetchTweets()
  }

  render() {
    const {tweets} = this.props
    return (<ul>
      {tweets.map(el => (
        <li key={el.id}>{el.content}</li>
      ))}
    </ul>)
  }
}

const List = connect(
    mapStateToProps,
    { fetchTweets }
  )(ConnectedList);

export default List;