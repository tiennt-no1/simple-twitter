import React, { Component } from "react";

class Tweet extends Component {
  render() {
    const {content} = this.props;
    return (
        <div className="modal-dialog w-100 m-0 mb-2" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <p> {content}</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">Delete</button>
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Re-tweet</button>
            </div>
          </div>
        </div>
    );
  }
}

export default Tweet;