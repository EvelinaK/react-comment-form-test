import axios from "axios";
import {
  addCommentRequest,
  addCommentSuccess,
  addCommentError,
  // deleteCommentRequest,
  // deleteCommentSuccess,
  // deleteCommentError,
  fetchCommentRequest,
  fetchCommentSuccess,
  fetchCommentError,
  showCommentRequest,
  showCommentSuccess,
  showCommentError,
  postCommentRequest,
  postCommentSuccess,
  postCommentError,
} from "./actions";

export const BASE_URL = "https://jordan.ashton.fashion/api/goods/30/";

const getComment =
  (currentPage = 1) =>
  async (dispatch) => {
    dispatch(fetchCommentRequest());

    try {
      const { data } = await axios.get(
        `${BASE_URL}comments?page=${currentPage}`
      );
      dispatch(fetchCommentSuccess(data));
    } catch (error) {
      dispatch(fetchCommentError(error));
    }
  };

const showMoreComments = (page) => async (dispatch) => {
  dispatch(showCommentRequest());
  try {
    const { data } = await axios.get(`${BASE_URL}comments?page=${page}`);
    dispatch(showCommentSuccess(data));
  } catch (error) {
    dispatch(showCommentError(error));
  }
};

const postComment = (name, text) => async (dispatch) => {
  dispatch(postCommentRequest());
  try {
    const data = await axios.post(
      `${BASE_URL}comments?name=${name}&text=${text}`
    );
    dispatch(postCommentSuccess(data.config.headers));
  } catch (error) {
    dispatch(postCommentError(error));
  }
};

export default {
  getComment,
  postComment,
  showMoreComments,
  // addContact,
  // deleteContact,
};
