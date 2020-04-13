
import React from "react";
import { connect } from "react-redux";
import { fetch_tweets } from "../actions/index";

const mapStateToProps = state => {
  return { articles: state.articles };
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
    const {articles} = this.props
    return (<ul>
      {articles.map(el => (
        <li key={el.id}>{el.title}</li>
      ))}
    </ul>)
  }
}

const List = connect(
    mapStateToProps,
    mapDispatchToProps
  )(ConnectedList);

export default List;