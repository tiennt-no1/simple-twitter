import React, { Component } from "react";

class Tweet extends Component {
  render() {
    const {content, retweets} = this.props;
    return (
        <div className="modal-dialog w-100 m-0 mb-2" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <p> {content}</p>
            </div>
            <div className="modal-footer">
              <i className="fas fa-share-square">{retweets}</i>
              <button type="button" className="fas fa-trash-alt btn btn-danger">Delete</button>
              <button type="button" className="fas fa-share-square btn btn-primary" data-dismiss="modal">Re-tweet</button>
            </div>
          </div>
        </div>
    );
  }
}

export default Tweet;