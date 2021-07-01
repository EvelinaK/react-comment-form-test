import React from "react";
import PropTypes from "prop-types";
import "./commentList.scss";
import "font-awesome/css/font-awesome.min.css";
import shortid from "shortid";
import moment from "moment";
const CommentList = ({ comments }) => (
  <div className="row medium-8 large-7 columns">
    <ul className="comment-list block-comments">
      {comments.map(({ id, name, text, created_at }) => (
        <li key={shortid.generate()}>
          <div className="block-comment-content module text">
            <div className="comment-user">
              <div className="comment-user-avatar-wrap"></div>
              <div className="comment-user-text">
                <a
                  href="#0"
                  data-username="cathbailh"
                  className="comment-username"
                >
                  <span className="username">name:{name}</span>
                </a>
                <span className="on"> {id}</span>
                <span className="on"> </span>
                <a href="#0">
                  <time className="block-comment-time">
                    <p className="name-comment">
                      Created at: {moment(created_at).format("lll")}
                    </p>
                  </time>
                </a>
              </div>
            </div>

            <div className="comment-text">
              <p>{text}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  </div>
);
CommentList.propTypes = {};
export default CommentList;
