import React, { Component } from "react";
import {deleteTweet, reTweet} from "../actions/index";
import {connect} from "react-redux";
class ConnectedTweet extends Component {
  render() {
    const {content, retweets, id} = this.props;
    return (
        <div className="modal-dialog w-100 m-0 mb-2" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <p> {content}</p>
            </div>
            <div className="modal-footer">
              <i className="fas fa-share-square">{retweets}</i>
              <button type="button" className="fas fa-trash-alt btn btn-danger" onClick={() => this.props.deleteTweet(id)}>Delete</button>
              <button type="button" className="fas fa-share-square btn btn-primary" data-dismiss="modal" onClick={() => this.props.reTweet(id) }>Re-tweet</button>
            </div>
          </div>
        </div>
    );
  }
}


const Tweet = connect(
  null,
  { deleteTweet,  reTweet }
)(ConnectedTweet);

export default Tweet;