import React, { Component } from "react";
import { connect } from "react-redux";
import { createNew } from "../actions/index";

class ConnectedForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createNew( this.state.content );
    this.setState({ content: "" });
  }
  render() {
    const { content } = this.state;
    return (
      <div className="container-fluid">
        <form className="form-group" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="content">Content</label>
            <input className="form-control"
                   type="text"
                   id="content"
                   value={content}
                   onChange={this.handleChange}
            />
          </div>

          <button type="submit" className='fa fa-plus btn btn-primary'>Create new tweet</button>
        </form>
      </div>

    );
  }
}

const Form = connect(
  null,
  {createNew}
)(ConnectedForm);

export default Form;