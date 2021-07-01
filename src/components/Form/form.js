import React, { Component } from "react";
import { connect } from "react-redux";
import operations from "../../redux/operations";
import Load from "../Loader/Loader";
import { getLoading } from "../../redux/selectors";
import "./form.scss";
class Form extends Component {
  state = {
    name: "",
    text: "",
  };

  handleChange = (e) => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    const { name, text } = this.state;
    e.preventDefault();
    if (this.state.name || this.state.text !== "") {
      console.log(this.state);
      this.props.onSubmit(name, text);
      this.reset();
      return;
    }
  };

  reset = () => {
    this.setState({ name: "", text: "" });
  };

  render() {
    return (
      <>
        <div className="wrapper">
          <div className="callout secondary">
            <h4 className="leave-comment">Add a Comment</h4>
            <form
              className="post-edit"
              ref="commentForm"
              onSubmit={this.handleSubmit}
            >
              <label className="label" htmlFor={this.nameInputId}>
                Name
                <input
                  className="form-input"
                  type="text"
                  name="name"
                  ref="name"
                  placeholder="Your Name"
                  required
                  value={this.state.name}
                  onChange={this.handleChange}
                  id={this.nameInputId}
                ></input>
              </label>
              <label className="label" htmlFor={this.textInputId}>
                Text
                <textarea
                  ref="desc"
                  className="form-input"
                  type="text"
                  name="text"
                  value={this.state.text}
                  onChange={this.handleChange}
                  id={this.textInputId}
                  placeholder="Add your comment here"
                  required
                />
              </label>
              <button
                id="submit"
                type="submit"
                className="button button-outline comment-button action-button expand-right"
              >
                Add Comment
              </button>
            </form>
          </div>
          {this.props.isLoadingTodos && <Load />}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoadingTodos: getLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (name, text) => dispatch(operations.postComment(name, text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
