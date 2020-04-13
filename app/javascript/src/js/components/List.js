
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetch_tweets } from "../actions/index";

const mapStateToProps = state => {
  return { tweets: state.tweets };
};


function mapDispatchToProps(dispatch) {
  return {
    fetch_tweets: () => dispatch(fetch_tweets())
  };
}


class ConnectedList extends Component {

  componentDidMount() {
    this.props.fetch_tweets()
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
    mapDispatchToProps
  )(ConnectedList);

export default List;